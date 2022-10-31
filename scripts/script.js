function menu() {
    let answer = +prompt('Select the property \n' +
        '1, for book name\n' +
        "2, for author's last name\n" +
        "3, for author's first name\n" +
        '4, for release date\n' +
        '5, for publishing\n' +
        '6, for price\n' +
        '7, for exit');

    while (true) {
        if (answer === 1) {
            this.bookName = prompt('Book name');
        }
        else if (answer === 2) {
            this.lastName = prompt("Author's last name");
        }
        else if (answer === 3) {
            this.firstName = prompt("Author's first name");
        }
        else if (answer === 4) {
            this.releaseDate = prompt('Release date of book');
        }
        else if (answer === 5) {
            this.publishing = prompt('Publishing name');

        }
        else if (answer === 6) {
            this.price = prompt('Price of book')
        }
        else break;
    }
}
menu()

function makeBook() {
    let arr = []
    let Book = {
        bookName: 'no data',
        author: {
            lastName: 'no data',
            firstName: 'no data',
        },
        releaseDate: 'no data',
        publishing: 'no data',
        price: 'no data',
    }
    arr.push(Book)
    console.table(arr)
}
makeBook()
// «Книга»: название; автор (фамилия; имя); год выхода; издательство; себестоимость; цена; прибыль.




// let user = {
//     nam5e: "John",
//     age: 30
// };
//
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
//
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")