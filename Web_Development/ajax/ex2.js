function fetch(queryType, queryValue){
    let searchPrefix = ""

    if (queryType === "isbn") {
        searchPrefix = "isbn:";
    } else if (queryType === "title") {
        searchPrefix = "intitle:";
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchPrefix}${queryValue}`;

    $.get(url, function(data) {
        console.log(`תוצאות עבור חיפוש ${queryType}:`, data);
    });
}

fetchBookByIsbn(9780575087057)
