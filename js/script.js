for (var i = 1; i <= 100; i++) {

  // (i % 3) da 0 per multipli di 3. 0 in booleano è falso. Quindi !(i % 3) è vero per i multipli di 3.

  if ( !(i % 3) && !(i % 5) ){ // se il numero i è multiplo di 3 e 5
    console.log("FizzBuzz");
  } else if (!(i % 3) && (i % 5)){ // se il numero i è multiplo di 3 ma non è multiplo di 5
    console.log("Fizz");
  } else if ((i % 3) && !(i % 5)){ // se il numero i non è multiplo di 3 ma è multiplo di 5
    console.log("Buzz");
  } else { // in tutti gli altri casi. Quindi non è multiplo di 3 e non è multiplo di 5
    console.log(i);
  }


}
