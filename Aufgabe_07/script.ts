namespace Aufgabe07 {


function countries(peopleincountry, peopleinpercent , peoplegrowth, peoplegrowthfull, Land) {

console.log("Klick")


document.getElementById("headline1").innerHTML = "Einwohnerzahl von "+Land+"";
document.getElementById("text1").innerHTML = "Gesamtzahl Einwohner*innen in "+Land+" im Jahr 2022"

document.getElementById("number1").innerHTML = peopleincountry + "Mio";
document.getElementById("number2").innerHTML = peopleinpercent.toFixed(2) + "%";
document.getElementById("number3").innerHTML = peoplegrowth.toFixed(2) + "%";
document.getElementById("number4").innerHTML = peoplegrowthfull.toFixed(2) + "Mio";

}

document.querySelector("#ger").addEventListener('click', function() {
countries(ger_2022, ger_perc_to_eu, ger_growth, ger_growth_all, "Deutschland");
})

document.querySelector("#fra").addEventListener('click', function() {
countries(fra_2022, fra_perc_to_eu, fra_growth, fra_growth_all, "Frankreich");
})

document.querySelector("#ita").addEventListener('click', function() {
    countries(ita_2022, ita_perc_to_eu, ita_growth, ita_growth_all, "Italien");
    })

document.querySelector("#swe").addEventListener('click', function() {
countries(swe_2022, swe_perc_to_eu, swe_growth, swe_growth_all, "Schweden");
})

document.querySelector("#star").addEventListener('click', function() {
    countries(eu_number_all_2022, eu_percent, eu_growth, eu_growth_all, "EU");
    })



function germany () {
    console.log ("Klick")
}

function france () {
    console.log ("Klick")
}
function italy () {
    console.log ("Klick")
}

function sweden () {
    console.log ("Klick")
}

function star () {
    console.log ("Klick")
}



let ger_2022 = 84.1;
let ger_2008 = 82.11;
let eu_people = 447.7;
let ger_perc_to_eu = 100 / eu_people * ger_2022;
let ger_growth = ger_2022 / ger_2008;
let ger_growth_all = ger_2022 - ger_2008
console.log ("Einwohnerzahl Deutschlands im Jahr 2022 in Millionen" + " " + ger_2022 + " " + "Mio. Relativ zur Gesamtzahl der Einwohner der EU" + " " + ger_perc_to_eu.toFixed(2) + "% Wachstumsrate seit 2008" + " " + ger_growth.toFixed(2) + " " + "Wachstumsrate zwischen den Jahren 2008 und 2022 gesamt" + " " + ger_growth_all.toFixed(2) + " " + "Mio")


let fra_2022 = 67.8;
let fra_2008 = 62.2;
let eu_folk = 447.7;
let fra_perc_to_eu = 100 / eu_folk * fra_2022;
let fra_growth = fra_2022 / fra_2008;
let fra_growth_all = fra_2022 - fra_2008; 
console.log ("Einwohnerzahl Frankreichs im Jahr 2022 in Millionen" + " " + fra_2022 + " " + "Mio. Relativ zur Gesamtzahl der Einwohner der EU" + " " + fra_perc_to_eu.toFixed(2) + "% Wachstumsrate seit 2008" + " " + fra_growth.toFixed(2) + " " + "Wachstumsrate zwischen den Jahren 2008 und 2022 gesamt" + " " + fra_growth_all.toFixed(2) + " " + "Mio")


let ita_2022 = 60.026;
let ita_2008 = 58.9;
let eu_full = 447.7;
let ita_perc_to_eu = 100 / eu_full * ita_2022;
let ita_growth = ita_2022 / ita_2008;
let ita_growth_all = fra_2022 - fra_2008
console.log ("Einwohnerzahl Italiens im Jahr 2022 in Millionen" + " " + ita_2022 + " " + "Mio. Relativ zur Gesamtzahl der Einwohner der EU" + " " + ita_perc_to_eu.toFixed(2) + "% Wachstumsrate seit 2008" + " " + ita_growth.toFixed(2) + " " + "Wachstumsrate zwischen den Jahren 2008 und 2022 gesamt" + " " + ita_growth_all.toFixed(2) + " " + "Mio")


let swe_2022 = 10.45;
let swe_2008 = 9.236;
let eu_all = 447.7;
let swe_perc_to_eu = 100 / eu_all * swe_2022;
let swe_growth = swe_2022 / swe_2008;
let swe_growth_all = swe_2022 - swe_2008
console.log ("Einwohnerzahl Schwedens im Jahr 2022 in Millionen" + " " + swe_2022 + " " + "Mio. Relativ zur Gesamtzahl der Einwohner der EU" + " " + swe_perc_to_eu.toFixed(2) + "% Wachstumsrate seit 2008" + " " + swe_growth.toFixed(2) + " " + "Wachstumsrate zwischen den Jahren 2008 und 2022 gesamt" + " " + swe_growth_all.toFixed(2) + " " + "Mio")


let eu_number_all_2022= 447.7
let eu_number_2008= 495.0
let eu_percent= 100 
let eu_growth = eu_number_all_2022 / eu_number_2008;
let eu_growth_all = eu_number_all_2022 - eu_number_2008;
console.log ("Einwohnerzahl der EU" + " " + eu_number_all_2022 + " " + "Gesamtzahl der EU" + " " + eu_percent.toFixed(2) + "% Wachstumsrate seit 2008" + " " + eu_growth.toFixed(2) + " " + "Wachstumsrate zwischen den Jahren 2008 und 2022 gesamt" + " " + eu_growth_all.toFixed(2) + " " + "Mio")
}