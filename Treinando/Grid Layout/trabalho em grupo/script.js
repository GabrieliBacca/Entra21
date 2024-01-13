// Editable settings.
var CONF = {
  maxNesting: 2,
  gridGap: 14,
  galleryMode: true,
  colorA: '#f9d51a',
  colorB: '#cc000b',
  colorC: '#0166ba',
  colorFg: '#ffffff',
  colorBg: '#000000'
};

// Fixed settings.
var ROWS_NUMBER = 2;
var COLS_NUMBER = 2;
var MIN_CELLS = 2;
var MAX_CELLS = ROWS_NUMBER * COLS_NUMBER;

var MAX_RATIO = 5;
var QUADRANT_NAMES = ['a', 'b', 'c', 'd'];

var COLOR_COUNT = {
  'colorFg': 0,
  'colorBg': 0,
  'colorA': 0,
  'colorB': 0,
  'colorC': 0
};

var COLOR_PROBABILITY = {
  '1.0': 'colorFg',
  '0.45': 'colorB',
  '0.3': 'colorA',
  '0.15': 'colorC'
}


// Dom elements.
var grid = document.getElementById('grid');
var drawButton = document.getElementById('draw');
var description = document.getElementById('description');
var fallback = document.getElementById('fallback');
var texture = document.getElementById('texture');
var canvasLeftSide = document.getElementById('canvas-left');


function initDatGui() {
  var guiControllers = [];
  var colorControllers = [];

  var gui = new dat.gui.GUI();

  gui.add(CONF, 'galleryMode').name('Gallery Mode')
      .onChange(function(galleryModeOn) {
        document.documentElement.classList.toggle('galleryMode');
      });

  guiControllers.push(gui.add(CONF, 'maxNesting')
      .min(2).max(4).step(1).name('Nesting Limit').listen());
  guiControllers.push(gui.add(CONF, 'gridGap')
      .min(0).max(50).step(1).name('Gutter'));

  var colorsFolder = gui.addFolder('Colors');
  colorControllers.push(colorsFolder.addColor(CONF, 'colorA').name('Accent 1'));
  colorControllers.push(colorsFolder.addColor(CONF, 'colorB').name('Accent 2'));
  colorControllers.push(colorsFolder.addColor(CONF, 'colorC').name('Accent 3'));
  colorControllers.push(colorsFolder.addColor(CONF, 'colorFg').name('Main'));
  colorControllers.push(colorsFolder.addColor(CONF, 'colorBg').name('Gutter'));
  colorsFolder.open();

  guiControllers.forEach(function(controller) {
    controller.onChange(_.throttle(draw, 100));
  });

  colorControllers.forEach(function(controller) {
    controller.onFinishChange(draw);
  });

  gui.close();
}


/**
 * Gives all valid cells configations, given the number of cells.
 * @param {Number} howManyCells How many cells to fit in the grid.
 * @return {Array<Array<number>>|undefined} Configuration.
 */
function getAllAreasConfigs(howManyCells) {
  if (howManyCells < MIN_CELLS || howManyCells > MAX_CELLS) {
    return undefined;
  }

  // Meaning of indexes:
  //  +=======+
  //  | 0 | 1 |
  //  |===+===|
  //  | 2 | 3 |
  //  +=======+

  switch (howManyCells) {
    case 2:
      return [
        [[0, 1], [2, 3]],
        [[0, 2], [1, 3]]
      ];
    case 3:
      return [
        [[0, 1], [2], [3]],
        [[0, 2], [1], [3]],
        [[1, 3], [0], [2]],
        [[2, 3], [0], [1]]
      ];
    case 4:
      return [
        [[0], [1], [2], [3]]
      ];
  }
}


/**
 * Converts a cell configuraiton to a different representation, using
 *   letter as area names.
 * @param chosenAreaConfig One of the possible cell areas configurations.
 * @return {Array<String>} Array representing an area configation using letters.
 */
function formatAreaConfig(chosenAreaConfig) {
  var toReturn = _.fill(Array(MAX_CELLS), '');

  chosenAreaConfig.forEach(function(cellArea, cellIndex) {
    cellArea.forEach(function(quadrant) {
      toReturn[quadrant] = QUADRANT_NAMES[cellIndex];
    });
  });

  return _.chunk(toReturn, 2).map(function(subGrid) {
    return subGrid.join(' ');
  });
}


/**
 * Recursively creates the DOM elements
 * based on the configuration received.
 * @param {Element} container The grid container.
 * @param {Number} nestingLevel Nesting level of the current grid.
 * @return {boolean} True if nesting was successful.
 */
function createGrid(container, nestingLevel) {
  var nestingLevel = nestingLevel || 0;

  if (nestingLevel >= CONF.maxNesting) {
    return false;
  }

  // If gap == 0, use fgColor to avoid sub-pixel level lines showing through.
  container.style.backgroundColor = CONF.gridGap > 0 ?
      CONF['colorBg'] : CONF['colorFg'];

  var fragment = document.createDocumentFragment();

  var tplRows = '';
  var tplCols = '';
  var subitem;
  var allAreasConfig;
  var areas;
  var tmpSubGrid;
  var i;

  // How many cells.
  var cellsNumber = _.random(MIN_CELLS, MAX_CELLS);

  // Set container's style from configuration: display, grid-gap,
  // grid-template-rows, grid-template-columns,.
  for (i = 0; i < ROWS_NUMBER; i++) {tplRows += _.random(1, MAX_RATIO) + 'fr ';}
  for (i = 0; i < COLS_NUMBER; i++) {tplCols += _.random(1, MAX_RATIO) + 'fr ';}
  container.style.gridTemplateRows = tplRows;
  container.style.gridTemplateColumns = tplCols;
  container.style.display = 'grid';
  container.style.gridGap = CONF.gridGap + 'px';

  // Get a random template areas configuration from all the possible ones.
  allAreasConfig = getAllAreasConfigs(cellsNumber);
  areas = formatAreaConfig(allAreasConfig[_.random(allAreasConfig.length - 1)]);
  container.style.gridTemplateAreas = '"' + areas[0] + '" "' + areas[1] + '"';

  // Possibly add childnodes and set their grid-area according to the config.
  // The higher the nesting level, the lower the probability of recursion.

  var colorProb;
  var assignedColor;
  for (i = 0; i < cellsNumber; i++) {
    subitem = document.createElement('div');
    subitem.style.gridArea = QUADRANT_NAMES[i];

    if (Math.random() < 1 / (1 + nestingLevel * nestingLevel)) {
      tmpSubGrid = createGrid(subitem, nestingLevel + 1);
    } else {
      tmpSubGrid = false;
    }

    if (tmpSubGrid) {
      // This cell is being recursively split into more cells.
      subitem.style.backgroundColor = CONF.gridGap > 0 ?
          CONF['colorBg'] : CONF['colorFg'];
    } else {
      // "Leaf" cell.
      // Decide the potential color to use out of probablity.
      colorProb = Math.random();
      Object.keys(COLOR_PROBABILITY).forEach(function(prob) {
        if (colorProb <= parseFloat(prob)) {
          assignedColor = COLOR_PROBABILITY[prob];
        }
      })

      // Avoid using primary colors for more than CONF.maxNesting times.
      // Fallback to colorFg color in case.
      if (assignedColor === 'colorFg' ||
          COLOR_COUNT[assignedColor] < Math.max(1, CONF.maxNesting - 1)) {
        COLOR_COUNT[assignedColor]++;
      } else {
        assignedColor = 'colorFg';
      }

      subitem.style.backgroundColor = CONF[assignedColor];
    }

    fragment.appendChild(subitem);
  }

  // Finally append the document fragment to the grid container.
  container.appendChild(fragment);
  return true;
}


/**
 * Draws a new grid.
 */
function draw() {
  // Removes all childnodes.
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  while (canvasLeftSide.firstChild) {
    canvasLeftSide.removeChild(canvasLeftSide.firstChild);
  }

  // Reset color count
  Object.keys(COLOR_COUNT).forEach(function(c) {
    COLOR_COUNT[c] = 0;
  });

  // Creates new grid.
  createGrid(grid);

  var gridDup = grid.cloneNode(true);
  gridDup.id = '';
  canvasLeftSide.appendChild(gridDup);

  var texture = document.createElement('div');
  texture.classList.add('texture');
  canvasLeftSide.appendChild(texture);
}

function isGridSupported() {
  var div = document.createElement('div');
  div.style.display = 'grid';

  return div.style.display === 'grid';
}


function init() {
  // On button click.
  drawButton.addEventListener('click', function() {
    CONF.maxNesting = _.random(2, 4);
    draw();
  });

  initDatGui();

  if (isGridSupported()) {
    draw();
    drawButton.style.display = 'block';
    description.style.display = 'block';
  } else {
    texture.style.display = 'none';
  }
}

init();

// // Verifica se o navegador suporta CSS Grid
// if (typeof CSS !== 'undefined' && CSS.supports('display', 'grid')) {
//   // O navegador suporta CSS Grid, então você pode usar o código CSS Grid normalmente
//   // Adicione o código CSS Grid aqui
// } else {
//   // O navegador não suporta CSS Grid, então você pode fornecer uma experiência alternativa
//   // Use uma abordagem de layout diferente, como flexbox ou float
//   // Adicione o código CSS para a experiência alternativa aqui
// }