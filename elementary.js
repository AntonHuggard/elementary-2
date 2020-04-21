function search_function() {

    // getting the user search query
    const query = document.getElementById("element_io").value.toUpperCase();

    // this gets called at the end of this function, it's to see whether parts of class 
    // names match the user input.
    function check_query(q) {
        return q.includes(query);
    }
    
    var elements = document.getElementsByClassName("element");

    // searching by chemical symbol
    if (query.length < 3) {
        for (var i = 0; i < elements.length; i++) {

            elements[i].style.opacity = "25%";

            chemical_symbol = elements[i].innerText.toUpperCase().toString();

            if ( !(chemical_symbol == "") && (chemical_symbol.includes(query)) ) {
                elements[i].style.opacity = "100%";
            }
        }
    // making sure the user is after metals and **not** metalloids or nonmetals
    } else if (query == "MET" || query == "META" || query == "METAL" || query == "METALS") {
        const metals = document.getElementsByClassName("metals");
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = "25%";
        }
        for (var j = 0; j < metals.length; j++) {
            metals[j].style.opacity = "100%";
        }
    // if it's not by symbol & it's not a metal, then it's free to search everything else
    } else {
        for (var i = 0; i < elements.length; i++) {

            // hide everything and only display elements that match the query
            elements[i].style.opacity = "25%";

            const attributes = elements[i].className.toUpperCase().split(" ");
            attributes.shift(); // deletes the universal 'element' class from list

            if (attributes.filter(check_query) != "") {
                elements[i].style.opacity = "100%";
            }
        }
    }
}

// when the user clicks on an element tile, this function creates the pop-up window
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
   
    // style stored outside html doesn't seem to be accessible ... hard-coded element colours. Not ideal.
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

    // the svg to draw the full element tile with name, symbol, number & mass is stored as a string
    // this appears in the modal pop-up
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

    // html for the modal pop-up stored as a string
    // below the radioactive grid-position, there's an unoccupied spot
    // this was intended to be for state at standard conditions
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


// this is to select the search-type -- dictated by the buttons below the search bar
// default behaviour for user entering a number ((should)) be to display atomic number
// however, if they want to search by boiling point, they should be able to type "above 56c" and see the 
// result for discovery the user should be able to type in 1885 and see neodymium 
// BUT ... for default search, there is no element 1885, so it shouldn't return anything
// unclear to users at the moment exactly how they can search

// declaring global variables for the search-option function
var selected;
var prev_selected = "nothing lol";

function display_toggle(btn) {
    if (prev_selected != "nothing lol") {
        prev_selected = selected;
    }
    switch (btn) {
        case "EN_btn":
            selected = "EN";
            document.getElementById("element_io").placeholder = "(above/below) value, highest, lowest...";
            break;
        case "MP_btn":
            selected = "MP";
            document.getElementById("element_io").placeholder = "(above/below) temp...";
            break;
        case "BP_btn":
            selected = "BP";
            document.getElementById("element_io").placeholder = "(above/below) temp...";
            break;
        case "DS_btn":
            selected = "DS";
            document.getElementById("element_io").placeholder = "(before/after) year...";
            break;
    }

    // perviously, I made clicking on a button change its style, however this overwrites the css
    // hover style which is no good. I have favoured hover over clicking at the moment
    // still trying to find a solution to this ...


    // document.getElementById("EN_btn").style.backgroundColor = "transparent";
    // document.getElementById("EN_btn").style.color = "white";
    // document.getElementById("MP_btn").style.backgroundColor = "transparent";
    // document.getElementById("MP_btn").style.color = "white";
    // document.getElementById("BP_btn").style.backgroundColor = "transparent";
    // document.getElementById("BP_btn").style.color = "white";
    // document.getElementById("DS_btn").style.backgroundColor = "transparent";
    // document.getElementById("DS_btn").style.color = "white";

    // document.getElementById(btn).style.backgroundColor = "white";
    // document.getElementById(btn).style.color = "black";

    var elements = document.getElementsByClassName("element");

    // if the user clicks on an already selected button, it goes back to default search & restores opacity
    if (prev_selected == selected) {
        // document.getElementById(btn).style.backgroundColor = "transparent";
        // document.getElementById(btn).style.color = "white";
        prev_selected = "nothing lol";
        document.getElementById("element_io").placeholder = "Search elements...";
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = "100%";
        }
    // if the user
    } else {
        prev_selected = selected;
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = "15%";
        }
    }
    
}