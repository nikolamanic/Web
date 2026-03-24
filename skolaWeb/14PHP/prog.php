// 1. cas PHP - ovo je pocetak
//(Deklarisanje i ispis)
<!doctype html>
<html>
<head>
<title>
Pozdrav
</title>
</head>
<body>

<?php
echo "Zdravo!";
?>

<table border = 1>
<tr>
<td>Nikola</td>
<td>4. razred</td>
</tr>
</table>


<title>Tabela</title>
<?php
$ime = 'Nikola';
$ime1 = 'Nemanja';
$raz = '4.razred';
$raz1 = '2.razred';
$spisak = 'Spisak ucenika';
?>

<table width = 60% height = 20px border = 2>
<th colspan = 2>
<?php echo $spisak; ?>
</th>

<tr>
<td><?php  echo $ime; ?></td>
<td><?php  echo $raz; ?></td>
</tr>

<tr>
<td><?php  echo $ime1; ?></td>
<td><?php  echo $raz1; ?></td>
</tr>

</table>
</body>
</hmtl>



// 2. cas PHP 
//(ispis)

<?php
$age = 30;
$age = 31.55;
echo $age;
?>



<?php
$prva=15;
$druga=&quot;Godina! &quot;;
echo $prva .&quot; &quot;. $druga;
// koristi se . " " . kako ne bismo dobili ispis 15Godina!, već 15 Godina! 
?>



<?php
$ime="Nikola";
echo ("Moje ime je $ime");
?>





<?php 
$t = 'Majmune';
echo $t[0] . $t[4] . $t[5] . $t[0] . $t[0] . $t[0] . $t[0];
?>



<?php
$str_var1="Ucenik";
$str_var2="Petar";
echo $str_var1 ." ". $str_var2 ." ". "je vredan";
?>



<?php
$tekst="Ucenik Petar je vredan";
$znak=$tekst[0];
echo $znak; //ispisuje "U";
echo $tekst[3]; //ispisuje "n";
echo $tekst[10]; //ispisuje "a";
?>


/*
$bool_var = true;
$bool_var = false;


define("grad", "Beograd");
*/



<?php
$visina=184;
echo $visina;
echo "<br>"; // Da napravimo novi red.
define (“PI”, 3.14);
echo PI;
?>


<?php
$a = (int)readline("Unesi ceo broj: ");
$b = (float)readline("Unesi decimalni broj: ");
$c = $a * $b;
echo "Proizvod je: ", $c;
?>

// 3. cas PHP 
//(operacije)

// 1. napisati prigram koji racuna povrsinu kruga ako je r = 10


<body>

<?php 
$r = 10;
define("PI", 3.14);
$p = pow($r, 2)*PI;
echo "Povrsina kruga je: $p";
?>

</body>




//2. Isti zadatak samo sa unosom 


<?php 
$r = (int)readline('unesi ceo broj');
define("PI", 3.14);
$p = pow($r, 2)*PI;
echo "Povrsina kruga je: $p";
?>




// 3. Napisati progam koji racuna proizvod dva uneta broja


<?php 

$a = (int)readline('unesi ceo broj');
$b = (float)readline('unesi decimalni broj');
$p = $a * $b;
echo "Proizvod je: $p";

?>




// 4. Napisati php profram koji za uneti broj 1, 10 ili 20 ispisuje recima koji je to broj 


//switch

<?php 
$a = (int)readline('unesi broj 1, 10 ili 20');

switch($a)
{

case 1:
echo "jedan";
break;

case 10:
echo "deset";
break;

case 20:
echo "dvadeset";
break;

default:
echo "Ne znam broj";	
}
?>




// 5. Za unetu ocenu napisati komentar


<?php 
$a = (int)readline('unesi broj');

switch($a)
{

case 1:
echo "nedovoljan";
break;

case 2:
echo "dovoljan";
break;

case 3:
echo "dobar";
break;

case 4:
echo "vrlo dobar";
break;

case 5:
echo "odlican";
break;

default:
echo "Ne znam broj";	
}
?>




// 6. Za unetu boju na semaforu ispisi sta ona znaci 


<?php 
$a = readline('unesi boju na semaforu: ');

switch($a)
{

case "crvena":
echo "STOP";
break;

case "zuta":
echo "Pripremi se";
break;

case "zelena":
echo "Kreni";
break;

default:
echo "Ne znam boju";	
}
?>





// 7. Za unetu zivotniju ispisi njen engleski naziv


<?php 
$a = readline('unesi zivotinju: ');

switch($a)
{

case "pas":
echo "Dog";
break;

case "riba":
echo "Fish";
break;

case "ptica":
echo "Bird";
break;

case "macka":
echo "cat";
break;

default:
echo "Ne znam zivotinju";	
}
?>








// 8. Napisi program koji uneti dvocifren broj razdvajana na dve, i biranjem [z, r, o] vrsi odredjenu operaciju nad njima

// - dvocifreni broj

z - suma njegovih cifara

r - razlika kvadrata

o - inverzni broj

<?php 
$a = readline('unesi dvocifreni broj: ');
$d = intdiv($a, 10);
$j = $a%10;
$n = readline("unesi z, r ili o");

switch($n)
{

case "z":
$z = $j + $d;
echo "Suma je: $z";
break;

case "r":
$r = abs(pow($s, 2) - pow($d, 2)); 
echo "Razlika kvadata je $r";
break;

case "o":
$o = $j*10 + $d;
echo "Inverzni broj je: $o";
break;

default:
echo "Nema izbora";	
}
?>


// 9. Za uneti broj meseca ispisati koliko on ima dana, uzedi u obzir i prestupnu godinu(366 dana)

<?php 
$m = (int)readline('unesi mesec (od 1 do 12): ');

switch($m)
{

case 1:
case 3:
case 5:
case 7:
case 8:
case 10: 
case 12:
echo("Ima 31 dan");
break;


case 4:
case 6:
case 9:
case 11:
echo("Ima 30 dana");
break;

case 2:

$p = (int)readline("Unesi 'pro'- za prostu ili 'pre' - za prestupnu");  
if($p == "pro"){
    echo("Ima 28 dana");
}
else{
    echo("Ima 29 dana")
}
break;

default:
echo "Nema izbora";	
}
?>



// 4. cas PHP 
(razni zadaci)

// 1. Za uneti broj odrediti da li je veci ili manji od 20


<?php
$a = (int)readline("Unesi broj");
if($a>20){
echo ("Broj je veci");
}

elseif($a=20){
echo("Broj je jednak");
}

else{
echo ("Broj je manji");
}
?>



// 2. Napisati php program koji za uneti ceo broj ako je b<=30(ispisuje broj manje ili jednako od 30), 30<$b<=45(ispisuje izmedju 30 i 45), a za >45(ispisuje veci od 45)

<?php
$b = (int)readline("Unesi broj");

if($b<=30){
echo ("Broj je manji od 30");
}

elseif($b<=45){
echo("Broj je izmedju 30 i 45");
}

else{
echo ("Broj je veci od 45");
}
?>


// 3. Zadatak od tablu

<?php
$a = (int)readline("Unesi broj");

if($a > 0){
$y = sqrt($a);
}

else{
$y = pow($a, 2);
}

echo "Rezultat je: $y";
?>




// 4. Zadatak od tablu

<?php
$a = (int)readline("Unesi broj");
$b = (int)readline("Unesi broj");

if($a>1){
$y = $b / $a;
}

elseif($a<=-6){
$y = $a + $b;
}

else{
$y = $a +3;
}

echo "Rezultat je: $y";
?>



// 5. Zadatak izraza od tablu

<?php
$a = (int)readline("Unesi broj");
$b = (int)readline("Unesi broj");

if($a < $b){
$y = ($a + ($b+1)**2)/($a + $b);
}

elseif($a == $b){
$y = sqrt($a / $b**2);
}

else{
$y = ($a + $b)**2 - sqrt($a/($a + $b));
}

echo "Rezultat je: $y";
?>