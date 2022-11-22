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
 /*  ------------------------------------------------------------------------------------------ */
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


  /*  ------------------------------------------------------------------------------------------ */

 /* function main2(flightNumber, flightStatus) { */
  /* take flight number and its status  */
  
  var flight = { flightNumber:1948, flightStatus:"Volando"}
  
  var Number = "vuelo numero" + flight.flightNumber 
  var Status = "ëstado del vuelo" +flight.flightStatus 
  
  /* var flight1 ={flightNumber, flightStatus }; */

 

  
  /* //assign a flight object to flight1 variable
  
  //output
  console.log('The flight ' + flight1.number + ' is ' + flight1.status) */
  


function flight(flightNumber, status1) {
  //fix the constructor
  


  this.number = flightNumber;
  this.status = status1;




  
};



/* --------------------------------------------------------------------- */


function main() {
  var prodID = readLine();
  var price = parseInt(readLine(),10);
  var discount = parseInt(readLine(),10);
  
  var prod1= new Product(prodID, price);
  
  console.log(prod1.prodID + " price: " + prod1.price);
  
  
  //haciendo un descuento
  prod1.changePrice(discount);
  
  console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;
  //completa el método para hacer el descuento
  this.changePrice = function(discount){
  this.price = price-((discount/100)*price)
  
      
  }
};
    
/* --------------------------------------------------------------------- */


    





console.log("Main",main(42))

console.log("Test1",test1(128))

console.log("Flight",flight(numero, estado));

console.log("Product",Product(prodID, price));