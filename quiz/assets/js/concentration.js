const series = 'tmtl';

function start_test() {
    document.getElementById('question').innerHTML = 'what is the balanced chemical equation that describes KOH dissolving in solution?';

    const questions = document.getElementsByClassName('option');
    questions[0].innerHTML = 'KOH &rarr; K<sup>+</sup> + OH<sup>-</sup>';
    questions[1].innerHTML = 'KOH &rarr; KH<sup>+</sup> + O<sup>2-</sup>';
    questions[2].innerHTML = 'KOH &rarr; KO<sup>-</sup> + H<sup>+</sup>';
    questions[3].innerHTML = 'KOH + H<sub>2</sub>O &rarr; KH + O<sub>2</sub> + H<sub>2</sub>';
}

function exit() { window.location ='/modules/'; }