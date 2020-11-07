let curr_card_index, selected_option, responded = false;
let score = 0;
let discarded = [];
let unused = [];

function roll_dice(range, quantity, forbidden) {
    rolls = [];
    while (rolls.length < quantity) {
        let dice = Math.floor(Math.random() * range);
        if ((dice != forbidden) && !(rolls.includes(dice))) rolls.push(dice);
    }
    return rolls;
}

function draw(n) {

    if (window.screen.availWidth > 400) document.getElementById('bottom_text').innerHTML = 'question ' + (discarded.length +1);
    else alert('your screen is too small');
    // else document.getElementById('bottom_text').innerHTML = 'Q ' + (discarded.length +1) +'/'+ (series_arr.length);

    curr_card_index = n;
    const dom_qtn = document.getElementsByClassName('question')[0];
    const dom_img = document.getElementsByClassName('question_img')[0];

    switch (n) {
        case 0:
            dom_qtn.innerHTML = zeroth_card.question;
            dom_img.src = zeroth_card.image;
            break;
        case 1:
            dom_qtn.innerHTML = first_card.question;
            dom_img.src = first_card.image;
            break;
        case 2:
            dom_qtn.innerHTML = second_card.question;
            dom_img.src = second_card.image;
            break;
        case 3:
            dom_qtn.innerHTML = third_card.question;
            dom_img.src = third_card.image;
            break;
        case 4:
            dom_qtn.innerHTML = fourth_card.question;
            dom_img.src = fourth_card.image;
            break;
        case 5:
            dom_qtn.innerHTML = fifth_card.question;
            dom_img.src = fifth_card.image;
            break;
        case 6:
            dom_qtn.innerHTML = sixth_card.question;
            dom_img.src = sixth_card.image;
            break;
        case 7:
            dom_qtn.innerHTML = seventh_card.question;
            dom_img.src = seventh_card.image;
            break;
        case 8:
            dom_qtn.innerHTML = eighth_card.question;
            dom_img.src = eighth_card.image;
            break;
        case 9:
            dom_qtn.innerHTML = nineth_card.question;
            dom_img.src = nineth_card.image;
            break;
        case 10:
            dom_qtn.innerHTML = tenth_card.question;
            dom_img.src = tenth_card.image;
            break;
        case 11:
            dom_qtn.innerHTML = eleventh_card.question;
            dom_img.src = eleventh_card.image;
            break;
        case 12:
            dom_qtn.innerHTML = twelfth_card.question;
            dom_img.src = twelfth_card.image;
            break;
        case 13:
            dom_qtn.innerHTML = thirteenth_card.question;
            dom_img.src = thirteenth_card.image;
            break;
        case 14:
            dom_qtn.innerHTML = fourteenth_card.question;
            dom_img.src = fourteenth_card.image;
            break;
    }
    
    const selector = document.getElementById('qn_optns');
    const rand_elmts = roll_dice(series_arr.length, 3, n); 
    rand_elmts.splice(Math.floor(Math.random() * 4), 0, n); // inserts correct answer at a random index
    for (let i = 0; i < 4; i++) selector.children[i].innerHTML = series_arr[rand_elmts[i]];

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
    clear_selected();
    button.classList.add('selected-'+series);
    selected_option = button;
}

function confirm() {
    if (!responded) {
        if (series_arr[curr_card_index] == selected_option.innerHTML) {
            selected_option.classList.add("correct");
            score++;
        } else {
            selected_option.classList.add("incorrect");
        }
        the_button = document.getElementById('confirm');
        the_button.innerHTML = "next";
        responded = true;
    } else {
        the_button = document.getElementById('confirm');
        the_button.innerHTML = "confirm";
        responded = false;
        next();
    }
}

function next() {
    discarded.push(curr_card_index);
    // alert('discarded pile: '+discarded);
    for (var i = unused.length - 1; i >= 0; i--) {
        if (unused[i] === curr_card_index) unused.splice(i, 1);
    }
    // alert('unused pile: '+unused);
    clear_selected();

    if (unused.length != 0) { // quiz still going
        const next_card_index = unused[Math.floor(Math.random() * unused.length)];
        draw(next_card_index);
    } else { // end of quiz -- display results
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
}

// helper function for start() -- creates array [1,2,... # cards]
function populated_unused() {
    for (let i = 0; i < series_arr.length; i++) unused.push(i);
}

function start() {
    populated_unused();
    draw(0);
}

function exit() { window.location ='index.html'; }