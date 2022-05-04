var filterButton = document.getElementById("button");
var priceSlider = document.getElementById('price');
var squareSlider = document.getElementById('square');

// Инициализация Slider.js

// Первым параметром передаётся контейнер слайдера(в нашем случае переменная priceSlider 
// со значением document.getElementById('price')), а второй параметр - объект с параметрами слайдера
noUiSlider.create(priceSlider, {
    // Значения начала и конца слайдера по умолчанию
    start: [2000, 10000],
    // Соединить две кнопки слайдера линией
    connect: true,
    // Диапазон значений
    range: {
        'min': 2000,
        'max': 10000,
    },
    // Шаг кнопки
    step: 500,
    // Максимальный отступ между двумя кнопками (в данном случае оно не может быть больше 1000)
    margin: 1000,
    // Для формата значения(добавление в конце чисел знака ₽), используется бибилиотека wNumb.js
    tooltips: true,
    format: wNumb({
        decimals: 0,
        // Знак, который ставится после значения
        suffix: " ₽"
    }),
});


noUiSlider.create(squareSlider, {
    start: [30, 500],
    connect: true,
    range: {
        'min': 30,
        'max': 500,
    },
    step: 10,
    margin: 100,
    tooltips: true,
    format: wNumb({
        decimals: 0,
        suffix: " кв. м."
    }),
});

var priceMin, priceMax, squareMin, squareMax = 0;



class Flat {
    constructor(price, square, address) {
        this.price = price;
        this.square = square;
        this.address = address;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (!(value < 2000 || value > 10000)) {
            this._price = value;
        }
    }

    get square() {
        return this._square;
    }

    set square(value) {
        if (!(value < 30 || value > 500)) {
            this._square = value;
        }
        return;
    }

    get address() {
        return this._address;
    }

    set address(text) {
        if (typeof text !== "string") {
            this._address = text.toString();
            return;
        }
        this._address = text;
    }
}

// Добавление новых элементов с помощью конструктора класса Flat, 
// добавление этих элементов в массив flatsArray
var flatsArray = [];

// Добавлять объекты (речь о квартирах) следует в очереди возрастания
var flat_1 = new Flat(3000, 50, "Баррикадная улица, 2/1с1");
flatsArray.push(flat_1);
var flat_2 = new Flat(4000, 100, "Проточный переулок, 8/2с1");
flatsArray.push(flat_2);
var flat_3 = new Flat(6000, 250, "улица Заморёнова, 29");
flatsArray.push(flat_3);
var flat_4 = new Flat(7500, 300, "Курсовой переулок, 8с2");
flatsArray.push(flat_4);
var flat_5 = new Flat(9000, 400, "улица Дунаевского, 8к1");
flatsArray.push(flat_5);

var mapsFlatsArray = [];

var mainGeoObjects = [];

function init() {

    // Создаём коллекцию геообъектов и приваиваем это к массиву mainGeoObjects
    mainGeoObjects = new ymaps.GeoObjectCollection({}, {});

    // Присваиваем каждому элементу массива геометок квартир метод создания новой метки

    // В массив необходимо записать координаты метки (в квадратные скобки)
    mapsFlatsArray[0] = new ymaps.Placemark([55.759583, 37.583041], {
        // Текст при наведении мышью на метку
        hintContent: 'Квартира №1',
        // Контент, отображаемый при клике на метку (можно стилизировать)
        balloonContentBody: `Цена квартиры: ${flatsArray[0].price}₽,<br>
        Площадь квартиры: ${flatsArray[0].square} кв. м.<br>
        Адрес квартиры: ${flatsArray[0].address}<br>
        <a href="https://google.com" target="_blank">Снять квартиру</a>`,
    }, {
        iconLayout: 'default#image',
        // Путь до иконки метки
        iconImageHref: 'assets/circle-icons/1.png',
        // Размеры метки
        iconImageSize: [45, 45],
        // Смещение "ножки" метки при увеличении масштаба
        iconImageOffset: [-35, -35]
    });
    mapsFlatsArray[1] = new ymaps.Placemark([55.750601, 37.580418], {
        hintContent: 'Квартира №2',
        balloonContentBody: `Цена квартиры: ${flatsArray[1].price}₽,<br>
        Площадь квартиры: ${flatsArray[1].square} кв. м.,<br>
        Адрес квартиры: ${flatsArray[1].address}<br>
        <a href="https://google.com" target="_blank">Снять квартиру</a>`,
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/circle-icons/2.png',
        iconImageSize: [45, 45],
        iconImageOffset: [-35, -35]
    });
    mapsFlatsArray[2] = new ymaps.Placemark([55.760930, 37.566350], {
        hintContent: 'Квартира №3',
        balloonContentBody: `Цена квартиры: ${flatsArray[2].price}₽,<br>
        Площадь квартиры: ${flatsArray[2].square} кв. м.,<br>
        Адрес квартиры: ${flatsArray[2].address}<br>
        <a href="https://google.com" target="_blank">Снять квартиру</a>`,
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/circle-icons/3.png',
        iconImageSize: [45, 45],
        iconImageOffset: [-35, -35]
    });
    mapsFlatsArray[3] = new ymaps.Placemark([55.740988, 37.604655], {
        hintContent: 'Квартира №4',
        balloonContentBody: `Цена квартиры: ${flatsArray[3].price}₽, <br>
        Площадь квартиры: ${flatsArray[3].square} кв. м.,<br> 
        Адрес квартиры: ${flatsArray[3].address}<br>
        <a href="https://google.com" target="_blank">Снять квартиру</a>`,
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/circle-icons/4.png',
        iconImageSize: [45, 45],
        iconImageOffset: [-35, -35]
    });
    mapsFlatsArray[4] = new ymaps.Placemark([55.740912, 37.547558], {
        hintContent: 'Квартира №4',
        balloonContentBody: `Цена квартиры: ${flatsArray[4].price}₽, <br> 
        Площадь квартиры: ${flatsArray[4].square} кв. м.,<br>
        Адрес квартиры: ${flatsArray[4].address}<br>
        <a href="https://google.com" target="_blank">Снять квартиру</a>`,
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/circle-icons/5.png',
        iconImageSize: [45, 45],
        iconImageOffset: [-35, -35]
    });

    // Создаём карту
    var mainMap = new ymaps.Map("map", {
        center: [55.759583, 37.583041],
        zoom: 13,
    });

    // Добавляем все елементы массива квартир в коллекцию геообъектов
    for (let i = 0; i < mapsFlatsArray.length; i++) {
        mainGeoObjects.add(mapsFlatsArray[i]);
    }

    // Добавляем на карту коллекцию геообъектов
    mainMap.geoObjects.add(mainGeoObjects);
    // Делаем размер масштаба карты таким, чтобы все точки на карте были видны
    mainMap.setBounds(mainGeoObjects.getBounds());

    // Обработчик событий для кнопки "Применить (фильтры)"
    filterButton.addEventListener("click", function () {

        // С помощью геттера noUiSlider читаем все значения слайдеров в фильтре,
        // далее (из-за того, что с помощью библиотеки wNumb.js мы добавляем в конце чисел ₽ и кв. м.)
        // убираем с помощью регулярного выражения все знаки кроме чисел, и парсим полученное значение в число
        priceMin = parseInt(price.noUiSlider.get()[0].replace(/[^0-9]/g, ''), 10);
        priceMax = parseInt(price.noUiSlider.get()[1].replace(/[^0-9]/g, ''), 10);
        squareMin = parseInt(square.noUiSlider.get()[0].replace(/[^0-9]/g, ''), 10);
        squareMax = parseInt(square.noUiSlider.get()[1].replace(/[^0-9]/g, ''), 10);

        document.getElementById("info").innerHTML =
            `Минимальная цена: ${priceMin}<br>Максимальная цена: ${priceMax}
            <br>Минимальная площадь: ${squareMin}<br>Максимальная площадь: ${squareMax}`;

        for (let i = 0; i < flatsArray.length; i++) {
            // В if надо прописать условия, при котором метка будет добавлена/останется на карте⁡
            if (!(flatsArray[i].price < priceMin || flatsArray[i].price > priceMax ||
                    flatsArray[i].square < squareMin || flatsArray[i].square > squareMax)) {
                mainGeoObjects.add(mapsFlatsArray[i]);
            } else {
                mainGeoObjects.add(mapsFlatsArray[i]);
                mainGeoObjects.remove(mapsFlatsArray[i]);
            }
        }

        // Метод для перерисовки карты
        mainMap.container.fitToViewport();
    });
}

ymaps.ready(init);