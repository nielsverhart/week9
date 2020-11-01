//drankbestelling opnemen

//boolean voor zolang het programma moet draaien, wordt false als men "stop" in voert
var doorgaan = true;

//constanten keuzes
const SNACK     = 'SNACK';
const FRIS      = 'FRIS';
const BIER      = 'BIER';
const WIJN      = 'WIJN';
const STOPPEN   = 'STOP';

//constanten prijzen
const FRIS_PRIJS = '1.75';
const BIER_PRIJS = '2.00';
const WIJN_PRIJS = '2.25';
const BALPRIJS8  = '4.00';
const BALRPIJS16 = '8.00';

//variabelen voor bestellingstotalen
var totaal_bedrag = 0;
var totaal_bestellingen = 0;

//functie om aantal glazen te vragen en sub-prijs te berekenen op basis van drankkeuze
function vraag_aantal(drankkeuze) {
    var aantal_glazen;
    var sub_bedrag;
    var tmp_prijs;

    aantal_glazen = prompt('Hoeveel glazen ' + drankkeuze + ' wil je hebben?');

    if (isNaN(aantal_glazen)) {
        alert("Dit is geen getal. Bestelling niet geplaatst")
    } else {
        //bedrag berekenen voor dit drankje
        if (drankkeuze == FRIS) {
            sub_bedrag = aantal_glazen * FRIS_PRIJS;
            tmp_prijs = FRIS_PRIJS;
        } else if (drankkeuze == BIER) {
            sub_bedrag = aantal_glazen * BIER_PRIJS;
            tmp_prijs = BIER_PRIJS;
        } else if (drankkeuze == WIJN) {
            sub_bedrag = aantal_glazen * WIJN_PRIJS;
            tmp_prijs = WIJN_PRIJS;
        }

        totaal_bedrag = totaal_bedrag + sub_bedrag;
    	totaal_bestellingen++;
        document.write("Uw bestelling: " + aantal_glazen + " x " + drankkeuze + " (" + aantal_glazen + " x " + " " + tmp_prijs + ") = " + sub_bedrag.toFixed(2) + "</br>");
    }
}

//functie om op basis van aantal schalen en ballen de prijzen uit te rekenen
function bitterbalprijs (keuze, aantal) {
    var sub_bedrag_bal;
    var tmp_prijs;

    //keuze krijgt de waarde van 8 of 16 ballen
    //aantal is het aantal bestelde schalen

    if (keuze == 8) {
        sub_bedrag_bal = BALPRIJS8 * aantal;
        tmp_prijs = BALPRIJS8;
    } else {
        sub_bedrag_bal = BALRPIJS16 * aantal;
        tmp_prijs = BALRPIJS16;
    }

    totaal_bedrag = totaal_bedrag + sub_bedrag_bal;
    totaal_bestellingen++;
    document.write("Uw bitterbalbestelling: " + aantal + " schalen a " + keuze + " ballen (" + aantal + " x " + tmp_prijs + ") = " + sub_bedrag_bal.toFixed(2) + "</br>");
 }

//functie om te vragen hoeveel ballen en schalen gewenst is, met return waarde om gebruiker te tonen
function bitterbal () {
    var aantalbitterballen;
    var aantalschalen;

    aantalbitterballen = prompt("We hebben schalen met 8 of 16 bitterballen. Welk aantal bitterballen wilt u toevoegen? (8 of 16)");
    if (aantalbitterballen != 8 && aantalbitterballen != 16) {
        alert("U kunt alleen kiezen tussen 8 of 16. De bitterballen zijn niet toegevoegd aan uw bestelling");
    } else {
        aantalschalen = prompt("Hoeveel schalen van " + aantalbitterballen + " stuks wilt u bestellen?"); 

        //controleren op gebruikersinvoer; er moet iets ingevoerd worden en dat moet ook een getal zijn
        if (isNaN(aantalschalen)) {
            alert("U voert geen getal in. De bitterballen zijn niet toegevoegd aan uw bestelling");
          } else if (aantalschalen == "") {
            alert("U dient een waarde in te voeren. De bitterballen zijn niet toegevoegd aan uw bestelling");
          } else {
            //als er een invoer is wat ook een getal is dan de functie bitterbalprijs uitvoeren
            bitterbalprijs (aantalbitterballen, aantalschalen);
            return(aantalschalen);
          }
    }
}

//hoofdprogramma, net zolang uitvoeren totdat de gebruiker stop intikt
do {

    drankkeuze = prompt('Welke bestelling wil je plaatsen? (fris, bier, wijn of snack) - type stop om te stoppen');
    drankkeuze = drankkeuze.toUpperCase();

     if (drankkeuze == FRIS) {
        vraag_aantal(drankkeuze);
    } else if (drankkeuze == BIER) {
        vraag_aantal(drankkeuze);
    } else if (drankkeuze == WIJN) {
        vraag_aantal(drankkeuze);
    } else if (drankkeuze == SNACK) {
        //functie bitterbal() aanroepen en het aantal schalen terugsturen naar var waarde
        var waarde = bitterbal();
        if (waarde != null) alert ("U heeft " + waarde + " schalen met bitterballen besteld.");
    } else if (drankkeuze != FRIS && drankkeuze != BIER && drankkeuze != WIJN && drankkeuze != SNACK && drankkeuze != STOPPEN) {
        alert("Dit is geen geldige invoer!");
    } else if (drankkeuze == STOPPEN) {
        doorgaan = false;
    }
} while (doorgaan == true);

alert("U kiest om te stoppen. Hier is uw rekening.")

if (totaal_bestellingen > 0) {
    document.write("------------------------------------------------------" + "</br>");
    document.write("Totaalbedrag (aantal bestellingen: " + totaal_bestellingen + ") = "  + "\u20ac" + totaal_bedrag.toFixed(2));
} else document.write("U heeft geen bestellingen(en) geplaatst.");
