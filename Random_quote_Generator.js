function random_quote(){
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

    for (i=0; i < quote.length ; i++){

        let index = Math.floor(Math.random() * quote.length);

        return quote[index];
    }
};

console.log(random_quote());


console.log("hello")