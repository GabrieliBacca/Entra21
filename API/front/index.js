fetch('http://localhost:3000/filme')
.then(res => res.json()).then(body =>{
    console.log(body[2])
})