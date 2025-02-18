// Task: Online Book Library Management System
// Create a class-based system to manage an online book library with async operations

class Book {
    constructor(id, title, author, available = true) {
        this.id = id; // Default - undefined
        this.title = title; // Default - undefined
        this.author = author; // Default - undefined
        this.available = available; // Default - true
    }
}

class Library {
    // Initialize the array of Book objects
    #books = [];

    static isValidBook(book) {
        return !Object.values(book).some((element) => {return typeof(element) === 'undefined'});
    }

    // TODO: Implement addBook method
    // Should validate that book has all required properties
    // Return a Promise that resolves with the added book
    addBook(bookData) {
        return new Promise((resolve, reject) => {
            if(Library.isValidBook(bookData)) {
                this.#books.push(bookData);
                resolve(`Book "${bookData.title}" was added successfully.`);
            } else {
                reject(new Error(`Book wasn't added, due to missing some properties.`));
            }
        });
    }

    // TODO: Implement borrowBook method
    // Should be async and return a Promise
    // Throw error if book is not available
    // Update book's available status
    async borrowBook(bookId) {
        try {
            let index = this.#books.findIndex((book) => {return book.id === bookId});
            if (index !== -1) {
                this.#books.at(index).available = false;
                return this.#books.at(index);
            } else {
                throw new Error(`There is no a book with ID "${bookId}".`);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // TODO: Implement returnBook method
    // Should be async and return a Promise
    // Throw error if book wasn't borrowed
    async returnBook(bookId) {
        try {
            let index = this.#books.findIndex((book) => {return book.id === bookId});
            if (index !== -1 && !this.#books.at(index).available) {
                this.#books.at(index).available = true;
                return this.#books.at(index);
            } else if (index === -1) {
                throw new Error(`There is no a book with ID "${bookId}".`);
            } else {
                throw new Error(`The book "${bookId}" wasn't borrowed.`);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // TODO: Implement searchBooks method
    // Should accept search term and return filtered array of books
    // Use array methods (filter, map, etc.)
    async searchBooks(bookId) {
        try {
            let book = this.#books.find(book => {return book.id === bookId});
            if (book) {
                return book;
            } else {
                throw new Error(`There is no a book with ID "${bookId}".`);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAllBooks() {
        return this.#books;
    }
}

// let library = new Library();
// library.addBook(book1)
//     .then((successMessage) => {console.log(successMessage)})
//     /* '.then' method is triggered (by JS) ONLY WHEN 'resolve' is called (by developer) inside the Promise (a Promise is resolved), this calling may be delayed due to timeout. */
//     .catch((error) => {console.log(error)});


// (async () => {
//     try {
//         let book0 = new Book(1, 'Paulo');
//         let book1 = new Book(1, 'The Alchemist', 'Pushkin');
//         let book2 = new Book(2, 'The Men', 'Pavel');
//         let book3 = new Book(3, 'The World', 'Michel');
//         let library = new Library();
//         console.log(await library.addBook(book1));
//         console.log(await library.addBook(book2));
//         console.log(await library.addBook(book3));
//         console.log(await library.borrowBook(2));
//         console.log(await library.returnBook(4));
//         console.log(await library.returnBook(1));
//         console.log(await library.returnBook(2));
//         console.log(library.searchBooks(1));
//     } catch (error) {
//         console.log(error.message);
//     }
// })();

/*
Task 2: Implement the following functions to work with the Library class
- Use arrow functions
- Handle errors appropriately
- Use async/await for async operations
*/

// TODO: Implement function to add multiple books
const initializeLibrary = async (library, booksData) => {
    try {
        booksData.forEach(async (book) => {console.log(await library.addBook(book));});
    } catch (error) {
        console.log(error.message);
    }
};

// TODO: Implement function to borrow multiple books
const borrowMultipleBooks = async (library, bookIds) => {
    try {
        bookIds.forEach(async (bookId) => {console.log(await library.borrowBook(bookId));});
    } catch (error) {
        console.log(error.message);
    }
};

/*
  Task 3: Write test code that demonstrates the usage of your implementation
  - Create a library instance
  - Add books
  - Perform searches
  - Borrow and return books
  - Handle errors
  - Use different types of loops (for, do...while)
  - Use switch statement for different operations
  */

// Example test code structure:
const runLibraryTest = async () => {
    try {
        const library = new Library();

        let booksData = [
            new Book(1, 'The Alchemist', 'Pushkin'),
            new Book(2, 'The Men', 'Pavel'),
            new Book(3, 'The World', 'Michel'),
            new Book(4, 'The Country', 'Martin')
        ];

        await initializeLibrary(library, booksData);

        console.log('The library was initialized');

        let bookIds = [2, 4];

        await borrowMultipleBooks(library, bookIds);

        console.log('The books were borrowed');

        console.log(await library.returnBook(5));
        console.log(await library.returnBook(1));
        console.log(await library.returnBook(2));

        console.log('The books were returned');

        console.log(await library.searchBooks(1));

        for(let i = 0; i < await library.getAllBooks().length; i++) {
            console.log(await library.returnBook(i));
        }

        console.log(await library.getAllBooks());

    } catch (error) {
        console.error('Test failed:', error.message);
    }
};

// TODO: Run the test
runLibraryTest();
