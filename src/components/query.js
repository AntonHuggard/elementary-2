import atomsJSON from './atoms.json';


function getMatchingElements (term, str, attr) {
    let atoms = atomsJSON.atoms;
    let results = [];
    switch (attr) {
      case "name":
        term = term.replace(/\s/g, "");
        atoms.forEach(elmt => { if(elmt[attr].includes(term)) results.push(elmt.symbol) });
        break;
      case "symbol":
        atoms.forEach(elmt => { 
          term = term.toUpperCase();
          if((elmt[attr].toUpperCase().includes(term)) || (elmt[attr] === term)) results.push(elmt.symbol) 
        });
        break;
      default:
        atoms.forEach(element => {
          const data = str? element[attr].toLowerCase() : element[attr]
          if(data === term) results.push(element.symbol);
        });
    }
    return results;
}


function runQuery(input) {
    console.log("the human is searching for: " + input);

    let results = [];
    let query = input.toLowerCase();

    if ((query.length<3) && (query.match(/[a-z]{1,2}\s?$/i))) { 
        results = getMatchingElements(query, true, "symbol");
      } else if(query.match(/^\d{1,3}\s?$/i)) {
        results = getMatchingElements(parseInt(query, 10), false, "atomic_number");
      } else if (query.match(/non[-\s]?metals?\s?$/i)) {
        results = getMatchingElements("non-metal", true, "primary_class");
      } else if (query.match(/noble[-\s]?gas(es)?\s?$/i)) {
        results = getMatchingElements("noble_gas", true, "primary_class");
      } else if (query.match(/alkali[-\s]?metals?\s?$/i)) {
        results = getMatchingElements("alkali-metal", true, "primary_class");
      } else if (query.match(/alkaline[-\s]?earth[-\s]?metals?\s?$/i)) {
        results = getMatchingElements("alkaline-earth-metal", true, "primary_class");
      } else if (query.match(/metaux[-\s]?pauvres?\s?$/i)) {
        results = getMatchingElements("metaux_pauvres", true, "primary_class");
      } else if (query.match(/metalloids?\s?$/i)) {
        results = getMatchingElements("metalloid", true, "primary_class");
      } else if (query.match(/transition[-\s]?metals?\s?$/i)) {
        results = getMatchingElements("transition-metal", true, "primary_class");
      } else if (query.match(/^lanthanoids?\s?$/i) || query.match(/^lanthanides?\s?$/i)) {
        results = getMatchingElements("lanthanoid", true, "primary_class");
      } else if (query.match(/^actinoids?\s?$/i) || query.match(/^actinides?\s?$/i)) {
        results = getMatchingElements("actinoid", true, "primary_class");
      } else if (query.match(/unknowns?\s?$/i)) {
        results = getMatchingElements("unknown", true, "primary_class");
      } else if (query.match(/radio\s?active$/i)) {
        results = getMatchingElements(true, false, "radioactive");
      } else if (query.match(/^halogens?$/i)) {
        results = getMatchingElements(17, false, "group");
      } else if (query.match(/^transactinides?$/i)) {
        // there's no property that groups these guys together -- have to get them by atomic #
        results = getMatchingElements(104, false, "atomic_number");
        results.push(getMatchingElements(105, false, "atomic_number"));
        results.push(getMatchingElements(106, false, "atomic_number"));
        results.push(getMatchingElements(107, false, "atomic_number"));
        results.push(getMatchingElements(108, false, "atomic_number"));
        results.push(getMatchingElements(109, false, "atomic_number"));
        results.push(getMatchingElements(110, false, "atomic_number"));
        results.push(getMatchingElements(111, false, "atomic_number"));
      } else if (query.match(/^row[-\s]?[1-7]$/i) || query.match(/^period[-\s]?[1-7]$/i)) {
        query = query.replace('row', '' );
        query = query.replace('period', '' );
        query = query.replace('-', '' );
        query = parseInt(query, 10);
        results = getMatchingElements(query, false, "period");
      } else if (query.match(/^group[-\s]?\d+$/i)) {
        query = query.replace('group', '' );
        query = query.replace('-', '' );
        query = parseInt(query, 10);
        results = getMatchingElements(query, false, "group");
      } else results = getMatchingElements(query, false, "name");

    return results;
}


export default runQuery;