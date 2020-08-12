var en_slider = document.getElementById("EN_slider");
var en_output = document.getElementById("EN_display");
en_output.innerHTML = en_slider.value;

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
            document.getElementById(element.name).style.opacity = "100%";
        }
        else if ((M1 < true_value) && (true_value < M2)) {
            document.getElementById(element.name).style.opacity = "60%";
        } 
        else if ((O1 < true_value) && (true_value < O2)) {
            document.getElementById(element.name).style.opacity = "40%";
        }
        else {
            document.getElementById(element.name).style.opacity = "20%";
        }
    });
}

var mp_slider = document.getElementById("MP_slider");
var mp_output = document.getElementById("MP_display");
mp_output.innerHTML = mp_slider.value  + " &#176;C";

function mp_slider_function() {
    const mp_input = document.getElementById("MP_slider").value;
    mp_output.innerHTML = mp_input + " &#176;C";
    elements.forEach(element => {
        const O1 = element.melting_point - 1000;
        const O2 = element.melting_point + 1000;
        const M1 = element.melting_point - 500;
        const M2 = element.melting_point + 500;
        const I1 = element.melting_point - 100;
        const I2 = element.melting_point + 100;

        if ((I1 < mp_input) && (mp_input < I2)) {
            document.getElementById(element.name).style.opacity = "100%";
        }
        else if ((M1 < mp_input) && (mp_input < M2)) {
            document.getElementById(element.name).style.opacity = "60%";
        } 
        else if ((O1 < mp_input) && (mp_input < O2)) {
            document.getElementById(element.name).style.opacity = "40%";
        }
        else {
            document.getElementById(element.name).style.opacity = "20%";
        }
    });
}

var bp_slider = document.getElementById("BP_slider");
var bp_output = document.getElementById("BP_display");
bp_output.innerHTML = bp_slider.value + " &#176;C";

function bp_slider_function() {
    const bp_input = document.getElementById("BP_slider").value;
    bp_output.innerHTML = bp_input  + " &#176;C";
    elements.forEach(element => {
        const O1 = element.boiling_point - 1000;
        const O2 = element.boiling_point + 1000;
        const M1 = element.boiling_point - 500;
        const M2 = element.boiling_point + 500;
        const I1 = element.boiling_point - 100;
        const I2 = element.boiling_point + 100;

        if ((I1 < bp_input) && (bp_input < I2)) {
            document.getElementById(element.name).style.opacity = "100%";
        }
        else if ((M1 < bp_input) && (bp_input < M2)) {
            document.getElementById(element.name).style.opacity = "60%";
        } 
        else if ((O1 < bp_input) && (bp_input < O2)) {
            document.getElementById(element.name).style.opacity = "40%";
        }
        else {
            document.getElementById(element.name).style.opacity = "20%";
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
            document.getElementById(element.name).style.opacity = "100%";
        } else {
            document.getElementById(element.name).style.opacity = "25%";
        }
    });
}