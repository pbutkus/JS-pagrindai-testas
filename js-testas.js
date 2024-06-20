/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
const convertEurToUsd = (eur) => {
    const rate = 1.0749;
    return (eur * rate).toFixed(2)
}

const printEurToUsdConversion = () => {
    const eur = Math.ceil(Math.random() * 1000);
    console.log(`${eur} EUR = ${convertEurToUsd(eur)} USD`);
}

printEurToUsdConversion();

console.log();
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

const convertUsdToEur = (usd) => {
    const rate = 1.0749;
    return (usd / rate).toFixed(2)
}

const printUsdToEurConversion = () => {
    const usd = Math.ceil(Math.random() * 1000);
    console.log(`${usd} USD = ${convertUsdToEur(usd)} EUR`);
}

printUsdToEurConversion();

console.log();
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
const calculateBMI = () => {
    const weight = 80;
    const height = 1.8;
    const BMI = (weight / (height ** 2)).toFixed(2);

    console.log(`Weight: ${weight}`);
    console.log(`Height: ${height}`);
    console.log(`BMI: ${BMI}`);

    if (BMI > 25) {
        console.log("Overweight");
    } else if (BMI < 18.5) {
        console.log("Underweight");
    } else {
        console.log("Normal weight");
    }
}

calculateBMI();

console.log();
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
const formatAge = (age) => {
    const ageInSeconds = age * 31536000;
    const ageInMinutes = age * 525600;
    const ageInHours = age * 8760;
    const ageInDays = age * 365;

    console.log(`Age in seconds: ${ageInSeconds}`);
    console.log(`Age in minutes: ${ageInMinutes}`);
    console.log(`Age in hours: ${ageInHours}`);
    console.log(`Age in days: ${ageInDays}`);
    console.log(`Age in years: ${age}`);
}

formatAge(50);

console.log();
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
const temperatureConverter = () => {
    const convertFToC = (temp) => ((temp - 32) * (5 / 9)).toFixed(2);
    const convertCToF = (temp) => (temp * (9 / 5) + 32).toFixed(2);

    const F = Math.round(Math.random() * 100);
    const C = Math.round(Math.random() * 100);

    console.log(`${F}F = ${convertFToC(F)}C`);
    console.log(`${C}C = ${convertCToF(C)}F`);
}

temperatureConverter();

console.log();
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
const printNumberLine = () => {
    let array = [];

    for (let i = 1; i <= 10; i++) {
        array.push(i);
    }

    console.log(array.join("-"));
}

printNumberLine();

console.log();
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
const printStarPattern = () => {
    for (let i = 1; i <= 5; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

printStarPattern();

console.log();
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
const calculateDaysUntilChristmas = () => {
    const dateNow = new Date();
    const christmas = new Date(dateNow.getFullYear(), 11, 25);

    if (dateNow.getMonth() === 11 && dateNow.getDate() > 25) {
        christmas.setFullYear(dateNow.getFullYear() + 1);
    }

    console.log(`${Math.round((christmas.getTime() - dateNow.getTime()) / 86400000)} days until Christmas`);
}

calculateDaysUntilChristmas();

console.log();
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
const printJoinedNameArray = (arr) => {
    console.log(arr.join("+"));
}

printJoinedNameArray(["Tomas", "Dainius", "Paulius", "Jonas"]);

console.log();
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
const generatePassword = (length) => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[\S]+$/;

    // Reikalinga optimizacija
    while (true) {
        const password = Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map((x) => characters[x % characters.length])
            .join('');
        if (regex.test(password)) {
            return password;
        }
    }

}


console.log(`Generated password: ${generatePassword(12)}`);
