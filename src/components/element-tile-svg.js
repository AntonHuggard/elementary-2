


export default function getTileSVG(atom) {


    const nonmetals_colour = "rgb(223, 0, 0)";
    const alkali_metals_colour = "rgb(219, 102, 6)";
    const alkaline_earth_metals_clour = "rgb(223, 182, 0)";
    const metaux_pauvres_colour = "rgb(5, 148, 5)";
    const metalloid_colour = "rgb(0, 179, 90)";
    const nonmetal_colour = "#7c4cdb";
    const lanthanoid_colour = "#5900b3";
    const actinoid_colour = "#000099";
    const noble_gas_colour = "rgb(99, 0, 124)";
    const unknown_colour = "rgb(34, 34, 34)";
    const transition_metal_colour = "rgb(21, 49, 85)";


    let fill_colour = "rgb(223, 0, 0)";
    const text_colour = "white";


    switch (atom.primary_class) {
        case 'non-metal':
            fill_colour = nonmetals_colour;
            break;
        case 'alkali-metal':
            fill_colour = alkali_metals_colour;
            break;
        case 'noble_gas':
            fill_colour = noble_gas_colour;
            break;
        case 'alkaline-earth-metal':
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


    return `
        <style>
            .chemical_symbol { 
                font: bold 90px sans-serif !important;
                fill: ${text_colour};
            }
            .number {
                font: bold 40px sans-serif;
                fill: ${text_colour};
            }
        </style>
        <rect width = "100%" height = "100%" style = "fill: white" />
        <rect x = "5%" y = "3%" width = "90%" height = "94%" style = "fill: ${fill_colour}" />
        <text x="75%" y="15%" dominant-baseline="middle" text-anchor="middle" class="number">${atom.atomic_number}</text>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="chemical_symbol">${atom.symbol}</text>
        <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" class="number">${atom.atomic_mass}</text>
    `;

}