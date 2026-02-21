//Napisati program koji ucitava broj i ako je paran racuna njegov kvadra

let x = parseInt(prompt("Unesi broj"));
if (x % 2 === 0)
{ 
  let kv = x**2;
  alert(kv);
}
else{
  let ko = Math.sqrt(x);
  alert(ko);
}

alert(`Kvadrat broja ${x} je: ${kv}\n
Koren broja ${x} je: ${ko}`);

//Za uneti dvocifren broj ako je cifra desetice deljiva cifrom jedinice 
//ispisati novi dvocifreni broj u obrnutom redosledu. Inace ako nije deljiva naci abs razlike cifre desetice i jedinice vrednost cifre jedinice i desetice

let y = parseInt(prompt("Unesi dvocifreni broj"));
let d = parseInt(y/10);
let j = y % 10;
if(d % j === 0) { 
  let br = j * 10 + d ;
  alert(br);
}
else {
  alert(Math.abs(d - j));
} 
//(y - j) / 10 
//alert(`${d} ${j}`)



function cifre(a) 
{
  let d = parseInt(a / 10);
  let j = a % 10;
  return [j, d];
}

let a = parseInt(prompt("Unesi dvocifreni broj"));
let [j, d] = cifre(a);
if(d % j === 0) { 
  let br = j * 10 + d ;
  alert(`Broj je ${br}`);
}
 else {
  let br = Math.abs(d - j);
  alert(`Broj je ${br}`);
 }


//Racuna izraz Z = {|b - a|, a > 0}, {a^3 -3 < a <= 0}, {sqrt(b), a <= -3}

let a = parseInt(prompt("Unsei a:"));
let b = parseInt(prompt("Unesi b:"));

if(a > 0){
  let z = Math.abs(b - a);
  alert(`Z = ${z}`);
}

else if (-3 < a <= 0){
  let z = a**3
  alert(`Z = ${z}`); 
}

else (a <= -3){
  let z = Math.sqrt(b);
  alert(`Z = ${z}`);
}
//alert(`Izraz je: ${z.toFixed(z)}`)


//Mapisati program koji racuna kv koren zbira cifara ako je zbir cifara paran inace racuna abs vrednost razlike cifara. Funkcija trazi cifre trocifrenog broja

function cifre(a){
  let j = a % 10;
  let d = a%100/10;
  let s = parseInt(a/100);
  return [j, d, s];
}

let a = parseInt(prompt("Unesi a:"));
let b = parseInt(prompt("Unesi b:"));

if((j + d + s) % 2 === 0){ 
  alert(`Kvadratni koren zbira cifara je: ${Math.abs(j + d + s)}`);
}
else {
  alert(`Apsolutna razlika cifara je: ${Math.abs(j - d - s)}`);
}