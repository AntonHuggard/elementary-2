// Written by Antoninus Huggard I
// last edited 15 Oct 2020
// this function takes an atomic number and returns electron configuration as a string
// used in modal.js

// this is a helper fn for stringify -- it subtracts the electrons from the most recent noble gas and returns the result as html 
function get_html_string(full_arr, filter_arr) {
    let html = '';
    full_arr.filter(e => {
        if (!(filter_arr.includes(e) )) {
            let e_arr = e.split('');
            if (typeof e_arr[3] != 'undefined') html = html + ' ' + e_arr[0]+e_arr[1]+'<sup>'+e_arr[2]+e_arr[3]+'</sup>';
            else if (typeof e_arr[2] != 'undefined') html = html + ' ' + e_arr[0]+e_arr[1]+'<sup>'+e_arr[2]+'</sup>';
        };
    });
    return html;
}

// turns a string of full electron configuration into abbreviated html (for the modal)
function stringify(long_config, atomic_number) {
    const to_arr = long_config.split(' ');
    if (atomic_number <= 2)  return get_html_string(to_arr, []);
    if (atomic_number <= 10) return '[He] ' + get_html_string(to_arr, ['1s2']); 
    if (atomic_number <= 18) return '[Ne] ' + get_html_string(to_arr, ['1s2', '2s2', '2p6']); 
    if (atomic_number <= 36) return '[Ar] ' + get_html_string(to_arr, ['1s2', '2s2', '2p6', '3s2', '3p6']);
    if (atomic_number <= 54) return '[Kr] ' + get_html_string(to_arr, ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6']);
    if (atomic_number <= 86) return '[Xe] ' + get_html_string(to_arr, ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '5s2', '4d10', '5p6']);
    else {
        const jacques_custeau = ['1s2', '2s2', '2p6', '3s2', '3p6', '3d10', '4s2', '4p6', '4d10', '4f14', '5s2', '5p6', '5d10', '6s2', '6p6'];
        return '[Rn] ' + get_html_string(to_arr, jacques_custeau);
    }
}

// helper function for read_e_confgn() -- fills up to last noble gas
function fill_her_up(noble_gas) {
    switch (noble_gas) {
        case 1:
            return [[2], [], [], [], [], [], []];
            break;
        case 2:
            return [[2], [2, 6], [], [], [], [], []];
            break;
        case 3:
            return [[2], [2, 6], [2, 6], [], [], [], []];
            break;
        case 4:
            return [[2], [2, 6], [2, 6, 10], [2, 6], [], [], []];
            break;
        case 5:
            return [[2], [2, 6], [2, 6, 10], [2, 6, 10], [2, 6], [], []];
            break;
        case 6:
            return [[2], [2, 6], [2, 6, 10], [2, 6, 10, 14], [2, 6, 10], [2, 6], []];
            break;
    }
}

// thingy is a nested list of numbers [[2],[2,6],[2,6,10], ...
function read_e_confgn(thingy) {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < thingy[i].length; j++) {
            if (thingy[i][j] != '' && thingy[i][j] != 0) {
                result = result + (i + 1);
                switch (j) {
                    case 0:
                        result= result + 's';
                        break;
                    case 1:
                        result= result + 'p';
                        break;
                    case 2:
                        result= result + 'd';
                        break;
                    case 3:
                        result= result + 'f';
                }
                result= result + thingy[i][j]+ ' ';
            }
        }
    }
    return result;
}

function do_config(n) {
    let orig = n;
    let e_confgn = [[], [], [], [], [], [], []];

    if (n == 1) return '1s1';
    if (n == 2) return '1s2';
    else if (n <= 10) { // He
        n = n - 2;
        e_confgn = fill_her_up(1);
        if (n < 2 && n > 0) {
            e_confgn[1].push(n);
            n = 0;
        }
        else if (n >= 2) {
            e_confgn[1].push(2);
            n = n - 2;
        }
        if (n < 6 && n > 0) {
            e_confgn[1].push(n);
            n = 0;
        }
        else if (n >= 6) {
            e_confgn[1].push(6);
            n = n - 6;
        }
    }
    else if (n <= 18) {// Ne
        n = n - 10;
        e_confgn = fill_her_up(2);
        if (n < 2 && n > 0) {
            e_confgn[2].push(n);
            n = 0;
        }
        else if (n >= 2) {
            e_confgn[2].push(2);
            n = n - 2;
        }
        if (n < 6 && n > 0) {
            e_confgn[2].push(n);
            n = 0;
        }
        else if (n >= 6) {
            e_confgn[2].push(6);
            n = n - 6;
        }
    }
    else if (n <= 36)  {// Ar
        n = n - 18;
        e_confgn = fill_her_up(3);
        if (n < 2 && n > 0) {
            e_confgn[3].push(n);
            n = 0;
        }
        else if (n >= 2) {
            e_confgn[3].push(2);
            n = n - 2;
        }
        if (n < 10 && n > 0) {
            e_confgn[2].push(n);
            n = 0;
        }
        else if (n >= 10) {
            e_confgn[2].push(10);
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            e_confgn[3].push(n);
            n = 0;
        }
        else if (n >= 6) {
            e_confgn[3].push(6);
            n = n - 6;
        }
    }
    else if (n <= 54) {// Kr
        n = n - 36;
        e_confgn = fill_her_up(4);
        if (n < 2 && n > 0) {
            e_confgn[4].push(n);
            n = 0;
        }
        else if (n >= 2) {
            e_confgn[4].push(2);
            n = n - 2;
        }
        if (n < 10 && n > 0) {
            e_confgn[3].push(n);
            n = 0;
        }
        else if (n >= 10) {
            e_confgn[3].push(10);
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            e_confgn[4].push(n);
            n = 0;
        }
        else if (n >= 6) {
            e_confgn[4].push(6);
            n = n - 6;
        }
    }
    else if (n <= 86) {// Xe
        n = n - 54;
        e_confgn = fill_her_up(5);
        if (n < 2 && n > 0) {
            e_confgn[5].push(n);
            n = 0;
        }
        else if (n >= 2) {
            e_confgn[5].push(2);
            n = n - 2;
        }
        if (n < 14 && n > 0) {
            e_confgn[3].push(n);
            n = 0;
        }
        else if (n >= 14) {
            e_confgn[3].push(14);
            n = n - 14;
        }
        if (n < 10 && n > 0) {
            e_confgn[4].push(n);
            n = 0;
        }
        else if (n >= 10) {
            e_confgn[4].push(10);
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            e_confgn[5].push(n);
            n = 0;
        }
        else if (n >= 6) {
            e_confgn[5].push(6);
            n = n - 6;
        }
    }
    else { // Rn
        n = n - 86;
        e_confgn = fill_her_up(6);
        if (n < 2 && n > 0) {
            e_confgn[6].push(n);
            n = 0;
        }
        else if (n >= 2) {
            e_confgn[6].push(2);
            n = n - 2;
        }
        if (n < 14 && n > 0) {
            e_confgn[4].push(n);
            n = 0;
        }
        else if (n >= 14) {
            e_confgn[4].push(14);
            n = n - 14;
        }
        if (n < 10 && n > 0) {
            e_confgn[5].push(n);
            n = 0;
        }
        else if (n >= 10) {
            e_confgn[5].push(10);
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            e_confgn[6].push(n);
            n = 0;
        }
        else if (n >= 6) {
            e_confgn[6].push(6);
            n = n - 6;
        }
    }
    // special cases
    switch(orig) {
        case 24:
            e_confgn = fill_her_up(3);
            e_confgn[2][2] = 5;
            e_confgn[3][0] = 1;
            break;
        case 29:
            e_confgn = fill_her_up(3);
            e_confgn[2][2] = 10;
            e_confgn[3][0] = 1;
            break;
        case 41:
            e_confgn = fill_her_up(4);
            e_confgn[3][2] = 4;
            e_confgn[4][0] = 1;
            break;
        case 42:
            e_confgn = fill_her_up(4);
            e_confgn[3][2] = 5;
            e_confgn[4][0] = 1;
            break;
        case 44:
            e_confgn = fill_her_up(4);
            e_confgn[3][2] = 7;
            e_confgn[4][0] = 1;
            break;
        case 45:
            e_confgn = fill_her_up(4);
            e_confgn[3][2] = 8;
            e_confgn[4][0] = 1;
            break;
        case 46:
            e_confgn = fill_her_up(4);
            e_confgn[3][2] = 10;
            e_confgn[4].pop();
            break;
        case 47:
            e_confgn = fill_her_up(4);
            e_confgn[3][2] = 10;
            e_confgn[4][0] = 1;
            break;
        case 57:
            e_confgn = fill_her_up(5);
            e_confgn[4][2] = 1;
            e_confgn[5][0] = 2;
            break;
        case 58:
            e_confgn = fill_her_up(5);
            e_confgn[3][3] = 1;
            e_confgn[4][2] = 1;
            e_confgn[5][0] = 2;
            break;
        case 64:
            e_confgn = fill_her_up(5);
            e_confgn[3][3] = 7;
            e_confgn[4][2] = 1;
            e_confgn[5][0] = 2;
            break;
        case 78:
            e_confgn = fill_her_up(5);
            e_confgn[3][3] = 14;
            e_confgn[4][2] = 9;
            e_confgn[5][0] = 1;
            break;
        case 79:
            e_confgn = fill_her_up(5);
            e_confgn[3][3] = 14;
            e_confgn[4][2] = 10;
            e_confgn[5][0] = 1;
            break;
        case 89:
            e_confgn = fill_her_up(6);
            e_confgn[5][2] = 1;
            e_confgn[6][0] = 2;
            break;
        case 90:
            e_confgn = fill_her_up(6);
            e_confgn[5][2] = 2;
            e_confgn[6][0] = 2;
            break;
        case 91:
            e_confgn = fill_her_up(6);
            e_confgn[4][3] = 2;
            e_confgn[5][2] = 1;
            e_confgn[6][0] = 2;
            break;
        case 92:
            e_confgn = fill_her_up(6);
            e_confgn[4][3] = 3;
            e_confgn[5][2] = 1;
            e_confgn[6][0] = 2;
            break;
        case 93:
            e_confgn = fill_her_up(6);
            e_confgn[4][3] = 4;
            e_confgn[5][2] = 1;
            e_confgn[6][0] = 2;
            break;
        case 96:
            e_confgn = fill_her_up(6);
            e_confgn[4][3] = 7;
            e_confgn[5][2] = 1;
            e_confgn[6][0] = 2;
            break;
        case 103:
            e_confgn = fill_her_up(6);
            e_confgn[4][3] = 14;
            e_confgn[6][0] = 2;
            e_confgn[6][1] = 1;
            break;
        
    }
    return e_confgn;
}

function config_master(n) {
    const results = do_config(n);
    let full_string = results;
    if (n > 2) full_string = read_e_confgn(results);
    const modal_html = stringify(full_string, n);
    return modal_html;
}