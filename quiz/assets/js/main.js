let discarded = [];
let unused_cards = deck.slice();
let selected_option, index, deck_index, card;
let responded = false;
let can_continue = false;
let score = 0;


function exit() { window.location ='../'; }

// Returns an array of length quantity where random numbers are constrained by range & a forbidden #.
function roll_dice(range, quantity, forbidden) {
    rolls = [];
    while (rolls.length < quantity) {
        let dice = Math.floor(Math.random() * range);
        if ((dice != forbidden) && !(rolls.includes(dice))) rolls.push(dice);
    }
    return rolls;
}

// draw_card: Draws a card from the unused pile and writes the question, image, & answer to the card.
// It picks 3 random options from anywhere in the complete deck & shuffles the right ans into them.
function draw_card() {
    clear_selected();
    if (window.screen.availWidth > 400) document.getElementById('bottom_text').innerHTML = 'question ' + (discarded.length +1);

    index = Math.floor(Math.random() * unused_cards.length); // index in unused pile
    card = unused_cards[index];
    deck_index = deck.indexOf(card);

    document.getElementsByClassName('question')[0].innerHTML = card.question;
    document.getElementsByClassName('question_img')[0].src = '/quiz/assets/img/' + card.image;
    
    const selector = document.getElementById('qn_optns');
    let indices = roll_dice(deck.length, 3, deck_index); 
    indices.splice(Math.floor(Math.random() * 4), 0, deck_index);
    for (let i = 0; i < 4; i++) selector.children[i].innerHTML = deck[indices[i]].answer;    
}


function clear_selected() {
    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains('selected-'+series)) options[i].classList.remove('selected-'+series);
        if (options[i].classList.contains('correct')) options[i].classList.remove('correct');
        if (options[i].classList.contains('incorrect')) options[i].classList.remove('incorrect');
    }
}

function select(button) {
    if (button.classList.contains('selected-'+series)) {
        responded = false;
        clear_selected();
    }
    else {
        responded = true;
        clear_selected();
        button.classList.add('selected-'+series);
    }
    selected_option = button;
}

function pass() { next(); }

function next() {
    discarded.push(card);
    unused_cards.splice(index, 1);
    if (unused_cards.length != 0) draw_card();
    else display_results();
}

function confirm() {
    if (can_continue) {
        document.getElementById('confirm').innerHTML = "confirm";
        responded = false;
        can_continue = false;
        next();
    }
    if (responded) {
        if (card.answer == selected_option.innerHTML) {
            selected_option.classList.add("correct");
            score++;
        } else selected_option.classList.add("incorrect");
        document.getElementById('confirm').innerHTML = "next";
        can_continue = true;
    } 
}

function display_results() {
    document.getElementById('bottom_text').innerHTML = 'results';
    document.getElementById('pass').style.display = 'none';
    document.getElementById('confirm').style.display = 'none';
    document.getElementsByClassName('quiz_body')[0].classList.add('banished');
    document.getElementById('results_page').classList.remove('banished');

    if ((score/discarded.length) == 1) {
        document.getElementById('result').innerHTML = '<span style="font-size: 100px">&#127942;</span><br>Congratulations! You got every question right!';
    } else if ((score/discarded.length) >= 0.75) {
        document.getElementById('result').innerHTML = 'You did pretty well! Good job!';
    } else if ((score/discarded.length) >= 0.5) {
        document.getElementById('result').innerHTML = 'You got at least half of \'em! Good enough!';
    } else if ((score/discarded.length) != 0) {
        document.getElementById('result').innerHTML = 'You didn\'t do very well but you gave it a go. Keep trying!';
    } else {
        document.getElementById('result').innerHTML = '<span style="font-size: 100px">&#128019</span><br>Statistically, you should\'ve gotten at least <em>one</em> right. <br>Better luck next time.';
    }
    document.getElementById('score').innerHTML = 'You got '+score+' out of '+discarded.length;
}