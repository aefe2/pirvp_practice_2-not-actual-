// function menu() {
//     let answer = +prompt('Select the property \n' +;
//         '1, for book name\n' +
//         "2, for author's last name\n" +
//         "3, for author's first name\n" +
//         '4, for release date\n' +
//         '5, for publishing\n' +
//         '6, for price\n' +
//         '7, for exit');
//
//
//     switch (answer) {
//         case 1:
//             this.bookName = prompt();
//             break;
//         case 2:
//             this.lastName = prompt();
//             break;
//         case 3:
//             this.firstName = prompt();
//             break;
//         case 4:
//             this.releaseDate = prompt();
//             break;
//         case 5:
//             this.publishing = prompt();
//             break;
//         case 6:
//             this.price = prompt();
//             break
//         default:
//             break;
//     }
//     // while (true) {
//     //     if (answer === 1) {
//     //         this.bookName = prompt('Book name');
//     //         break;
//     //     } else if (answer === 2) {
//     //         this.lastName = prompt("Author's last name");
//     //         break;
//     //     } else if (answer === 3) {
//     //         this.firstName = prompt("Author's first name");
//     //         break;
//     //     } else if (answer === 4) {
//     //         this.releaseDate = prompt('Release date of book');
//     //         break;
//     //     } else if (answer === 5) {
//     //         this.publishing = prompt('Publishing name');
//     //         break;
//     //     } else if (answer === 6) {
//     //         this.price = prompt('Price of book')
//     //         break;
//     //     } else break;
//     // }
// }
let arr = [];
menu();

function menu() {
    while (1) {
        let answer = +prompt("0 - закончить\n" +
            "1 - вывод массива\n" +
            "2 - добавить объект\n" +
            "3 - поиск объектов\n" +
            "4 - сортировка массива");

        switch (answer) {
            case 0:
                return;
            case 1:
                printArr();
                break;
            case 2:
                let book = new MakeBook();
                break;
            case 3:
                searchObj();
                break;
            case 4:
                sortArr();
                break;
            default:
                break;
        }
    }
}

function MakeBook() {
    this.bookName = prompt('Book name');
    this.author = {
        lastName: prompt("Author's last name"),
        firstName: prompt("Author's first name"),
    };
    this.releaseDate = date();
    this.publishing = prompt('Publishing name');
    this.price = cost();
    arr.push(this);
}

function cost() {
    let price = +prompt('Book price', '999');
    if (isNaN(price) || !price) return 0;
    else return price;
}

function date() {
    let a = +prompt('Release date', '1902');
    if (isNaN(a) || a > 2022 || !a) return 0;
    else return a;
}

function printArr() {
    console.table(arr)
}

function searchObj() {
    let search = prompt('Введите св-во поиска');
    let value = prompt('Введите значение св-ва');
    for (let item of arr) {
        if (item[search] == value) console.log(item);
    }
}

function sortArr() {
    let property = prompt('Введите св-во сортировки, bookName, price');
    if (property === 'bookName') {
        arr.sort(function (a, b) {
            if (a.bookName.toLowerCase() > b.bookName.toLowerCase()) return 1;
            if (a.bookName.toLowerCase() < b.bookName.toLowerCase()) return -1;
            else return 0;
        });
    } else if (property === 'price') {
        arr.sort(function (a, b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            else return 0;
        });
    }

    console.table(arr)
}

// «Книга»: название; автор (фамилия; имя); год выхода; издательство; себестоимость; цена; прибыль.
// while (1) {
//     let a = +prompt('1, if you want to continue');
//     if (a === 1) menu();
//     else break;
// }


// let user = {
//     nam5e: "John",
//     age: 30
// };
//
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
//
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")