function orbitalPopulation () {
    let max_shell = 19;
    let limit = 1;
    let to_add = 1;
    let hit_limit = false;
    let result = 0;
    let orbital_population = [];

    for (let i=1; i <= max_shell; i++) {
        result = result + to_add;
        if (to_add === 1) {
            if (hit_limit) {
                limit = limit + 2;
                hit_limit = false;
            } 
            else hit_limit = true;
            to_add = limit;
        } else to_add = to_add - 2;
        orbital_population.push(result);
    }
    let orbital_sizes = orbital_population.map(o => o*2);

    console.log(orbital_sizes);

    let orbital_data = [];

    for (let i=0; i < orbital_sizes.length; i++) {
        if (i === 0) orbital_data.push({orbital: "s", size: 2});
        else {
            let diff = orbital_sizes[i] - orbital_sizes[i-1];
            switch (diff) {
                case 2:
                    orbital_data.push({orbital: "s", size: orbital_sizes[i]});
                    break;
                case 6:
                    orbital_data.push({orbital: "p", size: orbital_sizes[i]});
                    break;
                case 10:
                    orbital_data.push({orbital: "d", size: orbital_sizes[i]});
                    break;
                case 14:
                    orbital_data.push({orbital: "f", size: orbital_sizes[i]});
                    break;
                default:
                    console.log("good one, chief");
            }
        }
    }

    return orbital_data;
}

export default orbitalPopulation;