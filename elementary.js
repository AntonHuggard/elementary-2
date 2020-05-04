const alkali_metals_colour = "rgb(223, 0, 0)";
const alkaline_earth_metals_clour = "rgb(219, 66, 6)";
const metaux_pauvres_colour = "rgb(5, 148, 5)";
const metalloid_colour = "rgb(0, 179, 90)";
const nonmetal_colour = "#7c4cdb";
const lanthanoid_colour = "#5900b3";
const actinoid_colour = "#000099";
const noble_gas_colour = "rgb(99, 0, 124)";
const unknown_colour = "rgb(34, 34, 34)";
const transition_metal_colour = "rgb(143, 132, 37)";


function search() {
    const query = document.getElementById("element_io").value.toUpperCase();
    var html_elements = document.getElementsByClassName("element");

    for (var i = 0; i < html_elements.length; i++) {
        html_elements[i].style.opacity = "25%";
    }

    if (Number.isInteger(parseInt(query))) { // if user enters a number, search through elements to find one with matching atomic number
        const user_number = parseInt(query);
        elements.forEach(element => {
            if (user_number == element.atomic_number) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.length < 3) { // searching by chemical symbol
        for (var i = 0; i < html_elements.length; i++) {
            chemical_symbol = html_elements[i].innerText.toUpperCase().toString();
            if (chemical_symbol.includes(query)) {
                html_elements[i].style.opacity = "100%";
            }
        }
    } else if (query == "GAS") {
        elements.forEach(element => {
            if (element.state_at_standard_conditions == 'gas') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "LIQUID") {
        elements.forEach(element => {
            if (element.state_at_standard_conditions == 'liquid') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "SOLID") {
        elements.forEach(element => {
            if (element.state_at_standard_conditions == 'solid') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "METAL") {
        elements.forEach(element => {
            if (element.metalness == 'metal') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "METALLOID") {
        elements.forEach(element => {
            if (element.metalness == 'metalloid') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "NONMETAL") {
        elements.forEach(element => {
            if (element.metalness == 'metal') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else {
        elements.forEach(element => {
            const this_guys_name = element.name.toUpperCase();
            if (this_guys_name.includes(query)) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    }
    
}

function show_accordian() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[search_type].classList.toggle("active");
        // toggle search type panel 
        var panel = document.getElementsByClassName("panel");
        if (panel[0].style.display === "block") {
            panel[0].style.display = "none";
        } else {
            panel[0].style.display = "block";
        }
        
    }
}

var search_type = 0;

function set_search(n, mobile_view) {
    document.getElementById("acc_dt").style.display = "none";
    document.getElementById("acc_EN").style.display = "none";
    document.getElementById("acc_MP").style.display = "none";
    document.getElementById("acc_BP").style.display = "none";
    document.getElementById("acc_ds").style.display = "none";
    document.getElementById("electronegativity_div").style.display = "none";
    document.getElementById("melting_pt_div").style.display = "none";
    document.getElementById("boiling_pt_div").style.display = "none";
    document.getElementById("discovery_div").style.display = "none";

    if (mobile_view) {
        var acc = document.getElementsByClassName("accordion");
        acc[search_type].classList.toggle("active");
        switch(n) {
            case 0:
                document.getElementById("acc_dt").classList.toggle("active");
                break;
            case 1:
                document.getElementById("acc_EN").classList.toggle("active");
                break;
            case 2:
                document.getElementById("acc_MP").classList.toggle("active");
                break;
            case 3:
                document.getElementById("acc_BP").classList.toggle("active");
                break;
            case 4:
                document.getElementById("acc_ds").classList.toggle("active");
                break;
        }
    } else {
        document.getElementById("EN_btn").style.backgroundColor = "transparent";
        document.getElementById("EN_btn").style.color = "white";
        document.getElementById("MP_btn").style.backgroundColor = "transparent";
        document.getElementById("MP_btn").style.color = "white";
        document.getElementById("BP_btn").style.backgroundColor = "transparent";
        document.getElementById("BP_btn").style.color = "white";
        document.getElementById("DS_btn").style.backgroundColor = "transparent";
        document.getElementById("DS_btn").style.color = "white";
        switch(n) {
            case 1:
                if (search_type != 1) {
                    document.getElementById("EN_btn").style.backgroundColor = "white";
                    document.getElementById("EN_btn").style.color = "black";
                }
                break;
            case 2:
                if (search_type != 2) {
                    document.getElementById("MP_btn").style.backgroundColor = "white";
                    document.getElementById("MP_btn").style.color = "black";
                }
                break;
            case 3:
                if (search_type != 3) {
                    document.getElementById("BP_btn").style.backgroundColor = "white";
                    document.getElementById("BP_btn").style.color = "black";
                }
                break;
            case 4:
                if (search_type != 4) {
                    document.getElementById("DS_btn").style.backgroundColor = "white";
                    document.getElementById("DS_btn").style.color = "black";
                }
                break;
        }
        
    }      
    
    switch (n) {
        case 0:
            document.getElementById("acc_dt").style.display = "block";                
            document.getElementById("element_search_container").style.display = "grid";
            search_type = 0;
            break;
        case 1:
            if (search_type != n) {
                document.getElementById("acc_EN").style.display = "block";
                document.getElementById("electronegativity_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
                search_type = 1;
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("acc_dt").classList.toggle("active");
                document.getElementById("element_search_container").style.display = "grid";
                search_type = 0;
            }
            break;
        case 2:
            if (search_type != n) {
                search_type = 2;
                document.getElementById("acc_MP").style.display = "block";
                document.getElementById("melting_pt_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("element_search_container").style.display = "grid";
                search_type = 0;
            }
            break;
        case 3:
            if (search_type != n) {
                search_type = 3;
                document.getElementById("acc_BP").style.display = "block";
                document.getElementById("acc_BP").classList.toggle("active");
                document.getElementById("boiling_pt_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("acc_dt").classList.toggle("active");
                document.getElementById("element_search_container").style.display = "grid";
                search_type = 0;
            }
            break;
        case 4:
            if (search_type != n) {
                search_type = 4;
                document.getElementById("acc_ds").style.display = "block";
                document.getElementById("discovery_div").style.display = "block";
                document.getElementById("element_search_container").style.display = "none";
            } else {
                document.getElementById("acc_dt").style.display = "block";
                document.getElementById("acc_dt").classList.toggle("active");
                document.getElementById("element_search_container").style.display = "grid";
                search_type = 0;
            }
            break;
    }
}    

var en_slider = document.getElementById("EN_slider");
var en_output = document.getElementById("EN_display");
en_output.innerHTML = en_slider.value;

en_slider.oninput = function() {
    const true_value = this.value / 100;
    en_output.innerHTML = (true_value);
    elements.forEach(element => {
        if (element.electronegativity <= true_value) {
            document.getElementById(element.name).style.opacity = "100%";
        } else {
            document.getElementById(element.name).style.opacity = "25%";
        }
    });
}

var mp_slider = document.getElementById("MP_slider");
var mp_output = document.getElementById("MP_display");
mp_output.innerHTML = mp_slider.value  + " &#176;C";

mp_slider.oninput = function() {
    mp_output.innerHTML = this.value + " &#176;C";
    elements.forEach(element => {
        if (element.melting_point <= this.value) {
            document.getElementById(element.name).style.opacity = "100%";
        } else {
            document.getElementById(element.name).style.opacity = "25%";
        }
    });
}

var bp_slider = document.getElementById("BP_slider");
var bp_output = document.getElementById("BP_display");
bp_output.innerHTML = bp_slider.value + " &#176;C";

bp_slider.oninput = function() {
    bp_output.innerHTML = this.value  + " &#176;C";
    elements.forEach(element => {
        if (element.boiling_point <= this.value) {
            document.getElementById(element.name).style.opacity = "100%";
        } else {
            document.getElementById(element.name).style.opacity = "25%";
        }
    });
}

var ds_slider = document.getElementById("discovery_timeline");
var date_output = document.getElementById("date_display");
date_output.innerHTML = ds_slider.value;

ds_slider.oninput = function() {
    date_output.innerHTML = this.value;
    elements.forEach(element => {
        if (element.discovery_date <= this.value) {
            document.getElementById(element.name).style.opacity = "100%";
        } else {
            document.getElementById(element.name).style.opacity = "25%";
        }
    });
}

function show_modal(obj) {
    // getting information about the element to populate the modal
    var elmnt_nm, atmc_mss, atmc_num, mp, bp, elc_ngty, radioactivity, discvry, etym, descr, ohana;
    const elmt_code = obj.innerText;
    elements.forEach(element => {
        if (element.symbol == elmt_code) {
            elmnt_nm = element.name;
            atmc_mss = element.atomic_mass;
            atmc_num = element.atomic_number;
            mp = element.melting_point;
            bp = element.boiling_point;
            elc_ngty = element.electronegativity;
            radioactivity = element.radioactive;
            discvry = element.discovery_details;
            etym = element.etymology;
            descr = element.description;
            // getting the class of the element so that the svg matches the html button
            const some_code = document.getElementById(element.name).classList;
            ohana = some_code.item(some_code.length-1);
        }
    });
    var fill_colour = "red";
    const text_colour = "white";
    switch (ohana) {
        case 'alkali_metals':
            fill_colour = alkali_metals_colour;
            break;
        case 'noble':
            fill_colour = noble_gas_colour;
            break;
        case 'alkaline_earth_metals':
            fill_colour = alkaline_earth_metals_clour;
            break;
        case 'metalloid':
            fill_colour = metalloid_colour;
            break;
        case 'non-metals':
            fill_colour = nonmetal_colour;
            break;
        case 'metaux_pauvres':
            fill_colour = metaux_pauvres_colour;
            break;
        case 'lanthanoid':
            fill_colour = lanthanoid_colour;
            break;
        case 'actinoid':
            fill_colour = actinoid_colour;
            break;
        case 'unknown':
            fill_colour = unknown_colour;
            break;
        default:
            fill_colour = transition_metal_colour;
    }
    
    // drawing the svg to appear in the modal
    const svg_code = `
    <svg class = "item3" width="100%" height="300">
        <style>
            .chemical_symbol { 
                font: bold 90px sans-serif;
                fill: ${text_colour};
            }
            .number {
                font: bold 40px sans-serif;
                fill: ${text_colour};
            }
        </style>
        <rect width = "100%" height = "100%" style = "fill: white" />
        <rect x = "5%" y = "3%" width = "90%" height = "94%" style = "fill: ${fill_colour}" />
        <text x="75%" y="15%" dominant-baseline="middle" text-anchor="middle" class="number">${atmc_num}</text>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="chemical_symbol">${elmt_code}</text>
        <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" class="number">${atmc_mss}</text>
    </svg>`;

    var radioact_visibility = "none";
    if (radioactivity) {
        radioact_visibility = "block";
    }
    if (mp == 9999) {
        mp = "<em>je ne sais pas</em>"
    } else {
        mp = mp + " &#176;C";
    }
    if (bp == 9999) {
        bp = "<em>je ne sais pas</em>"
    } else {
        bp = bp + " &#176;C";
    }

    // html for the modal pop-up
    const modal_code = 
    `<div class = "modal_content">
        <div class = "grid-container">
                <div class = "item1">${elmnt_nm}</div>
            <button class = "item2" onclick = \"document.getElementById('element_pop-up').style.display='none'\">&times</button>
            ${svg_code}
            <div class = "item4">
                Atomic Number: ${atmc_num} <br> Relative Atomic Mass: ${atmc_mss} <br> 
                Melting Point: ${mp} <br>
                Boiling Point: ${bp} <br> Electronegativity: ${elc_ngty} <br>
                <div class="mobile_radioactive_indictaion">Radioactive: ${radioactivity}</div>
                Discovered: ${discvry} <br> Etymology: ${etym} <br> <br>
            </div>
            <img class = "item5" src ="radioactv.png" style = "display:${radioact_visibility}">
            <div class = "item7">
                ${descr}
            </div>
        </div>
    </div>`;

    document.getElementById('element_pop-up').innerHTML = modal_code ;
    document.getElementById('element_pop-up').style.display = "block" ;
}