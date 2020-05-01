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
                document.getElementById("acc_dt").classList.toggle("active");
                break;
            case 4:
                document.getElementById("acc_ds").classList.toggle("active");
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
        default:
            alert('not looking so hot there, bucko');
            search_type = 0;
            document.getElementById("acc_dt").style.display = "block";
            document.getElementById("acc_dt").classList.toggle("active");
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
            document.getElementById(element.name).style.opacity = "50%";
        }
    });
}

var mp_slider = document.getElementById("MP_slider");
var mp_output = document.getElementById("MP_display");
mp_output.innerHTML = mp_slider.value  + " C";

mp_slider.oninput = function() {
    mp_output.innerHTML = this.value + " C";
    elements.forEach(element => {
        if (element.melting_point <= this.value) {
            document.getElementById(element.name).style.opacity = "100%";
        } else {
            document.getElementById(element.name).style.opacity = "50%";
        }
    });
}

var bp_slider = document.getElementById("BP_slider");
var bp_output = document.getElementById("BP_display");
bp_output.innerHTML = bp_slider.value + " C";

bp_slider.oninput = function() {
    bp_output.innerHTML = this.value  + " C";
    elements.forEach(element => {
        if (element.boiling_point <= this.value) {
            document.getElementById(element.name).style.opacity = "100%";
        } else {
            document.getElementById(element.name).style.opacity = "50%";
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
            document.getElementById(element.name).style.opacity = "50%";
        }
    });
}

function show_modal(obj) {
    // getting information about the element to populate the modal
    var elmnt_nm, atmc_mss, atmc_num, mp, bp, elc_ngty, radioactivity, discvry, etym, descr;
    const elmt_code = obj.innerText;
    elements.forEach(element => {
        if (element.symbol == elmt_code) {
            elmnt_nm = element.name;
            atmc_mss = element.atomic_mass;
            atmc_num = element.atomic_number;
            mp = element.boiling_point;
            bp = element.boiling_point;
            elc_ngty = element.electronegativity;
            radioactivity = element.radioactive;
            discvry = element.discovery_details;
            etym = element.etymology;
            descr = element.description;
        }
    });
    const fill_colour = "red";
    const text_colour = "white";
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

    // html for the modal pop-up
    const modal_code = 
    `<div class = "modal_content">
        <div class = "grid-container">
                <div class = "item1">${elmnt_nm}</div>
            <button class = "item2" onclick = \"document.getElementById('element_pop-up').style.display='none'\">&times</button>
            ${svg_code}
            <div class = "item4">
                Atomic Number: <strong>${atmc_num}</strong> <br> Relative Atomic Mass: <strong>${atmc_mss}</strong> <br> 
                Melting Point: <strong>${mp}</strong> <sup>o</sup>C <br>
                Boiling Point: <strong>${bp}</strong> <sup>o</sup>C <br> Electronegativity: <strong>${elc_ngty}</strong> <br>
                Discovered: ${discvry} <br> Etymology: ${etym} <br> <br>
            </div>
            <img class = "item5" src ="radioactv.png" style = "display:${radioactivity}">
            <button class = "item6">6</button>
            <div class = "item7">
                ${descr}
            </div>
        </div>
    </div>`;

    document.getElementById('element_pop-up').innerHTML = modal_code ;
    document.getElementById('element_pop-up').style.display = "block" ;
}