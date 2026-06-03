console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers")
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description)
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers")
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager." + departments.sales.jobs[1].description)

const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

if (userInput === 'marketing' || userInput === 'sales' || userInput === 'customer-service') {
    console.log(userInput + " is een leuke afdeling om te werken. Er werken op dit moment " + departments[userInput].numberOfEmployees + " medewerkers.")
}
else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}


const jobInput = prompt('Je koos ' + userInput + '. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n0: ' + departments[userInput].jobs[0].title + '\n1: ' + departments[userInput].jobs[1].title + '\n2: ' + departments[userInput].jobs[2].title + '\n3: ' + departments[userInput].jobs[3].title);

console.log(jobInput);

if (jobInput === '0') {
    console.log("Je koos " + departments[userInput].jobs[0].title + ". Een uitdagende rol! " + departments[userInput].jobs[0].description);
    document.getElementById('role-title').textContent = departments[userInput].jobs[0].title;
    document.getElementById('department-description').textContent = departments[userInput].description;
    document.getElementById('role-description').textContent = departments[userInput].jobs[0].description;
    }
else if (jobInput === '1') {
    console.log("Je koos " + departments[userInput].jobs[1].title + ". Een uitdagende rol! " + departments[userInput].jobs[1].description)
    document.getElementById('role-title').textContent = departments[userInput].jobs[1].title;
    document.getElementById('department-description').textContent = departments[userInput].description;
    document.getElementById('role-description').textContent = departments[userInput].jobs[1].description;
}
else if (jobInput === '2') {
    console.log("Je koos " + departments[userInput].jobs[2].title + ". Een uitdagende rol! " + departments[userInput].jobs[2].description);
    document.getElementById('role-title').textContent = departments[userInput].jobs[2].title;
    document.getElementById('department-description').textContent = departments[userInput].description;
    document.getElementById('role-description').textContent = departments[userInput].jobs[2].description;
}
else if (jobInput === '3') {
    console.log("Je koos " + departments[userInput].jobs[3].title + ". Een uitdagende rol! " + departments[userInput].jobs[3].description)
    document.getElementById('role-title').textContent = departments[userInput].jobs[3].title;
    document.getElementById('department-description').textContent = departments[userInput].description;
    document.getElementById('role-description').textContent = departments[userInput].jobs[3].description;
}
else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
    document.getElementById('error-message').textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
}
