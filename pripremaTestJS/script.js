//Funkcije u JS

function ime (a, b){
  //telo Funkcije
  return rezF-je
}



// 1.Napisati fukciju koja racuna obim pravougaonika

function obim(a, b){
  let o = (2 * a) + (2 * b);
  return o;
}

let a = parseInt(prompt("Unesi a"));
let b = parseInt(prompt("Unesi b"));
let o = obim(a, b);
alert(`Obim pravougaonika je: ${o}`);


// 2. Napisati funkciju koja raacuna obim i povrsinu pravougaonika

function OP(a, b){
  let o = (2 * a) + (2 * b);
  let p = a * b;
  return[o, p] 
}

let a = parseInt(prompt("Unesi a"));
let b = parseInt(prompt("Unesi b"));

let [o, p] = OP(a, b);
alert(`Obim je: ${o}, a povrsina je: ${p}`);



// 3. Napisati fukciju koja racuna hipotenuzu pravouglog trougla

function hipotenuza(a, b){
  let c = Math.sqrt(a**2 + b**2);
  return c;
}

let a = parseInt(prompt("Unesi a"));
let b = parseInt(prompt("Unesi b"));
let h = hipotenuza(a, b);
alert(`Hipotenuza je: ${h.toFixed(2)}`);



// 4. Napisati program koji racuna kv. koren zbira cifre jedinice i stotice, od nekog trocifrenog broja
//Funkcija nalazi samo cifre stotice i jedinice

// 1. nacin
function zbir(a){
  let s = parseInt(a/100);
  let d = parseInt(a/10)%10;
  let j = a%10;
  let r = Math.sqrt(s + j);
  return [j, s, r];
}

let a = parseInt(prompt("Unesi neki trocifreni broj"));
let [j, s, r] = zbir(a);
alert(`Koren zbira je: ${r}`);



// 2. nacin
function zbir(a){
  let s = parseInt(a/100);
  let j = a%10;
  return [j, s];
}

let a = parseInt(prompt("Unesi neki trocifreni broj"));
let [j, s] = zbir(a);
let r = Math.sqrt(s + j);
alert(`Koren zbira je: ${r}`);



//Grananje

if(uslov){
  naredbe   //DA
}

else {
  naredbe   //NE
}



if(uslov){
  naredbe
}

else if(uslov){
  naredbe
}
...


// 1. Napisati program koji od unetog broja ako je paran racuna kvadrat ako je neparan racuna koren



let x = parseInt(prompt("Unesi x"));

if(x%2===0){
  let r = x**2;
  alert(`Kvadrat je: ${r}`);
}
else {
  let r = Math.sqrt(x);
  alert(`Koren je: ${r}`);
}


// 2. Napisati program koji od ucitanog dvocifrenog broja, ako je cifra desetice deljiva cifrom jedinice ispisuje broj u inverznomm obliku, inace racuna apsolutnu vrednost razlike cifre desetice i cifre jedinice

let x = parseInt(prompt("Unesi dvocifreni broj:"));

let j = x%10;
let d = parseInt(x/10)%10; //(x-j)%10;
if(d%j === 0){
  alert(`Novi broj je: ${j}${d}`);
}
else {
  let a = Math.abs(d-j);
  alert(a);
}



// 2.nacin

let x = parseInt(prompt("Unesi dvocifreni broj:"));
let j=x%10;
let d=(x-j)/10;
if(d%j===0)
{
  h=j*10+d;
  alert(`Inverzni broj je: ${h}`);
}

else{
  let k=Math.abs(d-j);
  alert(`Apsolutna vrednost razlike cifara je: ${k}`);
}


// 3.Isto kao prethodni zadatak, ali Funkcija trazi cifre jedinice i desetice

function cifre(x){
  let j = x%10;
  let d = parseInt(x/10)%10;
  return [j, d];
}
let x = parseInt(prompt("Unesi broj"));
let z;
let [j, d] = cifre(x);
if(d%j===0 && j!==0 && d!==0) //proverava i brojeve kao 40,50...
{
  z = j*10+d;
}

else{
  z = Math.abs(d - j);
}
alert(`Novi broj je: ${z}`);



// 4. Napisati program koji racuna vrednost izraza Z 

let a = parseInt(prompt("Unesi broj: "));
let b = parseInt(prompt("Unesi broj: "));
let z;
if(a>0){
  z = Math.abs(b-a);
}
else if(a>-3 && a <= 0){
  z = a**3;
}
else{
  z = Math.sqrt(b);
}
alert(`Vrednost izraza je: ${z.toFixed(2)}`);



/*
1. Napisati program koji od učitanog dvocifrenog broja, ako je cifra desetice
veća od cifre jedinice izračunati proizvod njegovih cifara, ako je cifra
desetice manja od cifre jedinice izračunati apsolutnu vrednost razlike njegovih
cifara, a ako su jednake nalazi stepen cifre desetice na cifru jedinice.*/


let br = parseInt(prompt("Unesi broj"));
let j = br%10;
let d = parseInt(br/10)%10;
let z;
if(d>j){
  z = d*j;
}

else if(d < j){
  z = Math.abs(j - d);
}

else{
  z = d**j;
}

alert(`Rezultat je: ${z}`);



/*
 2.Napisati program koji računa kvadratni koren zbira cifre stotice i
cifre jedinice trocifrenog broja. Funkcija nalazi cifru stotice i cifre
jedinice trocifrenog broja. */

function cifre(broj){
  let j = broj%10;
  let d = parseInt(broj/10)%10;
  let s = parseInt(broj/100); // ili (x-(x%100))/100
  return [j, d, s];
}
let broj = parseInt(prompt("Unesi broj: "));
let [j, d, s] = cifre(broj);
let z = Math.sqrt(s+j);
alert(`Kv. koren zbira cifara ${s} i ${j} je: ${z.toFixed(2)}`);



//3.Napisati program koji ce izracunati vrednost izraza Z

let x = parseInt(prompt("Unesi x"));
let y = parseInt(prompt("Unesi y"));
let z;

if(x > y){
  z = Math.abs(Math.sqrt(y) - x);
}

else if(x < y){
  z = x + y**2;
}

else{
  z = y**3 - x**2;
}

alert(`Vrednost izraze Z=: ${z.toFixed(2)}`);



//Petlje


let inicijalizacija;
while(uslov){
  telo
}

for(inicijalizacija;uslov;korak){
  telo
}

// pr1. Zbir neparnih dvocifrenih brojeva

//WHILE
let broj = 11;
let s = 0;
while(broj < 100){
  s = s + broj;
  broj = broj + 2;
} 

alert(`Zbir neparnih dvocifrenih brojeva je: ${s}`);


//FOR
let s = 0;
for(broj = 11; broj < 100; broj=broj+2){
  s = s + broj;
}
alert(`Zbir neparnih dvocifrenih brojeva je: ${s}`);


// 2.Napisati progam koji racuna obime i povrsine za tri romba 

//moj nacin preko funkciju
function OP(a,h){
  let o = 4 * a;
  let p = a * h;
  return [o, p];
}

for (let i = 0; i < 3; i++){
  let a = parseInt(prompt("Unesi stranicu (a)"));
  let h = parseInt(prompt("Unesi visunu (h)"));
  let [o, p] = OP(a, h);
  alert(`Romb ${i+1}:\nObim je: ${o}\nPovršina je: ${p}`)
}




for (let i = 0; i < 3; i++){
  let a = parseInt(prompt("Unesi stranicu (a)"));
  let h = parseInt(prompt("Unesi visunu (h)"));
  let o = 4 * a;
  let p = a * h;
  alert(`Romb ${i+1}:\nObim je: ${o}\nPovršina je: ${p}`)
}


let i = 0;
while(i < 3){
  let a = parseInt(prompt("Unesi stranicu (a)"));
  let h = parseInt(prompt("Unesi visunu (h)"));
  let o = 4 * a;
  let p = a * h;
  alert(`Romb ${i+1}:\nObim je: ${o}\nPovršina je: ${p}`)
  i++;
}


// 3.Napisati program koji racuna sumu parnih brojeva od prvih n brojeva

let n = parseInt(prompt("Unesi n"));
let s = 0;
for(let i = 2; i <= n; i=i+2){
  s = s + i;
}
alert(`Suma parnih brojeva do ${n} je: ${s}`);


let n = parseInt(prompt("Unesi n"));
let s = 0;
let i = 2;
while(i <= n){
  s = s + i;
  i=i+2;
}
alert(`Suma parnih brojeva do ${n} je: ${s}`);


// 4. Napisati program koji racuna proizvod neparnih brojeva od k do n (k>n)
let k = parseInt(prompt("Unesi k (veci broj)"));
let n = parseInt(prompt("Unesi n (manji broj)"));
let p = 1;
for(let i = k; i >= n; i--){
  if(i%2!==0){
    p = p * i;
  }
}
alert(`Proizvod neparnih brojeva od ${k} do ${n} je: ${p}`);



let k = parseInt(prompt("Unesi k (veci broj)"));
let n = parseInt(prompt("Unesi n (manji broj)"));
let p = 1;
let i = k;
while(i >= n){
  if(i%2!==0){
    p = p * i;
  }
  i--;
}
alert(`Proizvod neparnih brojeva od ${k} do ${n} je: ${p}`);


// 5.Napisati progam koji racuna prosek tri uneta broja koji su deljivi sa tri
let s = 0;
let b = 0;
for(let i = 0; i < 3; i++){
  let x = parseInt(prompt("Unesi broj"));
  if(x%3===0){
    s = s + x;
    b++;
  }
}
alert("Prosek je: " + (s / b).toFixed(2));

*/
let s = 0;
let b = 0;
let i = 0;
while(i < 3){
  let x = parseInt(prompt("Unesi broj"));
  if(x%3===0){
    s = s + x;
    b++;
  }
  i++;
}
alert("Prosek je: " + (s / b).toFixed(2));



//Zadaci od Gemini

//1
function tro(a){
  let o = 3 * a;
  let p = (a**2 * Math.sqrt(3))/4;
  return [o, p];
}

let a = parseInt(prompt("Unesi stranicu a"));
let [o, p] = tro(a);
alert(`Obim je: ${o}, a povrsina je: ${p}`);


//2
function cifre(x){
  let j = x%10;
  let d = parseInt(x/10)%10;
  let s = parseInt(x/100);
  return [j, d, s];
}

let x = parseInt(prompt("Unesi broj"));
let [j, d, s] = cifre(x);
let z = j * d * s;
alert(`Proizvod je: ${z}`);


//3
function cifre(x){
  let j = x%10;
  let d = parseInt(x/10)%10;
  let s = parseInt(x/100);
  return [j, d, s];
}

let z;
let x = parseInt(prompt("Unesi broj"));
let [j, d, s] = cifre(x);

if(x%2===0){
  z = j + d;
}
else{
  z = d - j;
}
alert(z);




//4
let x = parseInt(prompt("Unesi broj"));
let y;

if(x > 10){
  y = x**2;
}

else if(x >= 0 && x <= 10){
  y = Math.sqrt(x + 5);
}

else{
  y = Math.abs(x);
}

alert(y.toFixed(2));



//5

//for
let s = 0;
for(let i = 10; i < 99; i++){
  if(i%2===0){
    s = s + i;
  }
}
alert(s)


//while
let s = 0;
let i = 10;

while(i < 99){
  if(i%2===0){
    s = s + i;
  }
  i++; 
}
alert(s);


//6
let n = parseInt(prompt("Unesi broj"));
let i = 1;
let brP=0;
let brN=0;
while(i <= n){
  if(i%2===0){
    brP++;
  }
  else{
    brN++;
  }
  i++;
}
alert(brN);
alert(brP);



//7
function cifre(broj){
  let j = broj%10;
  let d = parseInt(broj/10)%10;
  let s = parseInt(broj/100);
  let z = s + d;
  return [z, j];
}

let y = 0;
let broj = parseInt(prompt("Unesi broj"));
let [z, j] = cifre(broj);
if(z > j){
  alert("Zbir je veci");
}
else{
  y = j**2;
  alert(y);
}




//8
let broj = parseInt(prompt("Unesi broj"));

while(broj !== 0) {
  if(broj > 0) {
    alert("Pozitivan");
  } else {
    alert("Negativan");
  }
  broj = parseInt(prompt("Unesi sledeći broj:")); 
}


//9
for(let i = 0; i < 5; i++){
  let r = parseInt(prompt("Unesi r"));
  let p = r**2 * Math.PI;
  alert(`Povrsina ${i+1} kruga je: ${p}`);
}


//10
let br = parseInt(prompt("Unesi broj"));

if(br%3===0 && br%5===0){
  alert("Jeste deljiv");
}
else{
  alert("Nije deljiv");
}


//1. 
function opT(a, b){
  let c = Math.sqrt(a**2 + b**2);
  let o = a + b + c;
  let p = (a*b)/2;
  return [o, p];
}

let a = parseInt(prompt("Unesi a"));
let b = parseInt(prompt("Unesi b"));
let [o, p] = opT(a, b);
alert(`Obim je: ${o}, a povrsina je: ${p}`);


//2
function cifre(broj){
  let j = broj%10;
  let d = parseInt(broj/10)%10;
  let s = parseInt(broj/100);
  return [j, d, s];
}

let z = 0;
let broj = parseInt(prompt("Unesi trocifeni broj"))
let [j, d, s] = cifre(broj);
if(broj>99 && broj < 1000){
  if(broj%2===0){
    z = d**2;
    alert(`Rezultat je: ${z}`);
  }
  else{
    if(s > j){
      alert("Cifra stotice je veca");
    }
    else{
      alert("Cifra jedinice je veca");
    }
  }
}
else{
  alert("Broj nije trocifen")
}


//3
let n = parseInt(prompt("Unesi broj n"));
let p = 1;

for(let i = 1; i <= n; i++){
  if(i%3===0){
    p = p * i;
  }
}
alert(`Proizvod je: ${p}`);
