// moved code from main.js -- divorcing flash card-specific code from the more general 
// question/test code for re-usability


let responded = false;
let can_continue = false;
let score = 0;



function exit() { window.location ='../'; }

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

