function fetch(queryType, queryValue) {
    let url = "";

    if (queryType === "isbn") {
        url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`;
    } 
    
    if (queryType === "title") {
        url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${queryValue}`;
    }

    $.get(url, function(data) {
        
        let allBooks = data.items;

        allBooks.forEach(function(singleBook) {
            
            let title = singleBook.volumeInfo.title;
            let authors = singleBook.volumeInfo.authors;
            let isbn = singleBook.volumeInfo.industryIdentifiers[0].identifier;

            console.log("שם הספר: " + title);
            console.log("הסופר: " + authors);
            console.log("מספר ISBN: " + isbn);
            console.log("-----------------------"); 
        });

    });
}