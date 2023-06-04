// Подмена чисел на сайте с генератором рандомных чисел на сайте https://randstuff.ru/number/



// Число, которым мы хотим заменить результат
var desired_number_1 = 10;
var desired_number_2 = 31337;
var desired_number_3 = 955;
// На каком по счету нажатии произвести замену соответсвенно
var desired_click_number_1 = 1;
var desired_click_number_2 = 3;
var desired_click_number_3 = 7;

var click_ctr = 0;

// Проверяем, что функция randstuffPrintNumber определена
if (typeof randstuffPrintNumber !== "undefined") {
  // Сохраняем randstuffPrintNumber под другим именем и переопределяем её
  var origRandstuffPrintNumber = randstuffPrintNumber;
  randstuffPrintNumber = function() {
    // Ведем учет количества вызовов функции и подменяем результат на нужном по счету
    click_ctr++;

    if (click_ctr === desired_click_number_1) {
        document.getElementById("randstuff-random-number").textContent = desired_number_1;
    } 
    if (click_ctr === desired_click_number_2) {
        document.getElementById("randstuff-random-number").textContent = desired_number_2;
    }
    if (click_ctr === desired_click_number_3) {
        document.getElementById("randstuff-random-number").textContent = desired_number_3;
    }
    else {
      origRandstuffPrintNumber();
    }
  };
}
