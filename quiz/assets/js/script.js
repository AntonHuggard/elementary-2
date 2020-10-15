let r1, r2, r3, r4, r5, r6, r7, curr_question, curr_response, total_number_of_questions, series, score = 0;

function exit() {
    window.location = 'index.html'
}

function page_setup(n, s) {
    series = s;
    curr_question = 1;
    if (window.screen.availWidth > 400) document.getElementById('bottom_text').innerHTML = 'question ' + 1;
    else document.getElementById('bottom_text').innerHTML = 'Q ' + 1 +'/'+n;
    total_number_of_questions = n;
}

function select(question_number, response, btn, locn) {
    curr_response = response;
    curr_question = question_number;

    // this shows which option the user has selected by changing the background colour
    const responses = document.getElementById(locn).getElementsByTagName('button');
    for (i = 0; i < responses.length; i++) {
        if (!(responses[i].classList.contains('selected-'+series)) && (responses[i] === btn)) {
            btn.classList.add('selected-'+series);
        } else {
            responses[i].classList.remove('selected-'+series);
        }        
    }   
}



answered = false;
is_correct = null;

function confirm() {
    if (!answered) {
        is_correct = check_ans(series, curr_question, curr_response);
        response = document.getElementsByClassName('selected-'+series);
        if (is_correct) {
            response[0].classList.add("correct");
            response[0].innerHTML = "correct";
        } else {
            response[0].classList.add("incorrect");
            response[0].innerHTML = "incorrect";
        }
        answered = true;
        the_button = document.getElementById('confirm');
        the_button.innerHTML = "next";
    } else {
        the_button = document.getElementById('confirm');
        the_button.innerHTML = "confirm";
        response[0].classList.remove('selected-'+series);
        if (is_correct) document.getElementsByClassName('correct')[0].classList.remove('correct');
        if (!is_correct) document.getElementsByClassName('incorrect')[0].classList.remove('incorrect');
        answered = false;
        next();
    }
}

function pass() { next(); }

function next() {
    curr_question = curr_question + 1;
    if (window.screen.availWidth > 400) document.getElementById('bottom_text').innerHTML = 'question ' + curr_question;
    else document.getElementById('bottom_text').innerHTML = 'Q ' + curr_question +'/'+total_number_of_questions;

    for (i = 1; i <= total_number_of_questions; i++) { // hide all the questions
        document.getElementById('q'+i).style.display = 'none';
    }

    if (curr_question <= total_number_of_questions) {
        document.getElementById('q'+curr_question).style.display='block';
    } else {
        document.getElementById('results_page').style.display='block';
        document.getElementById('bottom_text').innerHTML = 'results';
        document.getElementById('pass').style.display = 'none';
        document.getElementById('confirm').style.display = 'none';
        if ((score/total_number_of_questions) == 1) {
            document.getElementById('result').innerHTML = '<span style="font-size: 100px">&#127942;</span><br>Congratulations! You got every question right!';
        } else if ((score/total_number_of_questions) >= 0.75) {
            document.getElementById('result').innerHTML = 'You did pretty well! Good job!';
        } else if ((score/total_number_of_questions) >= 0.5) {
            document.getElementById('result').innerHTML = 'You got at least half of \'em! Good enough!';
        } else if ((score/total_number_of_questions) != 0) {
            document.getElementById('result').innerHTML = 'You didn\'t do very well but you gave it a go. Keep trying!';
        } else {
            document.getElementById('result').innerHTML = '<span style="font-size: 100px">&#128019</span><br>Statistically, you should\'ve gotten at least <em>one</em> right. <br>Better luck next time.';
        }
        document.getElementById('score').innerHTML = 'You got '+score+' out of '+total_number_of_questions;
    }
}

function go_away() {
    window.location ="index.html";
}