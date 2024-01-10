function submitVote(animal) {
    document.getElementById('votingForm').querySelector('input[name="animal"]').value = animal;
    document.getElementById('votingForm').submit();
  }
  