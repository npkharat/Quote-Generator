let btn=document.querySelector(".btn");
let quote=document.querySelector("#quote");
let person=document.querySelector("#person")

const quotes=[
    {
        quote: "Life is what happens when you're busy making other plans." ,

        person: "John Lennon"
    },
    { 
        quote:"Get busy living or get busy dying.",

        person:"Stephen King"
    },
    {
        quote:"You only live once, but if you do it right, once is enough." ,

        person:"Mae West"
    },
    {
        quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",

        person:"Thomas A. Edison"
    }
];

btn.addEventListener('click', function ()
{
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});