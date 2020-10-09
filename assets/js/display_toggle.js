// Written by Anton Huggard
// Last edited 10th Oct, 2020 -- adapted to JSON design to fix mobile mug

// This function toggles element opacity based on the user-selected property
// The user controls this using the buttons at the bottom of the webpage
// Or, the 'filter' dropdpwn options on big screens.

function display_type(new_display) {
    if (new_display == prv_display) {
        prv_display = 'all';
        reset_opacity();
    } else {
        prv_display = new_display;
        elements.forEach(element => {
            document.getElementById(element.name).style.opacity = low_opacity_value;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = low_opacity_value;
        });
        switch (new_display) {
            case 's_blk':
                elements.forEach(element => {
                    if (element.block == 's') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'p_blk':
                elements.forEach(element => {
                    if (element.block == 'p') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'd_blk':
                elements.forEach(element => {
                    if (element.block == 'd') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'f_blk':
                elements.forEach(element => {
                    if (element.block == 'f') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'ractv':
                elements.forEach(element => {
                    if (element.radioactive) {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'solid':
                elements.forEach(element => {
                    if (element.state_at_standard_conditions == 'solid') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'liqud':
                elements.forEach(element => {
                    if (element.state_at_standard_conditions == 'liquid') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'gasus':
                elements.forEach(element => {
                    if (element.state_at_standard_conditions == 'gas') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            
            case 'metal':
                elements.forEach(element => {
                    if (element.metalness == 'metal') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'mtlld':
                elements.forEach(element => {
                    if (element.metalness == 'metalloid') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'nnmtl':
                elements.forEach(element => {
                    if (element.metalness == 'nonmetal') {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
            case 'synth':
                elements.forEach(element => {
                    if (element.atomic_number > 94) {
                        document.getElementById(element.name).style.opacity = '100%';
                        if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = '100%';
                    }
                });
                break;
        }
    }
}