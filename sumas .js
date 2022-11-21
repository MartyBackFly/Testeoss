function main(num) {
  var depth = num; 
  
  /* parseInt(readLine(), 10); */
  //your code goes here

  var i = 0;
  var day = 0;
  while (depth > i) {
    /* mientras que ( tu vieja bla bla ) */

    i = i + 7;
    day = day + 1;

    if (depth > i) {
      i = i - 2;
    }
  }

  return day;
}

/* main(valor numero que quiera)  */

let test1 = (num) => {
  var i = 0;
  var day = 0;
  

  for (day; i < num; day++) {
    /* repetir hasta que  (variable declaracion - falso - incremento ) */

    i = i + 7;
    if (num > i) {
      i = i - 2;
    }

}
return day;

};

/* function main2(flightNumber, flightStatus) {
  take flight number and its status 
  var flightNumber = 
  var flightStatus =  */
  
  /* var flight1 ={flightNumber, flightStatus }; */



  
  /* //assign a flight object to flight1 variable
  
  //output
  console.log('The flight ' + flight1.number + ' is ' + flight1.status) */
  


function flight(flightNumber, status1) {
  //fix the constructor
  


  this.number = flightNumber;
  this.status = status1;

  var flight1 = new flight(234, volando);


};









    console.log("Flight",flight1(flight1.number, flight1.status));

    console.log("Test1",test1(128))

    console.log("Main",main(42))


