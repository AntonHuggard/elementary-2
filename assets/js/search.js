// Written by Anton Huggard
// Last edited 25th Aug, 2020 -- fixed bug where searching "non-metal" displayed metals

// display-type, from bottom buttons
var prv_display = 'all';
var new_display;

function search() {
    document.getElementById('periodic_table').style.display='grid';
    document.getElementById('no_results').style.display = "none" ;
    prv_display = 'all'; // when the user has selected a display type and then makes a search, 
    new_display = 'all'; // these two lines clear the display-type memory, making it usable afterwards.
    const query = document.getElementById("element_io").value.toUpperCase();
    var html_elements = document.getElementsByClassName("element");

    for (var i = 0; i < html_elements.length; i++) {
        html_elements[i].style.display = "grid";
        html_elements[i].style.opacity = low_opacity_value;
    }

    if (Number.isInteger(parseInt(query))) { // if a user enters a number, search through elements to find one with matching atomic number
        const user_number = parseInt(query);
        elements.forEach(element => {
            if (user_number == element.atomic_number) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.length < 3 && query != '') { // searching by chemical symbol
        found_none = true;
        var results = [];
        for (var i = 0; i < html_elements.length; i++) {
            chemical_symbol = html_elements[i].innerText.toUpperCase().toString();
            if (chemical_symbol.includes(query)) {
                html_elements[i].style.opacity = "100%";
                results.push(html_elements[i]);
                found_none = false;
            }
        }
        
        if (found_none) {
            var element_buttons = document.getElementsByClassName("element");
            for (var i = 0; i < html_elements.length; i++) {
                html_elements[i].style.display = "none";
            }
            document.getElementById('no_results').style.display = "block" ;
        }
        if (!found_none && (getWidth() < 650)) {
            document.getElementById('periodic_table').style.display='none';
            document.getElementById('small_screen_search_results').style.display='grid';
            results.forEach(result => {
                document.getElementById('small_screen_search_results').innerHTML = result;
                // displays text saying html element but doesnt actually display the code :/ 
            });
            
            alert('we found one, but your screen is too small to show him');
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
    } else if (query.match(/METALLOID[s]?$/i)) {
        elements.forEach(element => {
            if (element.metalness == 'metalloid') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/NON[\s-]*METAL[s]?$/i)) {
        elements.forEach(element => {
            if (element.metalness == 'nonmetal') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/METAL[s]?$/i)) {
        elements.forEach(element => {
            if (element.metalness == 'metal') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/row[\s-]*\d/i) || query.match(/period[\s-]*\d/i)) {
        let query_number = parseInt(query.charAt(query.length-1));
        elements.forEach(element => {
            if (element.period == query_number) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/group[\s-]*\d/i) || query.match(/grp[\s-]*\d/i)) {
        if (query[query.length -2].match(/\d/)) { // detects a 2-digit number
            query_number = parseInt(query.slice(-2));
        } else {
            query_number = parseInt(query.slice(-1));
        }
        elements.forEach(element => {
            if (element.group == query_number) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });    
    } else if (query == "PNICTOGENS" || query.match(/NITROGEN[\s-]*GROUP$/i)) {
        elements.forEach(element => {
            if (element.group == 15) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "CHALCOGENS" || query.match(/OXYGEN[\s-]*GROUP$/)) {
        elements.forEach(element => {
            if (element.group == 16) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "HALOGENS" || query.match(/FLUORINE[\s-]*GROUP$/)) {
        elements.forEach(element => {
            if (element.group == 17) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/NOBLE GAS(ES)?$/i) || query == "HELIUM GROUP" || query == "NEON GROUP") { 
        elements.forEach(element => {
            if (element.group == 18) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/ALKALI METAL[S]?$/) || query == "LITHIUM GROUP") {
        elements.forEach(element => {
            if (element.group == 1) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/ALKALINE[\s-]EARTH[\s-]METAL[S]?$/i) || query.match(/BERYLLIUM[\s-]GROUP$/i)) {
        elements.forEach(element => {
            if (element.group == 2) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/transition[\s-]metal[s]?$/i)) {
        elements.forEach(element => {
            if (element.block == 'd') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/lanthanide[s]?$/i) || query.match(/lanthanoid[s]?$/i)) {
        elements.forEach(element => {
            if (element.atomic_number >= 57 && element.atomic_number < 72) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/actinide[s]?$/i) || query.match(/actinoid[s]?$/i)) {
        elements.forEach(element => {
            if (element.atomic_number >= 89 && element.atomic_number < 104) {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query.match(/discovered/i) || query.match(/found/i)) {
        let words = query.split(' ');
        if (words.length == 3) {

            if (words[2].match(/\d+$/)) {
                let query_date = parseInt(words[2]);

                if (words[1].match(/before$/i) || words[1].match(/by$/i)) {
                    elements.forEach(element => {
                        if (element.discovery_date < query_date) {
                            document.getElementById(element.name).style.opacity = "100%";
                        }
                    });
                }

                else if (words[1].match(/in$/i) || words[1].match(/during$/i)) {
                    elements.forEach(element => {
                        if (element.discovery_date == query_date) {
                            document.getElementById(element.name).style.opacity = "100%";
                        }
                    });
                }

                else if (words[1].match(/after$/i)) {
                    elements.forEach(element => {
                        if (element.discovery_date > query_date) {
                            document.getElementById(element.name).style.opacity = "100%";
                        }
                    });
                }
            
            }
        }
    } else if (query.match(/[a-zA-Z][\s-]?block$/i)) {
        let chars = query.split('');
        // alert(chars);
        if (chars[0] == 'S') {
            elements.forEach(element => {
                if (element.block == 's') {
                    document.getElementById(element.name).style.opacity = "100%";
                }
            });
        } else if (chars[0] == 'P') {
            elements.forEach(element => {
                if (element.block == 'p') {
                    document.getElementById(element.name).style.opacity = "100%";
                }
            });
        } else if (chars[0] == 'D') {
            elements.forEach(element => {
                if (element.block == 'd') {
                    document.getElementById(element.name).style.opacity = "100%";
                }
            });
        } else if (chars[0] == 'F') {
            elements.forEach(element => {
                if (element.block == 'f') {
                    document.getElementById(element.name).style.opacity = "100%";
                }
            });
        } else {
            alert('that electron shell doesn\'t exist');
            elements.forEach(element => {
                if (element.block == 'p') {
                    document.getElementById(element.name).style.opacity = "100%";
                }
            });
        }
        
        
    } else if (query == "WEIRD RADIOACTIVE BOIS") {
        elements.forEach(element => {
            if (element.block == 'f') {
                document.getElementById(element.name).style.opacity = "100%";
            }
        });
    } else if (query == "RADIOACTIVE") {
        elements.forEach(element => {
            if (element.radioactive) {
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