function search_function() {

    const query = document.getElementById("element_io").value.toUpperCase();

    function check_query(q) {
        return q.includes(query);
    }
    
    var elements = document.getElementsByClassName("element");
    
    if (query.length < 3) {
        for (var i = 0; i < elements.length; i++) {

            elements[i].style.opacity = "25%";

            chemical_symbol = elements[i].innerText.toUpperCase().toString();

            if ( !(chemical_symbol == "") && (chemical_symbol.includes(query)) ) {
                elements[i].style.opacity = "100%";
            }
        }
    
    } else if (query == "MET" || query == "META" || query == "METAL" || query == "METALS") {
        const metals = document.getElementsByClassName("metals");
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = "25%";
        }
        for (var j = 0; j < metals.length; j++) {
            metals[j].style.opacity = "100%";
        }
    } else {
        for (var i = 0; i < elements.length; i++) {

            elements[i].style.opacity = "25%";

            const attributes = elements[i].className.toUpperCase().split(" ");
            attributes.shift(); // deletes the universal 'element' class from list

            if (attributes.filter(check_query) != "") {
                elements[i].style.opacity = "100%";
            }
        }
    }
}


function show_modal(elmt_nm = 'Element', atmc_num = 'X', atmc_mss = 'Y', MP = 0, BP = 0, 
                discvry = 'UNKNOWN', etym = 'from the Latin Elementum', EN = 'no data', display_radioactive = 'none',
                details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ut enim accumsan maximus id ut nisl. Etiam placerat magna ac ante varius pretium. Cras in metus nec risus pharetra semper.'
                ) {

    // get data about the element to draw the svg tile
    const element_name_lower = elmt_nm.toLowerCase();
    var group, elmt_code;
    if (element_name_lower == "element") {
        elmt_code = "El";
        group = "fish";
    } else {
        elmt_code = document.getElementById(element_name_lower).innerText;
        const classes = document.getElementById(element_name_lower).className.toUpperCase().split(" ");
        group = classes[2].toLowerCase();
    }

    
    
    // style stored outside html doesn't seem to be accessible
    var fill_colour;
    var text_colour = "black";
    if (group == "alkali_metals") {
        fill_colour = "red";
        text_colour = "white";
    } else if (group == "alkaline_earth_metals") {
        fill_colour = "#9966ff";
        text_colour = "white";
    } else if ( group == "metaux_pauvres") {
        fill_colour = "#80FF00";
    } else if (group == "metalloid") {
        fill_colour = "rgb(255, 187, 0)";
    } else if (group == "non-metals") {
        fill_colour = "cyan";
    } else if (group == "noble") {
        fill_colour = "rgb(199, 0, 156)";
        text_colour = "white";
    } else if (group == "lanthanoid") {
        fill_colour = "#5900b3";
        text_colour = "white";
    } else if (group == "actinoid") {
        fill_colour = "#000099";
        text_colour = "white";
    } else if ( group == "unknown") {
        fill_colour = "rgb(73, 73, 73)";
        text_colour = "white";
    } else {
        fill_colour = "#fbff00";
    }

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
    
    const modal_code = 
    `<div class = "modal_content">
        <div class = "grid-container">
                <div class = "item1">${elmt_nm}</div>
            <button class = "item2" onclick = \"document.getElementById('element_pop-up').style.display='none'\">&times</button>
            ${svg_code}
            <div class = "item4">
                Atomic Number: ${atmc_num} <br> Relative Atomic Mass: ${atmc_mss} <br> Melting Point: ${MP} <sup>o</sup>C <br>
                Boiling Point: ${BP} <sup>o</sup>C <br> Electronegativity: ${EN} <br> <br>
                Discovered: ${discvry} <br> Etymology: ${etym} <br> <br>
            </div>
            <img class = "item5" src ="radioactv.png" style = "display:${display_radioactive}">
            <button class = "item6">6</button>
            <div class = "item7">
                ${details}
            </div>
        </div>
    </div>`;

    document.getElementById('element_pop-up').innerHTML = modal_code ;
    document.getElementById('element_pop-up').style.display = "block" ;

}

var toggle_all = false;
var selected;
var prev_selected = "nothing lol";

function display_toggle(btn) {
    if (prev_selected != "nothing lol") {
        prev_selected = selected;
    }
    switch (btn) {
        case "EN_btn":
            selected = "EN";
            break;
        case "MP_btn":
            selected = "MP";
            break;
        case "BP_btn":
            selected = "BP";
            break;
        case "DS_btn":
            selected = "DS";
            break;
    }
    // alert(selected);
    document.getElementById("EN_btn").style.backgroundColor = "transparent";
    document.getElementById("EN_btn").style.color = "white";
    document.getElementById("MP_btn").style.backgroundColor = "transparent";
    document.getElementById("MP_btn").style.color = "white";
    document.getElementById("BP_btn").style.backgroundColor = "transparent";
    document.getElementById("BP_btn").style.color = "white";
    document.getElementById("DS_btn").style.backgroundColor = "transparent";
    document.getElementById("DS_btn").style.color = "white";

    document.getElementById(btn).style.backgroundColor = "white";
    document.getElementById(btn).style.color = "black";

    if (prev_selected == selected) {
        document.getElementById(btn).style.backgroundColor = "transparent";
        document.getElementById(btn).style.color = "white";
        prev_selected = "nothing lol";
    } else {
        prev_selected = selected;
    }
    
}

function search_type(elmt_id) {    
    toggle_all = !(toggle_all);
    display_toggle(elmt_id);
    var elements = document.getElementsByClassName("element");
    for (var i = 0; i < elements.length; i++) {
        if (toggle_all) elements[i].style.opacity = "15%";
        else elements[i].style.opacity = "100%";
    }

}