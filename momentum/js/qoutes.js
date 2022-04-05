const quotes = [
  {
    quote: "First quote",
    author: "first"
  },
  {
    quote: "second quote",
    author: "second"    
  },
  {
    quote: "third quote",
    author: "third"
  },
  {
    quote: "fourth quote",
    author: "fourth"
  },
  {
    quote: "fifth quote",
    author: "fifth"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const index = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[index].quote;
author.innerText = quotes[index].author;
