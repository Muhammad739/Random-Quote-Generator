// creating function for random quote generator
function random_quote(){
    // an Array of quotes
    let quote = [
        "The purpose of our lives is to be happy.",
        "Life is what happens when you're busy making other plans.",
        "Get busy living or get busy dying.",
        "You only live once, but if you do it right, once is enough.",
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "If you want to live a happy life, tie it to a goal, not to people or things.",
        "Never let the fear of striking out keep you from playing the game.",
        "Money and success don't change people; they merely amplify what is already there.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "Not how long, but how well you have lived is the main thing."

    ];
    
    // for loop to get the length of quote array and compare it with (i) and then increament (i) until it become equal to quote length
    for (i=0; i < quote.length ; i++){
        
        // multiplying random number with quote length
        let index = Math.floor(Math.random() * quote.length);
        
        // return the quote with number we get from index variable and put it in the square bracket
        return quote[index];
    }
};

// calling function
console.log(random_quote());

