console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers")
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description)
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers")
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager." + departments.sales.jobs[1].description)

const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

if (userInput === 'marketing') {
    console.log("Je koos marketing. " + departments.marketing.description)
}
else if (userInput === 'sales') {
    console.log("Je koos sales. " + departments.sales.description)
}
else if (userInput === 'customer-service') {
    console.log("Je koos customer-service. " + departments["customer-service"].description)
}
else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}
