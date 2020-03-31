function show_modal(elmt_nm = 'Element', atmc_num = 'X', atmc_mss = 'Y', MP = 0, BP = 0, discvry = 'UNKNOWN', etym = 'from the Latin Elementum', EN = 'no data') {
    
    const modal_code = 
    `<div class = \"modal_content\">
        <div class = \"container\">
            <div>
            <h2 style = \"display: inline-block;\">${elmt_nm}</h2>
            <button class = \"close_modal_btn\" onclick = \"document.getElementById('element_pop-up').style.display='none'\">
                &times 
            </button>
        </div>
        <img src = \"resources/${elmt_nm}.png\" style = \"width: 25%; float: left; padding: 10px;\">
        <p>
            Atomic Number: ${atmc_num} <br> Relative Atomic Mass: ${atmc_mss} <br> Melting Point: ${MP} <sup>o</sup>C <br>
            Boiling Point: ${BP} <sup>o</sup>C <br> Electronegativity: ${EN}
            <br><br> Discovered: ${discvry} <br> Etymology: ${etym}
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero ut enim accumsan maximus id ut nisl. Etiam placerat magna ac ante varius pretium. Cras in metus nec risus pharetra semper.</p>
        </div>
    </div>` ;
    document.getElementById('element_pop-up').innerHTML = modal_code ;
    document.getElementById('element_pop-up').style.display = "block" ;

}

function search_elements() {
    var input, filter, table;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("periodic_table");

    if (filter != "") {
        for (var i = 0, cell; cell = table.getElementsByTagName('td')[i]; i++) {

            var element_code = cell.innerText.toUpperCase();
            element_code.toString();
      
            if (!(element_code.includes(filter))) {
                cell.style.opacity = "25%";
                cell.style.transition = "opacity 0.3s";
            } 
            else {
                cell.style.transition = "opacity 0.5s";
                cell.style.opacity = "100%";
            }
          }         
    } else {
        for (var i = 0, cell; cell = table.getElementsByTagName('td')[i]; i++) {
            cell.style.transition = "opacity 0.5s";
            cell.style.opacity = "100%";
        }
    }

}


function wght_convtr(val_kgs) {
    document.getElementById("outputGrams").innerHTML = val_kgs * 1000;
}

function temp_convtr(val_deg_C) {
    document.getElementById("output_temp_K").innerHTML = val_deg_C + (273.16);
    document.getElementById("output_temp_F").innerHTML = val_deg_C * (9/5) + 32;
}