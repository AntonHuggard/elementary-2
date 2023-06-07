import atomsJSON from './atoms.json';


function getMatchingElements (term, str, attr) {
    let atoms = atomsJSON.atoms;
    let r = [];
    switch (attr) {
      case "name":
        term = term.replace(/\s/g, "");
        atoms.forEach(elmt => { if(elmt[attr].includes(term)) r.push(elmt.symbol) });
        break;
      case "symbol":
        atoms.forEach(elmt => { 
          term = term.toUpperCase();
          if((elmt[attr].toUpperCase().includes(term)) || (elmt[attr] === term)) r.push(elmt.symbol) 
        });
        break;
        case "atomic_mass":
            atoms.forEach(elmt => { 
                // add a 0.5 tolerance on atomic mass
                if((elmt[attr] <= (term+0.5) ) && (elmt[attr] >= (term-0.5) )) r.push(elmt.symbol) 
            });
            break;
        case "discovery_date":
            atoms.forEach(elmt => { 
                if (elmt[attr] === term) r.push(elmt.symbol) 
            });
            break;
        default:
        atoms.forEach(element => {
          const data = str? element[attr].toLowerCase() : element[attr]
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
        r = getMatchingElements(q, true, "symbol");
    } 
    // search by discovery date
    else if (
        (q.match(/^discover(y|ed)?\s\d{3,4}?\s?$/i)) || 
        (q.match(/^found\s\d{3,4}?\s?$/i)) ||
        (q.match(/^\d{4}$/)) ) {
        const year = q.replace(/\D/g,'');
        r = getMatchingElements(parseInt(year), true, "discovery_date");
    }
    // search by atomic number
    else if(q.match(/^\d{1,3}\s?$/i)) {
        r = getMatchingElements(parseInt(q, 10), false, "atomic_number");
    } 
    // search by atomic mass
    else if(q.match(/^\d{1,3}.?(\d{1,4})?\s?$/i)) {
        r = getMatchingElements(Number(q), false, "atomic_mass");
    } 
    
    // search by metalness
    else if (q.match(/non[-\s]?metals?\s?$/i)) r = getMatchingElements("non-metal", true, "primary_class");
    else if (q.match(/metalloids?\s?$/i)) {
        r = getMatchingElements("metalloid", true, "primary_class");
    }
    else if (q.match(/^metals?\s?$/i)) {
        r = getMatchingElements("metal", true, "metalness");
    }

    // search by block
    else if (q.match(/^[spdf][-\s]block?\s?$/i)) {
        const block = q[0];
        r = getMatchingElements(block, true, "block");
    }

        
    else if (q.match(/noble[-\s]?gas(es)?\s?$/i)) {
        r = getMatchingElements("noble_gas", true, "primary_class");
    } 
    else if (q.match(/alkali[-\s]?metals?\s?$/i)) {
        r = getMatchingElements("alkali-metal", true, "primary_class");
    } 
    else if (q.match(/alkaline[-\s]?earth[-\s]?metals?\s?$/i)) {
        r = getMatchingElements("alkaline-earth-metal", true, "primary_class");
    } 
    else if (q.match(/metaux[-\s]?pauvres?\s?$/i)) {
        r = getMatchingElements("metaux_pauvres", true, "primary_class");
    } 
     
    else if (q.match(/transition[-\s]?metals?\s?$/i)) {
        r = getMatchingElements("transition-metal", true, "primary_class");
    } 
    else if (q.match(/^lanthanoids?\s?$/i) || q.match(/^lanthanides?\s?$/i)) {
        r = getMatchingElements("lanthanoid", true, "primary_class");
    } 
    else if (q.match(/^actinoids?\s?$/i) || q.match(/^actinides?\s?$/i)) {
        r = getMatchingElements("actinoid", true, "primary_class");
    } 
    else if (q.match(/unknowns?\s?$/i)) {
        r = getMatchingElements("unknown", true, "primary_class");
    } 
    else if (q.match(/radio\s?active$/i)) {
        r = getMatchingElements(true, false, "radioactive");
    } 
    else if (q.match(/^halogens?$/i)) {
        r = getMatchingElements(17, false, "group");
    } 
    else if (q.match(/^transactinides?$/i)) {
        // there's no property that groups these guys together -- have to get them by atomic #
        r = getMatchingElements(104, false, "atomic_number");
        r.push(getMatchingElements(105, false, "atomic_number"));
        r.push(getMatchingElements(106, false, "atomic_number"));
        r.push(getMatchingElements(107, false, "atomic_number"));
        r.push(getMatchingElements(108, false, "atomic_number"));
        r.push(getMatchingElements(109, false, "atomic_number"));
        r.push(getMatchingElements(110, false, "atomic_number"));
        r.push(getMatchingElements(111, false, "atomic_number"));
    } 
      
    else if (q.match(/^row[-\s]?[1-7]$/i) || q.match(/^period[-\s]?[1-7]$/i)) {
        q = q.replace('row', '' );
        q = q.replace('period', '' );
        q = q.replace('-', '' );
        q = parseInt(q, 10);
        r = getMatchingElements(q, false, "period");
    } 
      
    else if (q.match(/^group[-\s]?\d+$/i)) {
        q = q.replace('group', '' );
        q = q.replace('-', '' );
        q = parseInt(q, 10);
        r = getMatchingElements(q, false, "group");
    } 
      
        //   lastly, search by name
    else r = getMatchingElements(q, false, "name");

    return r;
}


export default runQuery;