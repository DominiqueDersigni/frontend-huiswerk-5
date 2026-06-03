console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers")
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description)
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers")
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager." + departments.sales.jobs[1].description)

// const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
// console.log(userInput);

// if (userInput ===ja 'marketing') {
//     console.log("Je koos marketing. " + departments.marketing.description)
// }
// else if (userInput === 'sales') {
//     console.log("Je koos sales. " + departments.sales.description)
// }
// else if (userInput === 'customer-service') {
//     console.log("Je koos customer-service. " + departments["customer-service"].description)
// }
// else {
//     console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
// }


const userInput = prompt('Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n0: ' + departments.marketing.jobs[0].title + '\n1: ' + departments.marketing.jobs[1].title + '\n2: ' + departments.marketing.jobs[2].title + '\n3: ' + departments.marketing.jobs[3].title);

console.log(userInput);

if (userInput === '0') {
    console.log("Je koos " + departments.marketing.jobs[0].title + ". Een uitdagende rol! " + departments.marketing.jobs[0].description)
    }
else if (userInput === '1') {
    console.log("Je koos " + departments.marketing.jobs[1].title + ". Een uitdagende rol! " + departments.marketing.jobs[1].description)
}
else if (userInput === '2') {
    console.log("Je koos " + departments.marketing.jobs[2].title + ". Een uitdagende rol! " + departments.marketing.jobs[2].description)
}
else if (userInput === '3') {
    console.log("Je koos " + departments.marketing.jobs[3].title + ". Een uitdagende rol! " + departments.marketing.jobs[3].description)
}
else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}