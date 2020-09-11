// Written by Anton Huggard
// Last edited 11th Sept, 2020 -- improved feedback; added lanthanides

// there's probably a less stupid way of doing this, but I don't have time right now.
function check_ans(series, question_number, response) {
    index = null;
    switch(series) {
        case 'actn':
            index = 0;
            break;
        case 'amtl':
            if (question_number == 6) { // special case for this special question (effiel tower)
                if (response != 2) {
                    return true;
                } else {
                    return false;
                }
            }
            index = 1;
            break;
        case 'aemt':
            index = 2;
            break;
        case 'hlgn':
            index = 3;
            break;
        case 'lnth':
            index = 4;
            break;
        case 'mtld':
            index = 5;
            break;
        case 'nmtl':
            index = 6;
            break;
    }
    if (index != null) {
        if (response == all_ans[index][question_number - 1]) {
            score++;
            return true;
        } else {
            return false;
        }
    }
}

const nmtl_ans = [2, 1, 3, 4, 4, 3, 1];
const actn_ans = [4, 3, 3, 1, 1, 2, 4, 1, 3, 2, 1, 3, 4, 2, 1];
const amtl_ans = [1, 4, 2, 4, 3, 'duh'];
const aemt_ans = [4, 3, 1, 2, 4, 3];
const lnth_ans = [3, 3, 4, 1, 2, 1, 1, 2, 4, 2, 3, 2, 1, 4, 1, 3, 1, 4, 1, 2];
const hlgn_ans = [1, 2, 3, 4, 4];
const mtld_ans = [1, 1, 3, 2, 2, 1, 1, 1, 4, 3, 4, 4, 1, 1, 2, 1, 2, 4, 3, 4]

// [2, 2, 4, 3, 1, 4, 3, 1, 4, 1, 2, 1, 1, 3, 2, 1, 4, 3, 1, 2]
// [2, 2, 4, 4, 1, 4, 1, 4, 4, 2, 1, 3, 4, 1, 4, 3, 4, 2, 3, 2]
// [2, 4, 1, 2, 1, 2, 3, 2, 1, 1, 1, 4, 1, 4, 3, 2, 1, 1, 3, 4]
// [2, 2, 2, 1, 1, 1, 2, 4, 3, 3, 4, 1, 2, 3, 3, 2, 3, 4, 3, 3]


all_ans = [actn_ans, amtl_ans, aemt_ans, hlgn_ans, lnth_ans, mtld_ans, nmtl_ans];