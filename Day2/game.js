function scramble(word){
    // Splitting the given word into an array 
    let word_arr = word.split("");

    // Using a for loop to iterate through the length of the string, randomly 
    // swapping letters as we go
    for(let i = 0; i < word_arr.length; i++){
        // Picks a random index of a letter to swap with 
        let new_index = Math.floor(Math.random()*i);

        // Stores the value of the current index
        let old_value = word_arr[i];

        // Sets the value at the current index to be the value of the random index
        word_arr[i] = word_arr[new_index];

        // Sets the value of the random index to be the stored value
        word_arr[new_index] = old_value;
    }

    // Joins the array to a new word
    let new_word = word_arr.join('');
    return new_word;
}

function handle_guess(event, guess, word){
    if(event.key != "Enter") return;
    if(guess == word){
        $feedback.innerHTML = "Nice, you got it!";
    } else {
        $feedback.innerHTML = "Keep trying!"
    }
}

let word = "decrease"
const $scrambled_word = document.querySelector("#scrambledword");
const $guess = document.querySelector("#userguess");
const $feedback = document.querySelector("#feedback");

let new_word = scramble(word);
$scrambled_word.innerHTML = new_word;
$guess.addEventListener("keypress", e => handle_guess(e, $guess.value, word));
