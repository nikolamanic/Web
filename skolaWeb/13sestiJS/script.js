while(uslov)
{
  telo
}

for(inicijalizacjia; uslov; korak)
{telo}

inicijalizacjia
while(uslov)
{
  telo
  korak
}


//naci zbir svih neparnih dvocifrenih brojeva
let a = 11;
let z = 0;
while(a < 100){
  z = z + a;
  a=a+2;
}
alert(`Zbir neparnih dvocifrenih brojeva je: ${z}`);
 
let z = 0;
for(let a = 11; a < 100; a+2)
  {
  z = z + a;
  }
alert(`Zbir neparnih dvocifrenih brojeva je: ${z}`);


//program koji racuna o i p za tri romba
for(let i = 0; i < 3; i++)
  {
    a = parseInt(prompt("a="));
    h = parseInt(prompt("h="));
    let o = 4 * a;
    let p = a * h;

    alert(`Za ${i}. romb: Obim:${o}, Povrsina:${p}`);
    alert(`Za ${i+1}. romb: Obim:${o}, Povrsina:${p}`);
    alert(`Za ${i+2}. romb: Obim:${o}, Povrsina:${p}`);
  }



let i = 1;
while(i < 4)
  {
    a = parseInt(prompt("a="));
    h = parseInt(prompt("h="));
    let o = 4 * a;
    let p = a * h;

    alert('Obim '+i+'. romba je '+o+' a povrsina je '+p+' ');
    i++;
  }



//izbrojati prvih n prirodnih brojeva deljivih sa 3

let n = parseInt(prompt("n="));
let a = 1; 
let br = 0;

while(a <= 30)
  {
    if(a % 3 === 0){
      br = br + a;
    }
    a++;
  }

alert(`Zbir prvih n prirodnih brojeva je: ${br}`);


let n = parseInt(prompt("n="));
let br = 0;

for(i = 3; i <= n; i+3){
    br++;
}

alert(`Broj prvih n prirodnih brojeva je: ${br}`);



let n = parseInt(prompt("n="));
let br = 0;
let i = 1;
while(i <= n)
  {
    if(a % 3 === 0)
    br++;
    i++;
  }
alert(br);



//napisati proizvod neparnih brojeva od k do n, k > n

let k = parseInt(prompt("k = "));
let n = parseInt(prompt("n = "));
let p = 1;

for(let i = k; i >= n; i--){
  if(i % 2 === 1) // i % 2 !== 0
  {
    p = p * i;
  }
}
alert(p);



let k = parseInt(prompt("k = "));
let n = parseInt(prompt("n = "));
let p = 1;
let i = k;

while(i >= n)
{ 
    if(i % 2 === 1)
  {
    p = p * i;
  }
  i--;
}
alert(p);



//racuna prosek tri brojeva deljivih sa tri
let br = 0;
let i = 0;
let p = 0;

for(i = 0; i < 3; i++)
  {
    let n = parseInt(prompt(`Unesi ${i+1}. broj = `));
    if(n % 3 === 0){
      p = p + n;
      br++;
    }
  }
p = p / br;
alert(`Prosek je: ${p.toFixed(2)}`);


let br = 0;
let i = 0;
let p = 0;

while(i < 3) 
  {
    let n = parseInt(prompt(`Unesi ${i+1}. broj = `));
    if(n % 3 === 0){
      p = p + n;
      br++;
    }
    i++;
  }
p = p / br;
alert(`Prosek je: ${p.toFixed(2)}`);
