// 1 задание 
var a = 1, b = 1, c, d;
c = ++a; alert(c); //2 (префиксная форма записи)
d = b++; alert(d); //1 (постфиксная форма записи, сначала выводится значение , потом 
                   // происходит инкремирование)
c = (2+ ++a); alert(c); // (2 + 3) = 5
d = (2+ b++); alert(d); // (2 + 2) = 4 потом происходит инкремирование
alert(a); //3 
alert(b); //3

// 2 задание
var a = 2;
var x = 1 + (a *= 2); // x = 5
console.log(x);

// 3 задание
var a = 9
var b = -9
if (a >= 0 & b >= 0) {
	alert(a - b);
}
else if (a < 0 & b < 0) {
    alert(a * b)
}
else if (a < 0 & b >= 0 || a >= 0 & b < 0) {
	alert(a + b)
}

// 4 задание
var a = 1;
switch (a) {
	case 1:
	    alert(1);
	    a += 1;
	case 2:
	    alert(2);
	    a += 1;
	case 3:
	    alert(3);
	    a += 1;
	case 4:
	    alert(4);
	    a += 1;
	case 5:
	    alert(5);
	    a += 1;
	case 6:
	    alert(6);
	    a += 1;
	case 7:
	    alert(7);
	    a += 1;
	case 8:
	    alert(8);
	    a += 1;
	case 9:
	    alert(9);
	    a += 1;
	case 10:
	    alert(10);
	    a += 1;
	case 11:
	    alert(11);
	    a += 1;
	case 12:
	    alert(12);
	    a += 1;
	case 13:
	    alert(13);
	    a += 1;
	case 14:
	    alert(14);
	    a += 1;
	case 15:
	    alert(15);
	    a += 1;
	default:
		break;
}

// 5 задание

// Реализовать четыре основные арифметические 
// операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

var a = 2
var b = 2

function mul (a, b) {
	var z = a * b; 
	return console.log(z);
}

function div (a, b) {
	var z = a / b; 
	return console.log(z);
}

function sum (a, b) {
	var z = a + b; 
	return console.log(z);
}

function sub (a, b) {
	var z = a - b; 
	return console.log(z);
}

mul(a, b);
div(a, b);
sum(a, b);
sub(a, b);

// 6 задание
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//  где arg1, arg2 — значения аргументов, operation — строка 
// с названием операции. В зависимости от переданного значения 
// выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (применить switch).

var a = 2;
var b = 2;
var operation = prompt("Введите название оператора: ")

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "сложение":
			var z = a + b;
			return console.log(z);
			break;
		case "вычитание":
			var z = a - b;
			return console.log(z);
			break;
		case "умножение":
			var z = a * b;
			return console.log(z);
			break;
		case "деление":
			var z = a / b;
			return console.log(z);
			break;
		default:
			return console.log("нет такого опреатора");
			break;
	}
}

mathOperation(a, b, operation);
