let r1, r2, r3, curr_question, curr_response = 0;

function set_curr_qn(q) {
    curr_question = q;
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
    }
}

function confirm() {
    switch(curr_response) {
        case 1:
            if (r1 == 2) {
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 2:
            if (r2 == 1) {
                alert('correct');                
            } else {
                alert('incorrect answer');
            }
            break;
        case 3:
            if (r3 == 3) {
                alert('correct');                
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
    
    document.getElementById('q1').style.display='none';
    document.getElementById('q2').style.display='none';
    document.getElementById('q3').style.display='none';
    document.getElementById('q4').style.display='none';
    document.getElementById('q5').style.display='none';
    
    document.getElementById('q'+curr_question).style.display='block';
    
}