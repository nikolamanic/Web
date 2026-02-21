let x = "ana";
let y = "broj";
alert(`${x.slice(1,3)}${y}${x}`);

let a = parseInt(prompt("a=?"));
let b = parseInt(prompt("b=?"));
let c = a % b;
alert(`Ostatak pri deljenju broja ${a} sa brojem ${b} je: ${c}`);


let x = parseInt(prompt("unesi x"));
let y = Math.sin(Math.abs((Math.PI/4) + 2 * x));
alert(y);


let x = parseInt(prompt("x = ?"))
alert(`Da li broj nije trocifreni: ${!(x > 99 && x <= 999)}`);




function op (x, y){
  let o = 2 * (x + y);
  let p = x * y;
  return [o, p];
}

let x = parseInt(prompt("x=?"));
let y = parseInt(prompt("y=?"));
let [o, p] = op(x, y);
alert(`Obim je: ${o}, a povrsina je: ${p}`);


function hip (a, b){
  let c = Math.sqrt(a**2 + b ** 2);
  return c;
}

let a = parseInt(prompt("unesi a"));
let b = parseInt(prompt("unesi b"));
let h = hip(a, b);
alert(`Hipotenuza je: ${h}`);

${toFixed(2)}




function rac(x){
  let j = x % 10;
  //d = (x % 100) / 10;
  let s = parseInt(x / 100);
  return [j, s];
}

let x = parseInt(prompt("x = ?"));
let [j, s] = rac(x);
alert(`Vrednost je: ${Math.sqrt(j + s)}`);