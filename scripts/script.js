// function menu() {
//     let answer = +prompt('Select the property \n' +
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

let arr = []

// function menu() {
//     // let answer = +prompt('Select the property \n' +
//     //     '1, for book name\n' +
//     //     "2, for author's last name\n" +
//     //     "3, for author's first name\n" +
//     //     '4, for release date\n' +
//     //     '5, for publishing\n' +
//     //     '6, for price\n' +
//     //     '7, for exit');
//
//     // switch (answer) {
//     //     case 1:
//     //         this.bookName = prompt('Book name');
//     //         break;
//     //     case 2:
//     //         this.lastName = prompt("Author's last name");
//     //         break;
//     //     case 3:
//     //         this.firstName = prompt("Author's first name");
//     //         break;
//     //     case 4:
//     //         this.releaseDate = prompt('Release date of book', '1902');
//     //         break;
//     //     case 5:
//     //         this.publishing = prompt('Publishing name');
//     //         break;
//     //     case 6:
//     //         let money = +prompt('Book price');
//     //         this.price = money + '₽';
//     //         break;
//     //     default:
//     //         break;
//     // }
// }

function MakeBook() {

    this.bookName = prompt('');
    this.author = {
        lastName: prompt("Author's last name"),
        firstName: prompt("Author's first name"),
    };
    this.releaseDate = prompt('Release date of book', '1902');
    this.publishing = prompt('Publishing name');
    this.price = +prompt('Book price');

    arr.push(this);
}

// menu()
let newBook = new MakeBook()

// while (1) {
//     let a = +prompt('1, if you want to continue');
//     if (a === 1) menu();
//     else break;
// }
for (let item of arr) {
    console.log(item.bookName)
}
console.table(arr);



// let user = {
//     name: "John",
//     age: 30
// };
//
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
//
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")