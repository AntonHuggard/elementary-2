const series = 'tmtl';

function start_test() {
    document.getElementById('question').innerHTML = 'what is the balanced chemical equation that describes KOH dissolving in solution?';

    const questions = document.getElementsByClassName('option');
    questions[0].innerHTML = 'KOH &rarr; K<sup>+</sup> + OH<sup>-</sup>';
    questions[1].innerHTML = 'KOH &rarr; KH<sup>+</sup> + O<sup>2-</sup>';
    questions[2].innerHTML = 'KOH &rarr; KO<sup>-</sup> + H<sup>+</sup>';
    questions[3].innerHTML = 'KOH + H<sub>2</sub>O &rarr; KH + O<sub>2</sub> + H<sub>2</sub>';

    let correct_ans = 0;
    let curr_question = 1;
}

function exit() { window.location ='/modules/'; }

function next() {
    alert('good job, moron');
}

function confirm() {
    if (can_continue) {
        document.getElementById('confirm').innerHTML = "confirm";
        responded = false;
        can_continue = false;
        next();
    }
    if (responded) {
        switch (curr_question) {
            case 1:
                const questions = document.getElementsByClassName('option');
                break;
        }
        if (false) {
            selected_option.classList.add("correct");
            score++;
        } else selected_option.classList.add("incorrect");
        document.getElementById('confirm').innerHTML = "next";
        can_continue = true;
    } 
}
