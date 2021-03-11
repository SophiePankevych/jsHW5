// ==============================================
// -Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// ==============================================
// function Tags(tagName, action, attr) {
//     this.tagName = tagName;
//     this.action = action;
//     this.attr = attr;
// }
//     let Aattribute = [{
//         name: 'accesskey',
//         description: 'Активация ссылки с помощью комбинации клавиш',
//     }, {
//         name: 'coords',
//         description: 'Устанавливает координаты активной области',
//     }];
//     let divAttr = [{
//         name: 'align',
//         description: 'Задает выравнивание содержимого тега <div>.',
//     }, {
//         name: 'title',
//         description: 'Добавляет всплывающую подсказку к содержимому.',
//     }];
//     let h1Attr = [{
//         name: 'align',
//         description: 'Определяет выравнивание заголовка.',
//     }];
//     let spanAttr = [{
//         name: 'accesskey',
//         description: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.',
//     },{
//         name: 'class',
//         description: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     }];
//  let inputAttr = [{
//         name: 'accept',
//         description: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
//     },{
//         name: 'accesskey',
//         description: 'Переход к элементу с помощью комбинации клавиш.',
//     }];
// let formAttr = [{
//     name: 'id',
//     description: 'Идентификатор формы',
// }];
// let optionAttr = [{
//     name: 'disabled',
//     description: 'Заблокировать для доступа элемент списка.',
// },{
//     name: 'label',
//     description: 'Указание метки пункта списка.',
// }];
// let selectAttr = [{
//     name: 'accesskey',
//     description: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.',
// },{
//     name: 'autofocus',
//     description: 'Устанавливает, что список получает фокус после загрузки страницы.',
// }];
// let a = new Tags('<a>', ' предназначен для создания ссылок', Aattribute);
// console.log(a);
// let div = new Tags('<div>', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого.', divAttr);
// console.log(div);
// let h1 = new Tags('<h1>', ' представляет собой наиболее важный заголовок первого уровня', h1Attr);
// console.log(h1);
// let span = new Tags('<span>', 'предназначен для определения строчных элементов документа.', spanAttr);
// console.log(span);
// let input = new Tags('<input>', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', inputAttr);
// console.log(input);
// let form = new Tags('<form>', 'Связывает поле с формой по её идентификатору.', formAttr);
// console.log(form);
// let option = new Tags('<option>', 'определяет отдельные пункты списка', optionAttr);
// console.log(option);
// let select = new Tags('<select>', 'позволяет создать элемент интерфейса в виде раскрывающегося списка', selectAttr  );
// console.log(select);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class Tags {
//     constructor(tagName, action, attr) {
//         this.tagName = tagName;
//         this.action = action;
//         this.attr = attr;
//     }
// }
// let Aattribute = [{
//     name: 'accesskey',
//     description: 'Активация ссылки с помощью комбинации клавиш',
// }, {
//     name: 'coords',
//     description: 'Устанавливает координаты активной области',
// }];
// let divAttr = [{
//     name: 'align',
//     description: 'Задает выравнивание содержимого тега <div>.',
// }, {
//     name: 'title',
//     description: 'Добавляет всплывающую подсказку к содержимому.',
// }];
// let h1Attr = [{
//     name: 'align',
//     description: 'Определяет выравнивание заголовка.',
// }];
// let spanAttr = [{
//     name: 'accesskey',
//     description: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.',
// },{
//     name: 'class',
//     description: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
// }];
// let inputAttr = [{
//     name: 'accept',
//     description: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
// },{
//     name: 'accesskey',
//     description: 'Переход к элементу с помощью комбинации клавиш.',
// }];
// let formAttr = [{
//     name: 'id',
//     description: 'Идентификатор формы',
// }];
// let optionAttr = [{
//     name: 'disabled',
//     description: 'Заблокировать для доступа элемент списка.',
// },{
//     name: 'label',
//     description: 'Указание метки пункта списка.',
// }];
// let selectAttr = [{
//     name: 'accesskey',
//     description: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.',
// },{
//     name: 'autofocus',
//     description: 'Устанавливает, что список получает фокус после загрузки страницы.',
// }];
// let a = new Tags('<a>', ' предназначен для создания ссылок', Aattribute);
// console.log(a);
// let div = new Tags('<div>', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого.', divAttr);
// console.log(div);
// let h1 = new Tags('<h1>', ' представляет собой наиболее важный заголовок первого уровня', h1Attr);
// console.log(h1);
// let span = new Tags('<span>', 'предназначен для определения строчных элементов документа.', spanAttr);
// console.log(span);
// let input = new Tags('<input>', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', inputAttr);
// console.log(input);
// let form = new Tags('<form>', 'Связывает поле с формой по её идентификатору.', formAttr);
// console.log(form);
// let option = new Tags('<option>', 'определяет отдельные пункты списка', optionAttr);
// console.log(option);
// let select = new Tags('<select>', 'позволяет создать элемент интерфейса в виде раскрывающегося списка', selectAttr  );
// console.log(select);

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//     об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     model: 'Tesla',
//     producer: 'USA',
//     year: 2020,
//     maxSpeed: 300,
//     volume: 333,
// };
// car.drive = () => {
//     console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`)
// };
// car.info = () => {
//     console.log(`model - ${car.model}, producer - ${car.producer}, year - ${car.year}, max speed = ${car.maxSpeed}, volume = ${car.volume}`);
// };
// car.increaseMaxSpeed = (newSpeed) => {
//     car.maxSpeed = newSpeed;
//     console.log(`newSpeed = ${newSpeed}`)
// };
// car.changeYear = (newValue) => {
//     car.year = newValue;
//     console.log(`new year - ${newValue}`)
// };
// car.addDriver = (driver) => {
//     car.driver = driver;
//     console.log(driver)
// };
// let drivers = {name: 'vasya', age: 21, experience: 2};
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(500);
// car.changeYear(2021);
// car.addDriver(drivers);
// ==============================================

//     CLASS

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = () => {
//         console.log(`model - ${model}, producer - ${producer}, year - ${year}, max speed = ${maxSpeed}, volume = ${volume}`);
//     };
//     this.increaseMaxSpeed = (newSpeed) => {
//         maxSpeed = newSpeed;
//         console.log(`newSpeed = ${newSpeed}`)
//     };
//     this.changeYear = (newValue) => {
//         year = newValue;
//         console.log(`new year - ${newValue}`)
//     };
//     this.addDriver = (driver) => {
//         this.driver = driver;
//         console.log(driver);
//     };
// }
// let drivers = {name: 'vasya', age: 21, experience: 2};
// let car = new Car('BMW', 'Germany', 2020, 350, 44);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(400);
// car.changeYear(2021);
// car.addDriver(drivers);

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
//     рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info () {
//         console.log(`model - ${car.model}, producer - ${car.producer}, year - ${car.year}, max speed = ${car.maxSpeed}, volume = ${car.volume}`);
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(`newSpeed = ${newSpeed}`)
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//         console.log(`new year - ${newValue}`);
//     }
//     addDriver (driver) {
//         this.driver = driver;
//         console.log(driver);
//     }
// }
// let drivers = {name: 'vasya', age: 2020};
// let car = new Car('RangeRover', 'UK', 2002, 303, 40);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(500);
// car.changeYear(221);
// car.addDriver(drivers);

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let c1 = new Cinderella('Olenka', 12, 38);
// let c2 = new Cinderella('Sasha', 22, 39);
// let c3 = new Cinderella('Masha', 43, 36);
// let c4 = new Cinderella('Sophie', 19, 40);
// let c5 = new Cinderella('Nataly', 22, 38);
// let c6 = new Cinderella('Iryna', 51, 39);
// let c7 = new Cinderella('Nastya', 22, 37);
// let c8 = new Cinderella('Solya', 19, 39);
// let c9 = new Cinderella('Vicky', 25, 38);
// let c10 = new Cinderella('Yuly', 19, 39);
// let cinderella = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
// class Prince {
//     constructor(name, age, foundedShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundedShoe = foundedShoe;
//     }
// }
// let prince = new Prince('King', 25, 40);
// for (let cinderellaElement of cinderella) {
//     if (cinderellaElement.footSize === prince.foundedShoe) {
//         console.log(`Hey, ${prince.name}, I'm your cinderella. Let's go kissing.`)
//     }
// }

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, footSize) {
// this.name = name;
// this.age = age;
// this.footSize = footSize;
// }
// let c1 = new Cinderella('Olenka', 12, 38);
// let c2 = new Cinderella('Sasha', 22, 39);
// let c3 = new Cinderella('Masha', 43, 36);
// let c4 = new Cinderella('Sophie', 19, 40);
// let c5 = new Cinderella('Nataly', 22, 38);
// let c6 = new Cinderella('Iryna', 51, 39);
// let c7 = new Cinderella('Nastya', 22, 37);
// let c8 = new Cinderella('Solya', 19, 39);
// let c9 = new Cinderella('Vicky', 25, 38);
// let c10 = new Cinderella('Yuly', 19, 39);
// let cinderella = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
// function Prince(name, age, foundedShoe) {
//     this.name = name;
//     this.age = age;
//     this.foundedShoe = foundedShoe;
//
//     this.findCinderella = function () {
//         for (let cinderellaElement of cinderella) {
//             if (cinderellaElement.footSize === foundedShoe) {
//                 console.log(`Hey, ${name}, I'm ${cinderellaElement.name} and you're my prince, let's have fun...`)
//             }
//         }
//     }
// }
// let prince = new Prince('King', 25, 40);
// prince.findCinderella();

//Реализуйте класс Student (Студент), который будет наследовать от класса User .
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
// year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод, который
// будет изменять имя и фамилию студента.
// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getFullName () {
//         console.log(`Hey, my name - ${this.name}, surname - ${this.surname}`)
//     }
// }
// class Student extends User{
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     changeInfo (newName, newSurname) {
//         console.log(`My info has changed - ${newName} ${newSurname}`);
//     }
// }
// let user = new User('Sasha', 'Boom');
// user.getFullName();
// let student = new Student('Sophie', 'Boom', 2018);
// student.getFullName();
// student.changeInfo('Sophie', 'Pankevych');
// console.log(user);
// console.log(student);
