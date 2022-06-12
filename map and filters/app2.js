let linconQuotesFilter = quotes.filter(
    quote => quote.author === "Abraham Lincoln"
).map(quote => quote.text);

// console.log(linconQuotesFilter);

let authorFilter = prompt('Enter your author name');

let authorFilterResult = quotes.filter(quote => quote.author === authorFilter);

console.log(authorFilterResult);