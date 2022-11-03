//2
// let arr = [];
// menu();
//
// function menu() {
//     while (1) {
//         let answer = +prompt("0 - закончить\n" +
//             "1 - вывод массива\n" +
//             "2 - добавить объект\n" +
//             "3 - поиск объектов\n" +
//             "4 - сортировка массива");
//
//         switch (answer) {
//             case 0:
//                 return;
//             case 1:
//                 printArr();
//                 break;
//             case 2:
//                 let book = new MakeBook();
//                 break;
//             case 3:
//                 searchObj();
//                 break;
//             case 4:
//                 sortArr();
//                 break;
//             default:
//                 break;
//         }
//     }
// }
//
// function MakeBook() {
//     this.bookName = prompt('Book name');
//     this.author = {
//         lastName: prompt("Author's last name"),
//         firstName: prompt("Author's first name"),
//     };
//     this.releaseDate = date();
//     this.publishing = prompt('Publishing name');
//     this.price = cost();
//     arr.push(this);
// }
//
// function cost() {
//     let price = +prompt('Book price', '999');
//     if (isNaN(price) || !price) return 0;
//     else return price;
// }
//
// function date() {
//     let a = +prompt('Release date', '1902');
//     if (isNaN(a) || a > 2022 || !a) return 0;
//     else return a;
// }
//
// function printArr() {
//     console.table(arr)
// }
//
// function searchObj() {
//     let search = prompt('Введите св-во поиска');
//     let value = prompt('Введите значение св-ва');
//     for (let item of arr) {
//         if (item[search] == value) console.log(item);
//     }
// }
//
// function sortArr() {
//     let property = prompt('Введите св-во сортировки, bookName, price');
//     if (property === 'bookName') {
//         arr.sort(function (a, b) {
//             if (a.bookName.toLowerCase() > b.bookName.toLowerCase()) return 1;
//             if (a.bookName.toLowerCase() < b.bookName.toLowerCase()) return -1;
//             else return 0;
//         });
//     } else if (property === 'price') {
//         arr.sort(function (a, b) {
//             if (a.price > b.price) return 1;
//             if (a.price < b.price) return -1;
//             else return 0;
//         });
//     }
//
//     console.table(arr)
// }

let elem =  document.querySelector('.elem');
let anchor = document.querySelector('.anchor');

// let value = prompt('Введите значение - позицию\n' +
    'top, right, bottom', 'right');

let positionAt = function(anchor, position, elem) {

    if(value.toLowerCase() === 'right') {
        elem.style.flexDirection = 'row';
    } else if(value.toLowerCase() === 'top') {
        elem.style.flexDirection = 'column';
    } else if(value.toLowerCase() === 'bottom') {

    }
}
positionAt(anchor, value, elem)