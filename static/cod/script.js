// Получаем элементы
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");
var search = document.getElementById("search");
var languageList = document.getElementById("language-list").getElementsByTagName("li");

// Открываем модальное окно при нажатии на кнопку
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на крестик
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при нажатии вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Фильтрация языков по мере ввода
search.onkeyup = function() {
    var filter = search.value.toLowerCase();
    for (var i = 0; i < languageList.length; i++) {
        var language = languageList[i].textContent || languageList[i].innerText;
        if (language.toLowerCase().indexOf(filter) > -1) {
            languageList[i].style.display = "";
        } else {
            languageList[i].style.display = "none";
        }
    }
}


function toggleElement() {
    var container = document.getElementById("toggle-container");
    var button = document.querySelector(".btn");
    var text = button.querySelector(".toggle-text"); // Находим элемент с текстом без скобок
    var boxContent = document.getElementById("box-content");

    // Применяем синий цвет к тексту кнопки
    button.style.color = "blue";

    // Применяем черный цвет к скобкам
    var brackets = button.querySelectorAll(".brackets");
    brackets.forEach(function(bracket) {
        bracket.style.color = "black"; // Черный цвет скобок
    });

    if (container.style.display === "none") {
        container.style.display = "flex";
        container.style.height = "25px"; // Измените на желаемую высоту при активации
        boxContent.style.height = "101px"; // Увеличьте высоту box-content
        text.textContent = "скрыть";
    } else {
        container.style.display = "none";
        container.style.height = "0px";
        boxContent.style.height = "75px"; // Верните высоту box-content к изначальной
        text.textContent = "показать";
    }
}



function toggleElement2() {
    var container = document.getElementById("toggle-container-languages");
    var button = document.querySelector(".btn-markup-languages");
    var text = button.querySelector(".toggle-text"); // Находим элемент с текстом без скобок
    var markupLanguages = document.getElementById("markup-languages");

    // Применяем синий цвет к тексту кнопки
    button.style.color = "blue";

    // Применяем черный цвет к скобкам
    var brackets = button.querySelectorAll(".brackets");
    brackets.forEach(function(bracket) {
        bracket.style.color = "black"; // Черный цвет скобок
    });

    // Переключение состояния отображения
    if (window.getComputedStyle(container).display === "none") {
        container.style.display = "flex";
        container.style.height = "25px";
        markupLanguages.style.height = "173px"; // Увеличиваем высоту
        text.textContent = "скрыть"; // Меняем текст между скобками
    } else {
        container.style.display = "none";
        container.style.height = "0px";
        markupLanguages.style.height = "28px"; // Верните высоту к изначальной
        text.textContent = "показать"; // Меняем текст обратно
    }
}



function toggleElement3() {
    var container = document.getElementById("toggle-container-consortium");
    var button = document.querySelector(".btn-consortium");
    var text = button.querySelector(".toggle-text"); // Находим элемент с текстом без скобок
    var consortium = document.getElementById("consortium");

    // Применяем синий цвет к тексту кнопки
    button.style.color = "blue";

    // Применяем черный цвет к скобкам
    var brackets = button.querySelectorAll(".brackets");
    brackets.forEach(function(bracket) {
        bracket.style.color = "black"; // Черный цвет скобок
    });

    if (window.getComputedStyle(container).display === "none") {
        container.style.display = "flex";
        container.style.height = "25px";
        consortium.style.height = "590px"; // Увеличиваем высоту
        text.textContent = "скрыть"; // Меняем текст между скобками
    } else {
        container.style.display = "none";
        container.style.height = "0px";
        consortium.style.height = "28px"; // Верните высоту к изначальной
        text.textContent = "показать"; // Меняем текст между скобками
    }
}


function toggleElement4() {
    var container = document.getElementById("toggle-container-standards");
    var button = document.querySelector(".btn-standards");
    var text = button.querySelector(".toggle-text"); // Находим элемент с текстом без скобок
    var standards = document.getElementById("standards");

    // Применяем синий цвет к тексту
    button.style.color = "blue";

    // Применяем черный цвет к скобкам
    var brackets = button.querySelectorAll(".brackets");
    brackets.forEach(function(bracket) {
        bracket.style.color = "black"; // Черный цвет скобок
    });
    
    // Переключение состояния отображения
    if (window.getComputedStyle(container).display === "none") {
        container.style.display = "flex";
        container.style.height = "25px";
        standards.style.height = "410px"; // Увеличиваем высоту
        text.textContent = "скрыть"; // Меняем текст внутри кнопки
    } else {
        container.style.display = "none";
        container.style.height = "0px";
        standards.style.height = "28px"; // Вернем высоту к изначальной
        text.textContent = "показать"; // Меняем текст обратно
    }
}

function toggleElement5() {
    var element = document.getElementById('element-5');
    var toggleText = document.querySelector('.toggle-text');
  
    if (element.classList.contains('collapsed')) {
        element.classList.remove('collapsed');
        element.classList.add('expanded');
        toggleText.textContent = 'показать';
    } else {
        element.classList.remove('expanded');
        element.classList.add('collapsed');
        toggleText.textContent = 'скрыть';
    }

    
}

function highlightSection(event, sectionId) {
    event.preventDefault(); // Останавливаем стандартное поведение ссылки
    const section = document.getElementById(sectionId);
    
    // Удаляем предыдущие выделения
    const highlighted = document.querySelectorAll('.highlighted');
    highlighted.forEach(el => el.classList.remove('highlighted'));

    // Добавляем класс подсветки к выбранному разделу
    section.classList.add('highlighted');

    // Переходим к разделу
    section.scrollIntoView({ behavior: 'smooth' });
}