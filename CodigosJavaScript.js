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
function aeroportflights(flightNumber, flightStatus) {
  function flight(flightNumber123, status123) {
    this.number = flightNumber123;
    this.status = status123;
  }

  var flight1 = new flight(flightNumber, flightStatus);

  /* var Number = "vuelo numero" + flight.flightNumber;
  var Status = "ëstado del vuelo" + flight.flightStatus; */

  /* var flight1 ={flightNumber, flightStatus }; */

  /* //assign a flight object to flight1 variable
  
  //output

  console.log('The flight ' + flight1.number + ' is ' + flight1.status) */
  return `The flight ${flight1.number} esta ${flight1.status}`;

  // the constructor objets
}

/* --------------------------------------------------------------------- */

function productos(prodID, price, discount) {
  var prod1 = new Product(prodID, price);

  //haciendo un descuento
  if (discount) {
    prod1.changePrice(discount);
    
    
    /* si al if le pasas 0 lo toma como false y no imprime la linea 78 , si necesito un 0 necesito evaluar de otra manera como si es > o < que 0 por ejemplo */
    console.log(`hola mi vida hola mi cielo hopla mi gran amorr`)
  }

  return `el producto ${prod1.prodID} cuesta tanto como $${prod1.price} wachin `;
}

  function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;
  //completa el método para hacer el descuento
  this.changePrice = function (discount) {
  this.price = price - (discount / 100) * price;
  };
}

/* --------------------------------------------------------------------- */

console.log("FunctionMain ==>", main(42));

console.log("FunctionTest1 ==>", test1(128));

console.log(
  "FunctionFlight ==>",
  aeroportflights(1972, "llegando a lo de tu hermana")
);

console.log("FunctionProduct ==>", productos("azucaaaa", 1343, 1));
