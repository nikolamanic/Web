//alert('Hello world');
/*
x = parseInt(prompt('x=?'));
y = parseInt(prompt('y=?'));
z = x + y;
alert(z);


//let x, y, z;
let x = parseInt(prompt('x=?'));
let y = parseInt(prompt('y=?'));
let z = x + y;
alert(z);

const x = parseInt(prompt('x=?'));
const y = parseInt(prompt('y=?'));
const z = x + y;
alert(z);


0.217e-9 =  0.217⋅10 -9
-1e6 = −1⋅10 6
2 ** (n + 1) 2 n+1
2 ** n + 1 2 n +1
Math.sqrt(Math.abs(x)+1)
Math.sqrt(Math.abs(x))+1
Math.sqrt(x ** 2 + y ** 2)


alert('Jednostruki navodnici');
alert("Dvostruki navodnici");
alert(`Obrnuti navodnici`);
alert(`Rek'o je: "Sacekaj me tu" i potrc'o`);



alert('1. nacin: Apostrofi \', Navodnici ", Obrnuti navodnici `');
alert(`2. nacin: Apostrofi ', Navodnici ", Obrnuti navodnici \``);
alert("3. nacin: Apostrofi ', Navodnici \", Obrnuti navodnici `");





let x = 'Java';
const y = 'Script';
//let js = x+" "+y;
let js = `${x} ${y}`;
alert(js);
//alert(x+2);
alert(`${x}2`);


let x = 2;
let y = 3;
alert(`${x} + ${y} = ${x+y}`);
alert(x+" + "+y+" = "+(x+y));


let JS = 'JavaScript';
alert(JS[0]+JS[4]);



a<b
a>b  
a===b
a!==b



let a = parseInt(prompt('a=?'));
let b = parseInt(prompt('b=?'));
alert(a<b);


alert(`2===2: ${2===2}`);
alert(`2==="2": ${2==="2"}`);

alert(`2!=2: ${2!=2}`);
alert(`2!="2": ${2!="2"}`);


const a = "0";
const b =  0;
const c = "";

const s1 = `a==b: ${a==b}\n`;
const s2 = `b==c: ${b==c}\n`;
const s3 = `a==c: ${a==c}\n`;

alert(s1+s2+s3);


let x=parseInt(prompt('x='));
let y=parseInt(prompt('y='));
alert(x<y);

alert(`2===2: ${2===2}`);
alert(`2==="2": ${2==="2"}`);
alert(`2!=="2": ${2!=="2"}`);
alert(`2!==2: ${2!==2}`);

//sa 2 == ne radi, moras 3 ===
const a="0";
const b=0;
const c=" ";
const s1=`a===b: ${a==b}\n`;
const s2=`b===c: ${b==c}\n`;
const s3=`a===c: ${a==c}\n`;
alert(s1+s2+s3);

alert(x>=0&&x<10);
alert(!(x<0&&x>=10));

//pitanje da li su brojevi sortirani kako ih unosimo
let x=parseInt(prompt('x='));
let y=parseInt(prompt('y='));
let z=parseInt(prompt('z='));

//od stringova "Novi" "Beograd" ispisi "Novi Beograd" formatiranjem
a="Novi";
b="Beograd"
alert(`${a} ${b}`);
alert(b.slice(0,3)+" "+a[2]+a[1]+"z");

//da li su dva broja razliciti
let x=parseInt(prompt('a= '));
let y=parseInt(prompt('b= '));
alert(a!==b);


//ZADACI SA PRIPREMNOG TESTA

//1.
let a = parseInt(prompt("a=?"));
let b = parseInt(prompt("b=?"));
let o = 2*(a+b); //(2*a)+(2*b);
let p = a * b;
alert(`Obim je: ${o}`);
alert(`Povrsina je: ${p}`);



//2.
let a = parseInt(prompt("Prvi broj:"));
let b = parseInt(prompt("Drugi broj"));
let z = a % b;
alert(`Ostatak pri deljenju broja ${a} sa brojem ${b} : ${z}`);


//3.
let a = parseInt(prompt("Prvi broj je:"));
let b = parseInt(prompt("Drugi broj je:"));
alert(a!==b);
//alert(a<=b);


//4.
let x = "Novi";
let y = "Beograd";
let z = `${x} ${y}`;
alert(z);
alert(y.slice(0, 3));


let x = 3;
let y = 4;
alert(Math.sqrt(x**2 + y**2));


alert(x>=0&&x<10);
alert(!(x<0&&x>=10));
//ZADACI SA PRIPREMNOG TESTA

//1.
let a = parseInt(prompt("a=?"));
let b = parseInt(prompt("b=?"));
let o = 2*(a+b); //(2*a)+(2*b);
let p = a * b;
alert(`Obim je: ${o}`);
alert(`Povrsina je: ${p}`);



//2.
let a = parseInt(prompt("Prvi broj:"));
let b = parseInt(prompt("Drugi broj"));
let z = a % b;
alert(`Ostatak pri deljenju broja ${a} sa brojem ${b} : ${z}`);


//3.
let a = parseInt(prompt("Prvi broj je:"));
let b = parseInt(prompt("Drugi broj je:"));
alert(a!==b);
//alert(a<=b);


//4.
let x = "Novi";
let y = "Beograd";
let z = `${x} ${y}`;
alert(z);
alert(y.slice(0, 3));




let a = parseInt(prompt("a=?"));
let o = 4 * a;
let p = a ** 2;
alert(`O = ${o}, P = ${p}`);


let x = parseInt(prompt("x=?"));
let y = parseInt(prompt("y=?"));
alert(x<=y);



let s = parseInt(prompt("S=?"));
let m = parseInt(s/60);
alert(`${m}min i ${s%60}sec`);


let ime = "Nikola"
let prezime = "Manic";
alert(`${ime.slice(0,1)}${prezime[0]}`);



let r = parseInt(prompt("r=?"));
let o = 2 * r * Math.PI;
let p = r ** 2 * Math.PI;
alert(` Obim je: ${o}\n Povrsina je: ${p}`);


let br = parseInt(prompt("Broj je:"));
let neparan = (br % 2 != 0);
alert(`Da li je broj neparan: ${neparan}`);


let dr = "Srbija";
let gr = "Beograd";
alert(`Glavni grad drzave ${dr} je ${gr}`);

let cena = parseInt(prompt("cena:"));
let popust = parseInt(prompt("popust:"));
alert(`Nova cena je ${cena * ((100-popust)/100)}`);
//let novaCena = cena * (1 - popust / 100);


let br = parseInt(prompt("Broj je:"));
alert(br>0);


let tro = parseInt(prompt("Tro ="));
alert(tro%10);



let string = "Programiranje je super";
alert(string.slice(0, 13));
*/