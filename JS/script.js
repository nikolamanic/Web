/*
alert('Poz')
console.log('Pozdrav iz konzole')
console.error('Pozdrav iz konzole')
console.warn('Pozdrav iz konzole')
console.log(5+5)
console.log(5 === 5)
console.log(5 === 6)
// == je labava jednakost, a === je stroga jednakost
//-----------------------------------------------------//  
document.write('Pozdrav sa stranice')
document.getElementById('poruka').innerText = 'Pozdrav!'   // -  Menja tekst u elementu sa id-jem "poruka"

//-----------------------------------------------------//
window.alert('Pozdrav iz Popup-a')
window.open() // - ovo moze da ne radi ako su na sajtu blokirani pop up-ovi
*/

let m = 'Programiranje'
//m = ''; // ovo bkv brise prethdnu promenljivu
//console.log(m);
 
/*
let god = '18';
let mes = 3;
let rez = god + mes;
console.log(rez);
*/

/*
let god = 18;
let mes = 3;
let rez = god + mes;
console.log(rez);

console.log(typeof(god));
 

let n;
n = 'JavaScript';
console.log(n);

  
let br1 = 65;
let br2 = '5';
console.log(typeof(br2));
br2 = parseInt(br2);  //string -> broj
console.log(typeof(br2));
console.log(br2);
console.log(br1 + br2);


let br11 = 10;
let br12 = 5;
let brTmp;

brTmp=br11;
br11=br12;
br12=brTmp;

console.log('Prvi broj je: '  + br11);
console.log('Drugi broj je: '  + br12);

const prvi = 10; // konstantna vrednost


//god +=2;
//god -=2;


let recenica = `Ja sam Nikola imam 18 god`;
//let recenica1 = `Ja sam ${ime} imam ${god} godina`;

//kosi navodnici su za ovo



let br3 = 7;
let br4 = 8;
console.log(br1 > br2)

//&&, <, >, ||f

console.log((br1 > br2) && (br3 > br4));

console.log((br1 > br2) || (br3 > br4));



let a = 50;
let b = 10;

if(a < b){
    console.log('Prvi broj je manji od drugog')
} else{
    console.log('Prvi broj NIJE manji od drugog');
}


let vr = 14;

if(vr < 10){
    console.log('Dobro jutro!');
} else if(vr < 20){
    console.log('Dobar dan!');
} else {
    console.log('Dobro vece!');
}

let me = 6;

switch(me){
    case 1:
        console.log('Januar');
        break;

    case 2:
        console.log('Februar');
        break;

    case 3:
         console.log('Mart');
        break;

    case 4:
        console.log('April');
        break;

    case 5:
        console.log('Maj');
        break;

    case 6:
        console.log('Jun');
        break;

    case 7:
        console.log('Jul');
        break;

    case 8:
        console.log('Avgust');
        break;

    case 9:
        console.log('Septembar');
        break;

    case 10:
        console.log('Oktobar');
        break;

    case 11:
        console.log('Novembar');
        break;

    case 12:
        console.log('Decembar');
        break;
}



let novac = 25; // 25 novcanica
let vrednost = 10; // jedna vredi 10e
let br = 0;

while(br < novac){
    br++;
}

    console.log(br * 10);


let novcanice = [10, 5, 50, 10, 100, 5, 10, 20, 20, 50];
let broj_novcanica = novcanice.length;
console.log(broj_novcanica);

console.log('Broj novcanica je:' + broj_novcanica);

console.log(novcanice);

console.log(novcanice[3]);


while(br < broj_novcanica){
    console.log(novcanice[br]);
    br++;
}
*/
//let br = 0;
let novcanice = [10, 5, 50, 10, 100, 5, 10, 20, 20, 50];
let broj_novcanica = novcanice.length;


/*
while(br < broj_novcanica){

    console.log('------------');
    console.log('Uslov je prosao');
    console.log(`Novcanica na poziciji [${br}] je: ${novcanice[br]}`);
    br++;
}


if(br < broj_novcanica){
    console.log('brojac je manji');
} else{
    console.log('brojac nije manji');
}

console.log('brojac je ' + br);
*/
let ukupnoNovca = 0;

/*
for(let br = 0; br < broj_novcanica; br++){
    console.log(novcanice[br]);

    //ukupnoNovca = ukupnoNovca + novcanice[br];
    ukupnoNovca += novcanice[br];

}

console.log('##################');
console.log('Ukupno ima:' + ukupnoNovca + 'eura');

*/
let br = 0;
for(let br in novcanice){
    console.log(novcanice[br]);

    ukupnoNovca += novcanice[br];

}

console.log('##################');
console.log('Ukupno ima: ' + ukupnoNovca + ' eura');


for (br in novcanice){
    console.log(br);
    console.log(novcanice[br]);
    console.log('------------------');
}


for(let novcanica of novcanice){
    console.log(novcanica);
}


let automobili = ['Audi', 'BMW', 'Porsche', 'Mercedes-Benz'];

// for...of automatski pravi novu promenljivu (automobil) za svaku stavku u nizu
for(let automobil of automobili){
    console.log(automobil);
}

// forEach poziva funkciju za svaki element, a 'automobil' je parametar koji automatski prima vrednost trenutnog člana niza
automobili.forEach(function(automobil){
    console.log(automobil);
});

automobili.forEach(automobil => console.log(automobil)); // bez function


/*
let automobili = {
    prvi_auto: 'Audi', 
    drugi_auto: 'BMW', 
    treci_auto: 'Porsche', 
    cetvrti_auto: 'Mercedes-Benz'
};
*/

/*
let automobili = {
    audi: '50000',
    bmw: '60000',
    porsche: '70000', 
    mercedes: '80000'
};

let automobili = {
    audi: ['70000', '2017', 'Q7'],
    bmw: ['50000', '2018', '330D'],
    porsche: ['60000', '2016', 'Boxter'],
    mercedes: ['100000', '2019', 'S400']
};*/

for(automobil in automobili){
    /*
    console.log(automobil);
    console.log(automobili[automobil]);
    console.log('------------------');
    */
   let naziv = automobil;
   let podaci = automobili[automobil];
   /*
   console.log(naziv);
   console.log(podaci);

   console.log(`cena: ${podaci[0]}`);
   console.log(`godiste: ${podaci[1]}`)
   console.log(`${naziv} model: ${podaci[2]}`);
   */

   console.log(`${naziv}: 
    cena: ${podaci[0]} eura, 
    godiste: ${podaci[1]}, 
    model: ${podaci[2]}`);
}


console.log(automobili['audi']);
console.log(automobili.bmw);
//console.log(automobili);


let osoba = {
    ime: 'nikola',
    prezime: 'manic',
    godine: '18',
    grad: 'vr'
};

console.log(osoba.ime);
console.log(`Ime: ${osoba.ime}, 
    Prezime: ${osoba.prezime}, 
    Godine: ${osoba.godine}, 
    Grad: ${osoba.grad}`
);

//FUNKCIJE

let nekretnine = {
    stan: 70000,
    kuca: 150000,
    plac: 30000
};

let meseci = 10 * 12;
