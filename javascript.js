/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

/*----String----*/
console.log("Text yippie!");
let yippieString = "Yippie im a string!";
console.log(yippieString);

/*----Numbers----*/
let yippieCounter = 420;
console.log(yippieCounter);

/*---BOLEAN AKA TRUE / FALSE ----*/
let yippieTrue = true;
let yippieFalse = false;

/*----Array---*/
let danielArray = [1, 2, 3, 4];
console.log(danielArray);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

/*---ADDITION / SUBTRACTION / MULIPLCATION & MODULUS*/
console.log("We love fruits");
let num1 = 420;
let num2 = 69;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 % num2);

console.log("Strawberry is a fruit");
let counter = 2;
counter += 10;
console.log(counter);
counter -= 10;
console.log(counter);
counter *= 4;
console.log(counter);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

// Skriv koden for oppgave 4 her

let userName = "Daniel";
let userAge = 20;
let userIsBlocked = false;
let goToPage = "/home";
let userIsLoggedIn = false;

if (userName !== "" && userAge >=18 && userIsBlocked === false) {
  userIsLoggedIn = true
  goToPage = "/home"
  console.log("Welcome" + " " +  userName + " " + "You got lucky this time!")
} else if (userAge < 18 || userIsBlocked === true) {
  console.log("You can't drive. Unlucky!");
} else {
  console.log("Something unexpected happened");
}




/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;

// Skriv koden for oppgave 5 her'

const userGender = userMale ? "Mr" : "Mrs";
console.log(userGender);
