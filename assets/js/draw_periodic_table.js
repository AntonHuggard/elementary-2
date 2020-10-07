// Written by Anton Huggard
// Last edited 7th Oct, 2020 
//      since last commit
// - created file
// - added create_button() to fix modal bug for mobile 
// - accomodation for search.js re-write

// helper function for draw_periodic_table()
function create_button(element, classifier) {
    elmnt_btn = document.createElement("button");
    elmnt_btn.innerHTML = element.symbol;
    elmnt_btn.onclick = function(){show_modal(this)};
    elmnt_btn.classList.add("element");
    elmnt_btn.classList.add(classifier);
    elmnt_btn.classList.add(element.category);
    if (classifier == 'dsktp-elmt') {
        elmnt_btn.id = element.name;
    } else {
        elmnt_btn.id = element.symbol;
    }
    return elmnt_btn;
}


// HTML div is populated with elements by this function. It's pretty important.
function draw_periodic_table() {

    let html_elements = document.getElementsByClassName('element');
    if (html_elements.length != 0) {
        for (let i = html_elements.length -1; i >= 0; i--) {
            html_elements[i].remove();
        }
    }

    elements.forEach(element => {
    const element_button = create_button(element, 'dsktp-elmt');
    switch (element.atomic_number) {
        case 2:
            element_button.style.gridColumn = '18';
            break;
        case 5:
            element_button.style.gridColumn = '13';
            break;
        case 13:
            element_button.style.gridColumn = '13';
            break;
        case 57:
            element_button.style.gridColumn = '3';
            element_button.style.gridRow = '9';
            break; 
        case 58:
            element_button.style.gridColumn = '4';
            element_button.style.gridRow = '9';
            break; 
        case 59:
            element_button.style.gridColumn = '5';
            element_button.style.gridRow = '9';
            break; 
        case 60:
            element_button.style.gridColumn = '6';
            element_button.style.gridRow = '9';
            break; 
        case 61:
            element_button.style.gridColumn = '7';
            element_button.style.gridRow = '9';
            break; 
        case 62:
            element_button.style.gridColumn = '8';
            element_button.style.gridRow = '9';
            break; 
        case 63:
            element_button.style.gridColumn = '9';
            element_button.style.gridRow = '9';
            break; 
        case 64:
            element_button.style.gridColumn = '10';
            element_button.style.gridRow = '9';
            break;  
        case 65:
            element_button.style.gridColumn = '11';
            element_button.style.gridRow = '9';
            break; 
        case 66:
            element_button.style.gridColumn = '12';
            element_button.style.gridRow = '9';
            break; 
        case 67:
            element_button.style.gridColumn = '13';
            element_button.style.gridRow = '9';
            break; 
        case 68:
            element_button.style.gridColumn = '14';
            element_button.style.gridRow = '9';
            break; 
        case 69:
            element_button.style.gridColumn = '15';
            element_button.style.gridRow = '9';
            break;
        case 70:
            element_button.style.gridColumn = '16';
            element_button.style.gridRow = '9';
            break;
        case 71:
            element_button.style.gridColumn = '17';
            element_button.style.gridRow = '9';
            break;
        case 72:
            element_button.style.gridColumn = '4';
            break;
        case 89:
            element_button.style.gridColumn = '3';
            element_button.style.gridRow = '10';
            break; 
        case 90:
            element_button.style.gridColumn = '4';
            element_button.style.gridRow = '10';
            break; 
        case 91:
            element_button.style.gridColumn = '5';
            element_button.style.gridRow = '10';
            break; 
        case 92:
            element_button.style.gridColumn = '6';
            element_button.style.gridRow = '10';
            break; 
        case 93:
            element_button.style.gridColumn = '7';
            element_button.style.gridRow = '10';
            break; 
        case 94:
            element_button.style.gridColumn = '8';
            element_button.style.gridRow = '10';
            break; 
        case 95:
            element_button.style.gridColumn = '9';
            element_button.style.gridRow = '10';
            break; 
        case 96:
            element_button.style.gridColumn = '10';
            element_button.style.gridRow = '10';
            break;  
        case 97:
            element_button.style.gridColumn = '11';
            element_button.style.gridRow = '10';
            break; 
        case 98:
            element_button.style.gridColumn = '12';
            element_button.style.gridRow = '10';
            break; 
        case 99:
            element_button.style.gridColumn = '13';
            element_button.style.gridRow = '10';
            break; 
        case 100:
            element_button.style.gridColumn = '14';
            element_button.style.gridRow = '10';
            break; 
        case 101:
            element_button.style.gridColumn = '15';
            element_button.style.gridRow = '10';
            break;
        case 102:
            element_button.style.gridColumn = '16';
            element_button.style.gridRow = '10';
            break;
        case 103:
            element_button.style.gridColumn = '17';
            element_button.style.gridRow = '10';
            break;
        case 104:
            element_button.style.gridColumn = '4';
            break;
    };
    document.getElementById('desktop-grid').appendChild(element_button);
    });

    elements.forEach(element => {
        if (element.atomic_number < 57) {
            const element_button = create_button(element, 'mob-elmt');
            switch (element.atomic_number) {
                case 2:
                    element_button.style.gridColumn = '9';
                    break;
                case 5:
                    element_button.style.gridColumn = '4';
                    break;
                case 13:
                    element_button.style.gridColumn = '4';
                    break;
                
                case 22:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '1';
                    break;
                case 23:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '2';
                    break;
                case 24:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '3';
                    break;
                case 25:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '4';
                    break;
                case 26:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '5';
                    break;
                case 27:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '6';
                    break;
                case 28:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '7';
                    break;
                case 29:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '8';
                    break;
                case 30:
                    element_button.style.gridRow = '8';
                    element_button.style.gridColumn = '9';
                    break;
                    
                case 40:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '1';
                    break;
                case 41:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '2';
                    break;
                case 42:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '3';
                    break;
                case 43:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '4';
                    break;
                case 44:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '5';
                    break;
                case 45:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '6';
                    break;
                case 46:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '7';
                    break;
                case 47:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '8';
                    break;
                case 48:
                    element_button.style.gridRow = '9';
                    element_button.style.gridColumn = '9';
                    break;
            };
            document.getElementById('mobile-grid').appendChild(element_button);
        }
    });

}