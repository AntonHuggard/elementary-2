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
    return orbital_sizes;
}

export default orbitalPopulation;