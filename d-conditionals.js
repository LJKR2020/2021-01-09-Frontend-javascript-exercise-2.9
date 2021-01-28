// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false
// ==========================================

const uitkomst1 = (10>20);
console.log(uitkomst1);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true
// ==========================================
const uitkomst2 = (10 !== 11);
console.log(uitkomst2);

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false
// ==========================================
const uitkomst3 = ("zoet" === "sappig");
console.log(uitkomst3);

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!'
// ==========================================
const grade = 9;
if (grade > 8) {console.log("Cum Laude!");}
if (grade >= 5.5 && grade < 8) {console.log("Voldoende");}
if (grade < 5.5) {console.log("Onvoldoende");}

// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================

const isRaining = false;
const temperature = 25;

if (!isRaining && temperature > 21) {
    console.log("Je kunt een korte broek aan!");
}

if (isRaining || temperature < 12) {
    console.log("Doe een jas aan!");
}

// conditionals:
// - maken van vergelijkingen --> leeftijd 18
// - leeftijd groter dan 18, dan mag je alcohol kopen

const age = 30
const isOfDrinkingAge = age >= 18
// console.log(isOfDrinkingAge)

if (isOfDrinkingAge){
    console.log("U kunt afrekenen :)")}

else {console.log("Iemand komt u controleren")}