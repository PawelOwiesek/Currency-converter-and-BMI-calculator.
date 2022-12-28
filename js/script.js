console.log("Witaj wybrancu:)");
// "Ta sekcja dotyczy kalkulatora BMI"
let formElement = document.querySelector(".js-form");
let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let height = heightElement.value;
    let weight = weightElement.value;
    let bmi = weight / ((height / 100) ** 2);

    if (bmi > 0 && bmi < 18.5) { bmiElement.innerText = bmi.toFixed(2) + " -masz niedowage" }
    else if (bmi > 18.5 && bmi < 24.9) {
        bmiElement.innerText = bmi.toFixed(2) + " -twoja waga jest poprawna"
    }
    else {
        bmiElement.innerText = bmi.toFixed(2) + " -wazysz za duzo"
    }
    document.querySelector(".js-form").reset()
});

// "Ta sekcja dotyczy kalkulatora Walut."

let formCurrencyElement = document.querySelector(".js-formCurrency");
let zlotowkiElement = document.querySelector(".js-zlotowki");
let currencyElement = document.querySelector(".js-currency");
let rateElement = document.querySelector(".js-rate");
let amountElement = document.querySelector(".js-amount");

let funt = 5.05;
let euro = 4.78;
let dollar = 4.82;

formCurrencyElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let contant = zlotowkiElement.value;
    let currency = currencyElement.value;
    let amount;
    switch (currency) {
        case "funt": amount = contant / funt;
            break;
        case "euro": amount = contant / euro;
            break;
        case "dollar": amount = contant / dollar;
            break;


    }
    switch (currency) {
        case "funt": rate = funt + "GBP";
            break;
        case "euro": rate = euro + "EUR";
            break;
        case "dollar": rate = dollar + "USD";
            break;
    }
    rateElement.innerText = `${rate}`
    amountElement.innerText = `${amount.toFixed(2)}`
    document.querySelector(".js-formCurrency").reset()
});

