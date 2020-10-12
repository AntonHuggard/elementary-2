// Written by Antoninus Huggard I
// last edited 12 oct 2020
// this function takes an atomic number and returns electron configuration as a string
// used in modal.js

function do_config(n) {
    let orig = n;
    let config = '';

    if (n <= 2 && n > 0) {
        config = config + '1s' + n + ' ';
        n = 0;
    }
    else if (n <= 10) { // He
        n = n - 2;
        config = '[He] ';
        if (n < 2 && n > 0) {
            config = config + '2s' + n + ' ';
            n = 0;
        }
        else if (n >= 2) {
            config = config + '2s2 ';
            n = n - 2;
        }
        if (n < 6 && n > 0) {
            config = config + '2p' + n + ' ';
            n = 0;
        }
        else if (n >= 6) {
            config = config + '2p6 ';
            n = n - 6;
        }
        if (n < 2 && n > 0) {
            config = config + '3s' + n + ' ';
            n = 0;
        }
        else if (n >= 2) {
            config = config + '3s2 ';
            n = n - 2;
        }
    }
    else if (n <= 18) {// Ne
        n = n - 10;
        config = '[Ne] ';
        if (n < 2 && n > 0) {
            config = config + '3s' + n + ' ';
            n = 0;
        }
        else if (n >= 2) {
            config = config + '3s2 ';
            n = n - 2;
        }
        if (n < 6 && n > 0) {
            config = config + '3p' + n + ' ';
            n = 0;
        }
        else if (n >= 6) {
            config = config + '3p6 ';
            n = n - 6;
        }
    }
    else if (n <= 36)  {// Ar
        n = n - 18;
        config = '[Ar] ';
        if (n < 2 && n > 0) {
            config = config + '4s' + n + ' ';
            n = 0;
        }
        else if (n >= 2) {
            config = config + '4s2 ';
            n = n - 2;
        }
        if (n < 10 && n > 0) {
            config = config + '3d' + n + ' ';
            n = 0;
        }
        else if (n >= 10) {
            config = config + '3d10 ';
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            config = config + '4p' + n + ' ';
            n = 0;
        }
        else if (n >= 6) {
            config = config + '4p6 ';
            n = n - 6;
        }
    }
    else if (n <= 54) {// Kr
        n = n - 36;
        config = '[Kr] ';
        if (n < 2 && n > 0) {
            config = config + '5s' + n + ' ';
            n = 0;
        }
        else if (n >= 2) {
            config = config + '5s2 ';
            n = n - 2;
        }
        if (n < 10 && n > 0) {
            config = config + '4d' + n + ' ';
            n = 0;
        }
        else if (n >= 10) {
            config = config + '4d10 ';
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            config = config + '5p' + n + ' ';
            n = 0;
        }
        else if (n >= 6) {
            config = config + '5p6 ';
            n = n - 6;
        }
    }
    else if (n <= 86) {// Xe
        n = n - 54;
        config = '[Xe] ';
        if (n < 2 && n > 0) {
            config = config + '6s' + n + ' ';
            n = 0;
        }
        else if (n >= 2) {
            config = config + '6s2 ';
            n = n - 2;
        }
        if (n < 14 && n > 0) {
            config = config + '4f' + n + ' ';
            n = 0;
        }
        else if (n >= 14) {
            config = config + '4f14 ';
            n = n - 14;
        }
        if (n < 10 && n > 0) {
            config = config + '5d' + n + ' ';
            n = 0;
        }
        else if (n >= 10) {
            config = config + '5d10 ';
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            config = config + '6p' + n + ' ';
            n = 0;
        }
        else if (n >= 6) {
            config = config + '6p6 ';
            n = n - 6;
        }
    }
    else { // Rn
        n = n - 86;
        config = '[Rn] ';
        if (n < 2 && n > 0) {
            config = config + '7s' + n + ' ';
            n = 0;
        }
        else if (n >= 2) {
            config = config + '7s2 ';
            n = n - 2;
        }
        if (n < 14 && n > 0) {
            config = config + '5f' + n + ' ';
            n = 0;
        }
        else if (n >= 14) {
            config = config + '5f14 ';
            n = n - 14;
        }
        if (n < 10 && n > 0) {
            config = config + '6d' + n + ' ';
            n = 0;
        }
        else if (n >= 10) {
            config = config + '6d10 ';
            n = n - 10;
        }
        if (n < 6 && n > 0) {
            config = config + '7p' + n + ' ';
            n = 0;
        }
        else if (n >= 6) {
            config = config + '7p6 ';
            n = n - 6;
        }
    }
    // special cases
    switch(orig) {
        case 24:
            config = '[Ar] 3d5 4s1';
            break;
        case 29:
            config = '[Ar] 3d10 4s1';
            break;
        case 41:
            config = '[Kr] 4d4 5s1';
            break;
        case 42:
            config = '[Kr] 4d5 5s1';
            break;
        case 44:
            config = '[Kr] 4d7 5s1';
            break;
        case 45:
            config = '[Kr] 4d8 5s1';
            break;
        case 46:
            config = '[Kr] 4d10';
            break;
        case 47:
            config = '[Kr] 4d10 5s1';
            break;
        case 57:
            config = '[Xe] 5d1 6s2';
            break;
        case 58:
            config = '[Xe] 4f1 5d1 6s2';
            break;
        case 64:
            config = '[Xe] 4f7 5d1 6s2';
            break;
        case 78:
            config = '[Xe] 4f14 5d9 6s1';
            break;
        case 79:
            config = '[Xe] 4f14 5d10 6s1';
            break;
        case 89:
            config = '[Rn] 6d1 7s2';
            break;
        case 90:
            config = '[Rn] 6d2 7s2';
            break;
        case 91:
            config = '[Rn] 5f2 6d1 7s2';
            break;
        case 92:
            config = '[Rn] 5f3 6d1 7s2';
            break;
        case 93:
            config = '[Rn] 5f4 6d1 7s2';
            break;
        case 96:
            config = '[Rn] 5f7 6d1 7s2';
            break;
        case 103:
            config = '[Rn] 5f14 7s2 7p1';
            break;
        
    }
    return config;
}