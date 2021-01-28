// ==========================================
// --> LOG DE WAARDE VAN IEDER ANTWOORD DIRECT IN DE TERMINAL <--
// ==========================================
// wat is een operator en wanneer heb je het nodig?
// - berekeningen maken (+, -, *, /, ++, --)
// - text aan elkaar plakken
// - vergelijkingen,
// - een variabele een waarde toekennen (=)


// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9
// ==========================================
const outcome1 = 4 + 5;
console.log(outcome1);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364
// ==========================================
const outcome2 = 7 * 52;
console.log(outcome2);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49
// ==========================================
const outcome3 = (4 + 3) * 7;
console.log(outcome3);


// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12
// ==========================================
const outcome4 = (36 / 6) * 2;
console.log(outcome4);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig'
// ==========================================
const zoet = "zoet";
const sappig = "sappig";
const totaal = zoet + sappig;
console.log("Wanneer je", zoet, "en", sappig, "achter elkaar plakt krijg je", totaal);

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters'
// ==========================================
const voornaam = "L";
const achternaam = "K";
const volledigeNaam = voornaam + " " + achternaam;
console.log(volledigeNaam);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg
// ==========================================
const woonplaats = "Zwijndrecht";
const provincie = "Zuid-Holland";
const volledigewoonplaats = woonplaats + ", " + provincie;
console.log(volledigewoonplaats);
