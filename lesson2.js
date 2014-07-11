var somma=0;
//l'avevo già fatto con un ciclo for...
process.argv.forEach(function (value, index){
  if (index >= 2) {
    somma += Number(value);
  }
});
console.log(somma);