import atomsJSON from './atoms.json';
import compoundsJSON from './compounds.json'


function getMatchingElements (term, attr, precision=null, tolerance=0) {
    // returns array of chemical symbols for all elements that match the query (on given attribute)
    // term = search query 
    // attr = element attribute i.e. name, symbol, atomic_mass, atomic_number
    // str = (boolean) is the query a string? (used in default case below) 
    // precision = eq (equal to), lt (less than), gt (greater than), ce (close enough, uses tolerance)
    // tolerance = for numeric terms (eg. instead of needing exact values, allow say +/- 0.05)

    let atoms = atomsJSON.atoms;
    let compounds = compoundsJSON.compounds;
    let r = [];

    switch (precision) {
        case "ce":
            atoms.forEach(elmt => { 
                if((elmt[attr] <= (term+tolerance) ) && (elmt[attr] >= (term-tolerance) )) 
                    r.push(elmt.symbol);
            });
            return r;
        case "lt":
            atoms.forEach(elmt => { 
                if (elmt[attr] < (term+tolerance) ) r.push(elmt.symbol) 
            });
            return r;
        case "gt":
            atoms.forEach(elmt => { 
                if (elmt[attr] > (term+tolerance) ) r.push(elmt.symbol) 
            });
            return r;
        default:
            break;
    }

    switch (attr) {
        case "name":
            // search by atom name -- or by compound name (eg includes alloys)
            term = term.trim();
            atoms.forEach(elmt => { if(elmt[attr].includes(term)) r.push(elmt.symbol) });
            
            compounds.forEach(compound => {
                const name = compound["name"].toLowerCase()
                const fancyName = compound["iupac-name"].toLowerCase()

                if((term === name)|(term === fancyName)) {
                    const compoundElements = compound.elements;
                    compoundElements.forEach(elementSymbol => { r.push(elementSymbol) });
                }
            });
            break;

        case "symbol":
            // search by chemical symbol -- 2 letters
            atoms.forEach(elmt => { 
                term = term.toUpperCase();
                if ((elmt[attr].toUpperCase().includes(term)) || (elmt[attr] === term)) 
                    r.push(elmt.symbol) 
                });
            break;

        default:
            atoms.forEach(element => {
                const dataType = typeof element[attr]
                const data = (dataType === "string")? element[attr].toLowerCase() : element[attr];
                if(data === term) r.push(element.symbol);
            });
    }
    return r;
}


function runQuery(input) {
    let r = []; // results
    let q = input.toLowerCase(); // query

    // search by symbol
    if ((q.length<3) && (q.match(/[a-z]{1,2}\s?$/i))) { 
        r = getMatchingElements(q, "symbol");
    } 
    // search by discovery date
    else if (
        (q.match(/^discover(y|ed)?\s\d{3,4}?\s?$/i)) || 
        (q.match(/^found\s\d{3,4}?\s?$/i)) ||
        (q.match(/^\d{4}$/)) ) {
        const year = q.replace(/\D/g,'');
        r = getMatchingElements(parseInt(year), "discovery_date");
    }
    else if (
        (q.match(/^discover(y|ed)? (before|pre) \d{3,4}?\s?$/i)) || 
        (q.match(/^found (before|pre) \d{3,4}?\s?$/i)) ) {
        const year = q.replace(/\D/g,'');
        r = getMatchingElements(parseInt(year), "discovery_date", "lt");
    }
    else if (
        (q.match(/^discover(y|ed)? (after|since|post) \d{3,4}?\s?$/i)) || 
        (q.match(/^found (after|since|post) \d{3,4}?\s?$/i)) ) {
        const year = q.replace(/\D/g,'');
        r = getMatchingElements(parseInt(year), "discovery_date", "gt");
    }
    // search by atomic number
    else if(q.match(/^\d{1,3}\s?$/i)) {
        r = getMatchingElements(parseInt(q, 10), "atomic_number");
    } 
    // search by atomic mass
    else if(q.match(/^\d{1,3}.?(\d{1,4})?\s?$/i)) {
        r = getMatchingElements(Number(q), "atomic_mass", "ce", 0.5); // tolerance of 0.5 
    } 
    
    // search by metalness
    else if (q.match(/non[-\s]?metals?\s?$/i)) r = getMatchingElements("non-metal", "primary_class");
    else if (q.match(/metalloids?\s?$/i)) {
        r = getMatchingElements("metalloid", "primary_class");
    }
    else if (q.match(/^metals?\s?$/i)) {
        r = getMatchingElements("metal", "metalness");
    }

    // search by block
    else if (q.match(/^[spdf][-\s]block?\s?$/i)) {
        const block = q[0];
        r = getMatchingElements(block, "block");
    }

    // search by melting point
    // else if (
    //     (q.match(/^melting (point|pt) (equal(\sto)?|=) -?\d{1,4}\s?$/i)) || 
    //     (q.match(/^mp\s?=\s?-?\d{1,4}\s?$/i)) ) {
    //         console.log("melting point search")
    //     // const year = q.replace(/\D/g,'');
    //     // r = getMatchingElements(parseInt(year), true, "disc_before");
    // }


    // search by electronegativity
    else if (
        (q.match(/^en\s?=\s?\d(.\d+)?\s?$/i)) || 
        (q.match(/^electro\s?negativity\s?=\s?\d(.\d+)?\s?$/i)) ) {
        const queryArray = q.split("");
        const equalsIndex = queryArray.indexOf("=");
        let en = queryArray.slice(equalsIndex+1);
        en = en.join("");
        r = getMatchingElements(Number(en), "electronegativity", "ce", 0.05); // tolerance of 0.05 
    }
    else if (
        (q.match(/^en\s?(<|lt)\s?\d+(.\d+)?\s?$/i)) || 
        (q.match(/^electro\s?negativity\s?(<|lt)\s?\d+(.\d+)?\s?$/i)) ) {
            let en = ""
            if (q.includes("lt")) en = q.split("lt")[1];
            else {
                const queryArray = q.split("");
                const operatorIndex = queryArray.indexOf("<");
                en = queryArray.slice(operatorIndex+1).join("");
            }
        r = getMatchingElements(Number(en), "electronegativity", "lt", 0.05);
    }
    else if (
        (q.match(/^en\s?(>|gt)\s?\d+(.\d+)?\s?$/i)) || 
        (q.match(/^electro\s?negativity\s?(>|gt)\s?\d+(.\d+)?\s?$/i)) ) {
            let en = ""
            if (q.includes("gt")) en = q.split("gt")[1];
            else {
                const queryArray = q.split("");
                const operatorIndex = queryArray.indexOf(">");
                en = queryArray.slice(operatorIndex+1).join("");
            }
        r = getMatchingElements(Number(en), "electronegativity", "gt", 0.05);
    }

        
    else if (q.match(/noble[-\s]?gas(es)?\s?$/i)) {
        r = getMatchingElements("noble_gas", "primary_class");
    } 
    else if (q.match(/alkali[-\s]?metals?\s?$/i)) {
        r = getMatchingElements("alkali-metal", "primary_class");
    } 
    else if (q.match(/alkaline[-\s]?earth[-\s]?metals?\s?$/i)) {
        r = getMatchingElements("alkaline-earth-metal", "primary_class");
    } 
    else if (q.match(/metaux[-\s]?pauvres?\s?$/i)) {
        r = getMatchingElements("metaux_pauvres", "primary_class");
    } 
     
    else if (q.match(/transition[-\s]?metals?\s?$/i)) {
        r = getMatchingElements("transition-metal", "primary_class");
    } 
    else if (q.match(/^lanthanoids?\s?$/i) || q.match(/^lanthanides?\s?$/i)) {
        r = getMatchingElements("lanthanoid", "primary_class");
    } 
    else if (q.match(/^actinoids?\s?$/i) || q.match(/^actinides?\s?$/i)) {
        r = getMatchingElements("actinoid", "primary_class");
    } 
    else if (q.match(/unknowns?\s?$/i)) {
        r = getMatchingElements("unknown", "primary_class");
    } 
    else if (q.match(/radio\s?active$/i)) {
        r = getMatchingElements(true, "radioactive");
    } 
    else if (q.match(/^halogens?$/i)) {
        r = getMatchingElements(17, "group");
    } 
    else if (q.match(/^transactinides?$/i)) {
        // there's no property that groups these guys together -- have to get them by atomic #
        r = getMatchingElements(104, "atomic_number");
        r.push(getMatchingElements(105, "atomic_number"));
        r.push(getMatchingElements(106, "atomic_number"));
        r.push(getMatchingElements(107, "atomic_number"));
        r.push(getMatchingElements(108, "atomic_number"));
        r.push(getMatchingElements(109, "atomic_number"));
        r.push(getMatchingElements(110, "atomic_number"));
        r.push(getMatchingElements(111, "atomic_number"));
    } 
      
    // search by row/period
    else if (q.match(/^row[-\s]?[1-7]$/i) || q.match(/^period[-\s]?[1-7]$/i)) {
        q = q.replace('row', '' );
        q = q.replace('period', '' );
        q = q.replace('-', '' );
        q = parseInt(q, 10);
        r = getMatchingElements(q, "period");
    } 
      
    // search by group
    else if (q.match(/^group[-\s]?\d+$/i)) {
        q = q.replace('group', '' );
        q = q.replace('-', '' );
        q = parseInt(q, 10);
        r = getMatchingElements(q, "group");
    } 
      
    //   lastly, search by name
    else r = getMatchingElements(q, "name");

    return r;
}


export default runQuery;