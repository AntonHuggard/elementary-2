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
    }
}

const nmtl_ans = [2, 1, 3, 4, 4, 3, 1];
const actn_ans = [4, 3, 3, 1, 1, 2, 4, 1, 3, 2, 1, 3, 4, 2, 1];