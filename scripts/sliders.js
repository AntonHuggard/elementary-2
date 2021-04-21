var en_slider = document.getElementById("EN_slider");
var en_output = document.getElementById("EN_display");
en_output.innerHTML = en_slider.value;

const first_opacity = '100%';
const second_opacity = '60%';
const third_opacity = '40%';
const fourth_opacity = '25%';
const fifth_opacity = '20%';

function en_slider_function() {
    const true_value = document.getElementById("EN_slider").value / 100;
    en_output.innerHTML = true_value;
    elements.forEach(element => {
        const O1 = element.electronegativity - 1;
        const O2 = element.electronegativity + 1;
        const M1 = element.electronegativity - 0.5;
        const M2 = element.electronegativity + 0.5;
        const I1 = element.electronegativity - 0.25;
        const I2 = element.electronegativity + 0.25;

        if ((I1 < true_value) && (true_value < I2)) {
            let change_opacity = first_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
        else if ((M1 < true_value) && (true_value < M2)) {
            let change_opacity = second_opacity;
            document.getElementById(element.name).style.opacity = second_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        } 
        else if ((O1 < true_value) && (true_value < O2)) {
            let change_opacity = third_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
        else {
            let change_opacity = fifth_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
    });
}

var mp_slider = document.getElementById("MP_slider");
var mp_output = document.getElementById("MP_display");
mp_output.innerHTML = mp_slider.value  + " &#176;C";

function mp_slider_function() {
    const mp_input = document.getElementById("MP_slider").value;
    let display = '';
    if (units == 1) display = convert_temp(mp_input, 0) + " &#176;F";
    else if (units == 2) display = convert_temp(Number(mp_input), 0) + " K";
    else display = mp_input + " &#176;C";
    mp_output.innerHTML = display;
    elements.forEach(element => {
        const O1 = element.melting_point - 1000;
        const O2 = element.melting_point + 1000;
        const M1 = element.melting_point - 500;
        const M2 = element.melting_point + 500;
        const I1 = element.melting_point - 100;
        const I2 = element.melting_point + 100;

        if ((I1 < mp_input) && (mp_input < I2)) {
            let change_opacity = first_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
        else if ((M1 < mp_input) && (mp_input < M2)) {
            let change_opacity = second_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        } 
        else if ((O1 < mp_input) && (mp_input < O2)) {
            let change_opacity = third_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
        else {
            let change_opacity = fifth_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
    });
}

var bp_slider = document.getElementById("BP_slider");
var bp_output = document.getElementById("BP_display");
bp_output.innerHTML = bp_slider.value + " &#176;C";

function bp_slider_function() {
    const bp_input = document.getElementById("BP_slider").value;
    let display = '';
    if (units == 1) display = convert_temp(bp_input, 0) + " &#176;F";
    else if (units == 2) display = convert_temp(Number(bp_input), 0) + " K";
    else display = bp_input + " &#176;C";
    bp_output.innerHTML = display;
    elements.forEach(element => {
        const O1 = element.boiling_point - 1000;
        const O2 = element.boiling_point + 1000;
        const M1 = element.boiling_point - 500;
        const M2 = element.boiling_point + 500;
        const I1 = element.boiling_point - 100;
        const I2 = element.boiling_point + 100;

        if ((I1 < bp_input) && (bp_input < I2)) {
            let change_opacity = first_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
        else if ((M1 < bp_input) && (bp_input < M2)) {
            let change_opacity = second_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        } 
        else if ((O1 < bp_input) && (bp_input < O2)) {
            let change_opacity = third_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
        else {
            let change_opacity = fifth_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
    });
}

var ds_slider = document.getElementById("discovery_timeline");
var date_output = document.getElementById("date_display");
date_output.innerHTML = ds_slider.value;

function ds_slider_function() {
    const ds_input = document.getElementById("discovery_timeline").value;
    date_output.innerHTML = ds_input;
    elements.forEach(element => {
        if (element.discovery_date <= ds_input) {
            let change_opacity = first_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        } else {
            let change_opacity = fourth_opacity;
            document.getElementById(element.name).style.opacity = change_opacity;
            if (element.atomic_number < 57) document.getElementById(element.symbol).style.opacity = change_opacity;
        }
    });
}