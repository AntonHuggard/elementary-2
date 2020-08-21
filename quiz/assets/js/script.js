let r1, r2, r3, r4, r5, r6, r7, curr_question, curr_response, score = 0;
const total_number_of_questions = 7;

function set_curr_qn(q) {
    curr_question = q;
    document.getElementById('bottom_text').innerHTML = 'question ' + q;
}

function select(question_number, response, btn, locn) {
    curr_response = question_number;
    const responses = document.getElementById(locn).getElementsByTagName('button');

    for (i = 0; i < responses.length; i++) {
        if (!(responses[i].classList.contains('selected')) && (responses[i] === btn)) {
            btn.classList.add('selected');
        } else {
            responses[i].classList.remove('selected');
        }        
    }   
    
    switch(question_number) {
        case 1:
            r1 = response;
            break;
        case 2:
            r2 = response;
            break;
        case 3:
            r3 = response;
            break;
        case 4:
            r4 = response;
            break;
        case 5:
            r5 = response;
            break;
        case 6:
            r6 = response;
            break;
        case 7:
            r7 = response;
            break;
    }
}

function confirm() {
    switch(curr_response) {
        case 1:
            if (r1 == 2) {
                score++;
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 2:
            if (r2 == 1) {
                score++;
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 3:
            if (r3 == 3) {
                score++;
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 4:
            if (r4 == 4) { 
                score++;
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 5:
            if (r5 == 4) { 
                score++;
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 6:
            if (r6 == 3) { 
                score++;
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 7:
            if (r7 == 1) { 
                score++;
                alert('correct, your score is ' + score);                
            } else {
                alert('incorrect answer');
            }
            break;
    }
    next();
}

function pass() { next(); }

function next() {
    curr_question = curr_question + 1;
    document.getElementById('bottom_text').innerHTML = 'question ' + curr_question;
    
    document.getElementById('q1').style.display='none';
    document.getElementById('q2').style.display='none';
    document.getElementById('q3').style.display='none';
    document.getElementById('q4').style.display='none';
    document.getElementById('q5').style.display='none';
    document.getElementById('q6').style.display='none';
    document.getElementById('q7').style.display='none';

    if (curr_question <= total_number_of_questions) {
        document.getElementById('q'+curr_question).style.display='block';
    } else {
        document.getElementById('results_page').style.display='block';
        document.getElementById('bottom_text').innerHTML = 'results';
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