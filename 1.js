/*
 **  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'. 
 


arr = [1, 1, 1, 2, 4, 4, 1, 7];
arr2 = [1, 2, 3, 4, 5];
let flag = 0;

function func3(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      flag++;
    } else {
      continue;
    }
  }
  if (flag > 0) {
  alert(`Количество повторений равно: ${flag}`);
} else {
  alert("Повторений нет");
}
}


func3(arr);
*/


/* 
** 1.
*/

function showHello() {
	alert("Hello!");
}

/* 
** 2.
*/

function showMessage() {
  alert("Привет!");
}

/* 
** 3.
*/

function dblclickMessage() {
  alert('Привет!');
}

/* 
** 4.
*/

function mouseOutMessage() {
  alert('Привет!');
}

/* 
** 5.
*/

function showInput() {
  var showValue = document.getElementById('test');
  alert(showValue.value);
}

function changeInput() {
  var changeValue = document.getElementById('test');
  changeValue.value = 'Ой, я поменял свой текст!';
}

/* 
** 6.
*/

function showTwoMonkies() {
  var changePictire = document.getElementById('picture');
  changePictire.src = "http://s3.fotokto.ru/photo/full/470/4705224.jpg"
}
function showOneMonkie() {
  var changePictire = document.getElementById('picture');
  changePictire.src = "https://vecherka74.ru/uploads/posts/2016-06/1465472532_monkey_2016_02.jpg";
}

/* 
** 7.
*/

function funcWithThis(elem1) {
  alert(elem1.value);
}

/* 
** 8.
*/

function changeValueThis(elem2) {
  elem2.value = "Ой, я поменял значение";
}

/* 
** 9.
*/

function changeValueThis2Time(elem3) {
  if (elem3.value == "Нажми на меня") {
    elem3.value = "Ой, я поменял значение";
  }
  else if (elem3.value == "Ой, я поменял значение") {
    elem3.value = "Ой, а теперь еще раз поменял";
  }
  else 
    elem3.value = "Нажми на меня";
}

/* 
** 10.
*/

function changeValueOneTime(elem4) {
  elem4.value = "Ku-ku";
}

/* 
** 11.
*/

function blockonclick(elem5) {
  elem5.disabled = 1;
  elem5.value = "Ой, на меня теперь больше не нажать";
}

/* 
** 12.
*/

function showTwoMonkiesThis(changePictire) {
  changePictire.src = "http://s3.fotokto.ru/photo/full/470/4705224.jpg";
}
function showOneMonkieThis(changePictire) {
  changePictire.src = "https://vecherka74.ru/uploads/posts/2016-06/1465472532_monkey_2016_02.jpg";
}

/* 
** 13.
*/

function changeColor() {
  var color = document.getElementById('test2');
  color.style.color = 'red';
}

/* 
** 14.
*/

function hideText() {
  var display = document.getElementById('test3');
  display.style.display = 'none';
}

function showText() {
  var display = document.getElementById('test3');
  display.style.display = "block";
}

/* 
** 15.
*/

function changeTextAndColor() {
  var text_and_color = document.getElementById('test4');
  text_and_color.style.color = 'red';
  text_and_color.value = "Ой, я поменял свой текст";
}

function changeTextAndColorBack() {
  text_and_color.style.color = 'black';
  text_and_color.value = "Ku-Ku";
}

/* 
** 16.
*/

function blockInput() {
  var text_in_input = document.getElementById('test5');
  text_in_input.disabled = 1;
  text_in_input.value = "Ой, на меня теперь больше не нажать";
  document.getElementById('hiddenInput').style.display = 'block';
}

function unBlockInput() {
  text_in_input.disabled = 0;
  text_in_input = "О, теперь меня опять можно нажимать";
}

/* 
** 17.
*/

function number_plus(number) {
  var number1 = document.getElementById('number');
  number1.value = number1.value + 1;
}