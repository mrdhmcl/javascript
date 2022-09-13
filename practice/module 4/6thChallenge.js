const booksByCategory = [
  {
    category: "Wealth",
    books: [
      {
        title: "The secrets of the millionaire mind",
        author: "T. Harv Eker",
      },
      {
        title: "The richest man in Babylon",
        author: "George S. Clason",
      },
      {
        title: "Rich father, poor dad",
        author: "Robert T. Kiyosaki and Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Emotional Intelligence",
    books: [
      {
        title: "You arre irreplaceable",
        author: "Augusto Cury",
      },
      {
        title: "Anxiety - How to face the evil of the century",
        author: "Augusto Cury",
      },
      {
        title: "The 7 habits of highly effective people",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length

function countBooksByCategory() {
  for(let category of booksByCategory) {
    console.log('The category is: ' + category.category)
    console.log('Number of books in this category: ' + category.books.length)
  }
}

countBooksByCategory()

function countAuthors() {
  let authors = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log('Authors total: ' + authors.length)
}

countAuthors()

function showAuthorsBooks(author) {
  let books = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(`${author}'s books: ${books.join(", ")}`)
}

showAuthorsBooks("Augusto Cury")