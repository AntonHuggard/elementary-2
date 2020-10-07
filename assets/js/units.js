// Written by Anton Huggard
// Last edited 7th Oct, 2020 -- created file

let units = 0;

function toggle_units() {
    units = (units + 1) % 3;
    const master = document.getElementById('myst_btn');
    switch (units) {
        case 0:
            master.innerHTML = 'celsius';
            break;
        case 1:
            master.innerHTML = 'fahrenheit';
            break;
        case 2:
            master.innerHTML = 'kelvin';
            break;
    }
}

function convert_temp(value, r) {
    switch (units) {
        case 1:
            return ((5/9)*(value - 32)).toFixed(r);
            break;
        case 2:
            return (value + 273.15).toFixed(0);
            break;
    }
}