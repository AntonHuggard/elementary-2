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
    
    const modal_code = 
    `<div class = "modal_content">
        <div class = "grid-container">
                <div class = "item1">${elmt_nm}</div>
            <button class = "item2" onclick = \"document.getElementById('element_pop-up').style.display='none'\">&times</button>
            <img class = "item3" src ="${elmt_nm}.png">
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