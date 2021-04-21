// Written by Anton Huggard
// Last edited 15th Feb, 2021 -- Added search by alloy


// display-type, from bottom buttons
let prv_display = 'all';
let new_display = '';
let results = [];

function display_search_results(res) {
    // un-dim elements on desktop that match
    res.forEach(element => {
        document.getElementById(element.name).style.opacity = '100%';
    });
    // re-populate periodic_table with results
    let mob_elements = document.getElementsByClassName('mob-elmt');
    for (let i = mob_elements.length -1; i >= 0; i--) {
        mob_elements[i].remove();
    }
    res.forEach(element => {
        const element_button = create_button(element, 'mob-elmt');
        document.getElementById('mobile-grid').appendChild(element_button);
    });

    if (res.length == 0) {
        document.getElementById('no_results').style.display = "block" ;
    }
}

// helper function for search(), dims elements on desktop, deletes them on mobile
function show_none() {
    filter_button.innerHTML = 'filter';
    let dsk_elements = document.getElementsByClassName('dsktp-elmt');
    for (var i = dsk_elements.length -1; i >= 0; i--) {     
        dsk_elements[i].style.opacity = low_opacity_value;        
    }
    const mob_elements = document.getElementsByClassName('mob-elmt');
    for (let i = mob_elements.length -1; i >= 0; i--) {
        mob_elements[i].remove();
    }
}


function check(term, property) {
    // there's probably a less stupid way of doing this...
    switch (property) {
        case 'state':
            elements.forEach(element => {
                if (element.state_at_standard_conditions == term) results.push(element);
            });
            break;
        case 'metal':
            elements.forEach(element => {
                if (element.metalness == term) results.push(element);
            });
            break;
        case 'rdactv':
            elements.forEach(element => {
                if (element.radioactive) results.push(element);
            });
            break;
        case 'row':
            elements.forEach(element => {
                if (element.period == term) results.push(element);
            });
            break;
        case 'col':
            elements.forEach(element => {
                if (element.group == term) results.push(element);
            });
            break;
        case 'category':
            elements.forEach(element => {
                if (element.category == term) results.push(element);
            });
            break;
        case 'block':
            elements.forEach(element => {
                if (element.block == term) results.push(element);
            });
            break;
    }    
}

function search() {
    document.getElementById('no_results').style.display = "none" ;
    show_none();

    // when the user has selected a display type and then makes a search, this clears display-type memory
    prv_display = 'all'; 
    new_display = 'all';  

    results = [];

    const query = document.getElementById("element_io").value.toUpperCase();
    const lc_qry = query.toLowerCase();

    // searching by chemical symbol
    if ( (query.length < 3) && (query.match(/[a-zA-Z]{1,2}$/i)) ) {
        elements.forEach(element => {
            if (element.symbol.includes(query) || query == element.symbol.toUpperCase()) results.push(element);
            else if (element.symbol[1] == lc_qry) results.push(element);
        });
    }

    // search by atomic MASS
    else if (query.match(/\d+.\d+$/) || query.match(/\[\d+\]$/)) {
        let value = parseFloat(query);
        elements.forEach(element => {
            if ((element.atomic_mass - 1 <= value) && (value <= element.atomic_mass + 1)) results.push(element);
            else if (element.atomic_mass == query) {
                results.push(element);
            }
        });
    }
    
    // search by atomic NUMBER
    else if (Number.isInteger(parseInt(query))) {
        const user_number = parseInt(query);
        elements.forEach(element => {
            if (user_number == element.atomic_number) results.push(element);
        });
    }

    // search by state
    else if ((query == "GAS") || (query == "LIQUID") || (query == "SOLID")) check(lc_qry, 'state');

    // search by category
    else if (query.match(/ALKALI METAL[S]?$/) || query == "LITHIUM GROUP") check(1, 'col');
    else if (query.match(/ALKALINE[\s-]EARTH[\s-]METAL[S]?$/i) || query.match(/BERYLLIUM[\s-]GROUP$/i)) check(2, 'col');
    else if (query.match(/post[\s-]transition[\s-]metal[s]?$/i) || (query.match(/post[\s-]transition?$/i))) check('metaux_pauvres', 'category');
    else if (query.match(/transition[\s-]metal[s]?$/i)) check('transition-metal', 'category');
    else if (query.match(/BORON[\s-]?GROUP$/)) check(13, 'col');
    else if (query.match(/CARBON[\s-]?GROUP$/)) check(14, 'col');
    else if (query.match(/NITROGEN[\s-]*GROUP$/i) || query == "PNICTOGENS") check(15, 'col');
    else if (query.match(/OXYGEN[\s-]*GROUP$/) || query == "CHALCOGENS") check(16, 'col');
    else if (query.match(/FLUORINE[\s-]*GROUP$/) || query == "HALOGENS") check(17, 'col');
    else if (query.match(/NOBLE GAS(ES)?$/i) || query == "HELIUM GROUP" || query == "NEON GROUP") check(18, 'col');
    else if (query.match(/lanthanide[s]?$/i) || query.match(/lanthanoid[s]?$/i)) check('lanthanoid', 'category');
    else if (query.match(/actinide[s]?$/i) || query.match(/actinoid[s]?$/i)) check('actinoid', 'category');
    else if (lc_qry == 'unknown') check(lc_qry, 'category');
    else if (query == 'WEIRD RADIOACTIVE BOIS') check('f', 'block');
    
    // search by metalness
    else if (query.match(/METALLOID[s]?$/i)) check('metalloid', 'metal');
    else if (query.match(/NON[\s-]*METAL[s]?$/i)) check('nonmetal', 'metal');
    else if (query.match(/METAL[s]?$/i)) check('metal', 'metal');

    // search by radioactivity
    else if (query == "RADIOACTIVE") check(lc_qry, 'rdactv');

    // search by row
    else if (query.match(/row[\s-]*\d/i) || query.match(/period[\s-]*\d/i)) {
        let row_num = parseInt(query.charAt(query.length-1));
        check(row_num, 'row');
    }

    // search by column/group number
    else if (query.match(/group[\s-]*\d/i) || query.match(/grp[\s-]*\d/i)) {
        // handling for 1 or 2 digit group numbers
        if (query[query.length -2].match(/\d/)) col_num = parseInt(query.slice(-2));
        else col_num = parseInt(query.slice(-1));
        check(col_num, 'col');
    }    

    // search by block
    else if (lc_qry.match(/[spdf][\s-]?block$/i)) {
        let chars = lc_qry.split('');
        // const char = chars[0];
        // alert(char);
        check(chars[0], 'block');
    }

    else if (query.match(/discovered/i) || query.match(/found/i)) {
        let words = query.split(' ');
        if (words.length == 3) {

            if (words[2].match(/\d+$/)) {
                let query_date = parseInt(words[2]);

                if (words[1].match(/before$/i) || words[1].match(/by$/i)) {
                    elements.forEach(element => {
                        if (element.discovery_date < query_date) {
                            results.push(element);
                        }
                    });
                }

                else if (words[1].match(/in$/i) || words[1].match(/during$/i)) {
                    elements.forEach(element => {
                        if (element.discovery_date == query_date) {
                            results.push(element);
                        }
                    });
                }

                else if (words[1].match(/after$/i)) {
                    elements.forEach(element => {
                        if (element.discovery_date > query_date) {
                            results.push(element);
                        }
                    });
                }
            
            }
        }
    }

    // search by name -- this is being executed for some reason??
    else {
        let found_name = false;
        elements.forEach(element => {
            const this_guys_name = element.name.toUpperCase();
            if (this_guys_name.includes(query)) {
                results.push(element);
                found_name = true;
            }
        });
        if (! found_name) {
            // need to re-name at some point lol not alloys any more :p
            compounds.forEach(alloy => {
                const alloy_name = alloy.name.toUpperCase();
                if (alloy_name.includes(query))  {
                    results = alloy.elements;
                    // console.log(results);
                }
            });
        }
    }

    display_search_results(results); 
    
    // put everything back to normal when the query is deleted
    if (query == '') {
        draw_periodic_table();
    }
}