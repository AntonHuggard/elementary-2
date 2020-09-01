// Written by Anton Huggard
// Last edited 25th Aug, 2020 -- this was created.

function check_ans(series, question_number, response) {
    switch(series) {
        case 'nmtl':
            if (response == nmtl_ans[question_number - 1]) {
                score++;
                alert('correct - your current score is ' + score);
            } else {
                alert(response + ' is incorrect');
            }
            break;
        case 'actn':
            if (response == actn_ans[question_number - 1]) {
                score++;
                alert('correct - your current score is ' + score);
            } else {
                alert(response + ' is incorrect');
            }
            break;
        case 'amtl':
            if (question_number == 6) {
                if (response != 2) {
                    score++;
                    alert('correct - your current score is ' + score);
                } else {
                    alert(response + ' is incorrect');
                }
                // alert('this was testing qn 6');
            } else if (response == amtl_ans[question_number - 1]) {
                score++;
                alert('correct - your current score is ' + score);
            } else {
                alert(response + ' is incorrect');
            }
            break;
        case 'aemt':
            if (response == aemt_ans[question_number - 1]) {
                score++;
                alert('correct - your current score is ' + score);
            } else {
                alert(response + ' is incorrect');
            }
            break;
        case 'hlgn':
            if (response == hlgn_ans[question_number - 1]) {
                score++;
                alert('correct - your current score is ' + score);
            } else {
                alert(response + ' is incorrect');
            }
            break;
    }
}

const nmtl_ans = [2, 1, 3, 4, 4, 3, 1];
const actn_ans = [4, 3, 3, 1, 1, 2, 4, 1, 3, 2, 1, 3, 4, 2, 1];
const amtl_ans = [1, 4, 2, 4, 3, 'duh'];
const aemt_ans = [4, 3, 1, 2, 4, 3];
const hlgn_ans = [1, 2, 3, 4, 4];