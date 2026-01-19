

x = parseInt(prompt('Prvi broj:'));
y = parseFloat(prompt('Drugi broj'));
z = x%y;
alert('Ostatak pri deljenju je: ' +z);

let x = 3;
let y = 4;
z = Math.sqrt(x**2 + y**2);
alert(z);


//3.76 ne 3,76
//0,27*10^-9     0.27e^-9
//const x = 4;
//Math.sqrt(Math.abs(x) + 1)
//2^n+1   2**n+1
//2^n + 1   2**n +1

x = parseInt(prompt('Prvi broj:'));
y = parseFloat(prompt('Drugi broj'));
z = x%y;
alert('Ostatak pri deljenju je: ' +z);


let a = 5;
a++;
a++;
alert(a);
a--;
alert(a);




let b = 0;
b+=3;
b*=4;
alert(b);
b -= 4;
b /=2;
alert(b);


alert(1/0);
alert(-1/0);
z = Math.sqrt(-1);
alert(z);



alert('Jednostrani navodnici');
alert("Dvostrani navodnici");
alert(`Obrnuti apostrofi`);
alert(`Reko je: "Sacekaj metu" i potrc'o je`);

alert('Prvi nacin: Apostrof \', navodnici", obrnuti apostrofi` ');
alert("Prvi nacin: Apostrof ', navodnici\", obrnuti apostrofi` ");
alert(`Prvi nacin: Apostrof ', navodnici", obrnuti apostrofi\` `);

alert('Reko je: "Sacekaj metu" i potrc\'o je');


let x = 'Java';
let y = "Script";
z = x +' '+  y;
alert(z);
alert(x + 2);


alert(`${x} ${y}`);

alert(`${x + y}`);

let g = `${x} ${y}`;
alert(g);

alert(`${x}2`);



c = 2;
v = 3;
alert(`${c} + ${v} = ${c+v}`);

k = 2;
l = 3;
alert(k+ ' + ' + l + ' = ' + (k+l));


let j = 'JavaScript';
alert(j[0]+j[4]);

alert(j[8] + j[6] + j[1] + j[2] + j[1]);



i = 'gram';
p = 'prodekan';
alert(p[0] + p[1] + p[2] + i);


alert(p.slice(0,3) + i);


b = 3**2;
alert(`${3}^2 = ${b}`);

let unos = parseInt(prompt("Unesi duzinu"));
let M = parseInt(unos/100);
let CM = unos % 100;
alert(`${M} m i ${CM} cm`);



let unos = parseInt(prompt("Unesi duzinu"));
let m = parseInt(unos/100);
let cm = unos - m * 100;
alert(`${m} m i ${cm} cm`);