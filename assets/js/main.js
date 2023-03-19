




const showGrundumsatz = () => {
    const koerperGroesse = document.querySelector('#groesse').value;
    const alter = document.querySelector('#alter').value;
    const koerperGewicht = document.querySelector('#gewicht').value;
    const geschlechtRadioweiblich = document.querySelector('form input[type=radio]');
    const activityLevel = document.querySelector('form select').value;
    const outputGrundumsatz = document.querySelector('#outputGrundumsatz');
    const resultGesamtumsatz = document.querySelector('#resultGesamtumsatz');
    const outputGrundumsatz_kJ = document.querySelector('#outputGrundumsatz_kJ');
    const outputGesamtumsatz_kJ = document.querySelector('#outputGesamtumsatz_kJ');
    let grundUmsatz;
    let gesamtUmsatz;

    if (geschlechtRadioweiblich.checked) {
        console.log("geschlechtRadioweiblich.checked");
        grundUmsatz = 655.1 + (9.6 * koerperGewicht) + (1.8 * koerperGroesse) - (4.7 * alter);
        gesamtUmsatz = grundUmsatz * activityLevel;
        outputGrundumsatz.innerHTML = grundUmsatz.toFixed(0);
        resultGesamtumsatz.innerHTML = gesamtUmsatz.toFixed(0);
        outputGrundumsatz_kJ.innerHTML = (grundUmsatz * 4.19).toFixed(0);
        outputGesamtumsatz_kJ.innerHTML = (gesamtUmsatz * 4.19).toFixed(0);
    } else {
        grundUmsatz = 664.7 + (13.7 * koerperGewicht) + (5 * koerperGroesse) - (6.8 * alter);
        gesamtUmsatz = grundUmsatz * activityLevel;
        outputGrundumsatz.innerHTML = grundUmsatz.toFixed(0);
        resultGesamtumsatz.innerHTML = gesamtUmsatz.toFixed(0);
        outputGrundumsatz_kJ.innerHTML = (grundUmsatz * 4.19).toFixed(0).toLocaleString();
        outputGesamtumsatz_kJ.innerHTML = (gesamtUmsatz * 4.19).toFixed(0);
    }
}

console.log(outputGrundumsatz);
























