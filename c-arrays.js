// Array is een verzameling en hebben een vaste volgorde.

// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen in op.              // bijv. 2020, 2019, 2018 en 2017
// ==========================================
const years = [1990, 2008, 2020, 2021];
console.log(years.length); // 4
console.log(years); // je ziet de hele array

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies in op.         // bijv. schaken, koekjes eten en muziek luisteren
// ==========================================
const myHobbys = ["zwemmen", "wandelen", "gamen"];
console.log(myHobbys)


// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Log de waarde 3 uit de array in de terminal                                          // geeft 3
// ==========================================
const numbers = [3, 4, 5, 7, 2];
console.log(numbers[0]); // als je een nummer uit deze array wilt halen begin je bij de eerste met 0.

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje
// 4b. Log de waarde blauw uit de array in de terminal                                      // geeft blauw
// 4c. Log de waarde geel uit de array in de terminal                                       // geeft geel
// ==========================================
const kleuren = ["groen", "geel", "rood", "paars", "blauw", "oranje"];
console.log(kleuren[4]);
console.log(kleuren[1]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25
// 5b. Pas een van de items in de array aan zodat de cijferreeks netjes doorloopt
// 5c. Log de de array in de terminal                                                       // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
const numbersInOrder = [21, 22, 23, 25, 25];
numbersInOrder[3] = 24;
// je mag getallen in array een nieuwe waarde geven. ook wanneer het een const is.
// voor je collega's kun je const vervangen voor een let.
console.log(numbersInOrder);
// je gebruikt dit principe als er in de webshop korting gegeven wordt.


// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Verander daarna de waarde bladerdeeg in lasagne bladen
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================

const ingredienten = ["bladerdeeg", "knoflook", "spinazie"]
ingredienten[0] = "lasagnebladen"
console.log(ingredienten)
console.log(ingredienten.length)
