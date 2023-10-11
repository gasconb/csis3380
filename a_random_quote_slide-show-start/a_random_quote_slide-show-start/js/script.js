/******************************************
*****************************************/

/*** 
 * `quotes` array sets the quotes objects
***/
const quotes = [];

quotes[0] = {
    quote: "E = mc2",
    source: "Albert Einstein",
    year: "1905"
  };


quotes[1] = {
    quote: "Too much sanity may be madness — and maddest of all: to see life as it is, and not as it should be!",
    source: "Don Quixote",
    citation: "Cervantes Saavedra, M. D. & Ormsby, J. (1920) Don Quixote of la Mancha." +
    "[New York, T. Y. Crowell Co. 192-?]",
    year: "1920"
  };

quotes[2] = {
    quote:  "That's one small step for a man, a giant leap for mankind.",
    source: "Neil Armstrong",
  };

quotes[3] = {
    quote: "I think therefore I am.",
    source: "Rene Descartes",
  };
quotes[4] = {
    quote: "United we stand, divided we fall.",
    source: "Aesop",
  };



/***
 * `getRandomQuote` function counts the number of objects in the array and picks a random number between
 * 0 and the count of objects in array.
***/
function getRandomQuote() {
    const quoteCount = quotes.length;
    return Math.floor(Math.random() * quoteCount);
}



/***
 * `printQuote` function gets the random number from getRandomQuote function and prints it on screen
***/
function printQuote() {
    var randomQuote = getRandomQuote();

//This creates a html string which will replace the current div box. It does not close the second <p> to allow
//room for adding spans for citation and year if they exist
    var htmlString = '<p class = "quote">' + quotes[randomQuote].quote + '</p>' +
                       '<p class = "source">' + quotes[randomQuote].source;

//This checks if the quote has a citation value 
//and adds it to the html string as a span
    if (Object.hasOwn(quotes[randomQuote], "citation")) {
        htmlString += '<span class = "citation">' + quotes[randomQuote].citation + '</span>';
    }
//This checks if the quote has a year value 
//and adds it to the html string as a span
    if (Object.hasOwn(quotes[randomQuote], "year")) {
        htmlString += '<span class = "year">' + quotes[randomQuote].year + '</span>';
    }

//This closes the html string second <p>
    htmlString += '</p>'
//This replaces the div box with the html string
    document.getElementById("quote-box").innerHTML = htmlString;
    checkRepeat = randomQuote;
}



/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote);