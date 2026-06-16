function fetchBookByIsbn(isbn) {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, function(data) {
        console.log("המידע שחזר עבור הספר:", data);
    });
}

fetchBookByIsbn(9780575087057)
