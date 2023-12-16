function handleWeirdConfigurations(atomicNumber) {

    switch(atomicNumber) {
        case 24:
            return ["[Ar]", "3d<sup>5</sup>", "4s<sup>1</sup>"];
        case 29:
            return ["[Ar]", "3d<sup>10</sup>", "4s<sup>1</sup>"];
        case 41:
            return ["[Kr]", "4d<sup>4</sup>", "5s<sup>1</sup>"];
        case 42:
            return ["[Kr]", "4d<sup>5</sup>", "5s<sup>1</sup>"];
        case 44:
            return ["[Kr]", "4d<sup>7</sup>", "5s<sup>1</sup>"];
        case 45:
            return ["[Kr]", "4d<sup>8</sup>", "5s<sup>1</sup>"];
        case 46:
            return ["[Kr]", "4d<sup>10</sup>"];
        case 47:
            return ["[Kr]", "4d<sup>10</sup>", "5s<sup>1</sup>"];
        case 57:
            return ["[Xe]", "5d<sup>1</sup>", "6s<sup>2</sup>"];
        case 58:
            return ["[Xe]", "4f<sup>1</sup>", "5d<sup>1</sup>", "6s<sup>2</sup>"];
        case 64:
            return ["[Xe]", "4f<sup>7</sup>", "5d<sup>1</sup>", "6s<sup>2</sup>"];
        case 78:
            return ["[Xe]", "4f<sup>14</sup>", "5d<sup>9</sup>", "6s<sup>1</sup>"];
        case 79:
            return ["[Xe]", "4f<sup>14</sup>", "5d<sup>10</sup>", "6s<sup>1</sup>"];
        case 89:
            return ["[Xe]", "4f<sup>14</sup>", "5d<sup>10</sup>", "6s<sup>2</sup>"];
        case 90:
            return ["[Rn]", "6d<sup>2</sup>", "7s<sup>2</sup>"];
        case 91:
            return ["[Rn]", "5f<sup>2</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
        case 92:
            return ["[Rn]", "5f<sup>3</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
        case 93:
            return ["[Rn]", "5f<sup>4</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
        case 96:
            return ["[Rn]", "5f<sup>7</sup>", "6d<sup>1</sup>", "7s<sup>2</sup>"];
        case 103:
            return ["[Rn]", "5f<sup>14</sup>", "7s<sup>2</sup>", "7p<sup>1</sup>"];
        default:
            return []
    }
}

function getRawElectronConfig(atomicNumber) {
    let electronConfig = [];
    let remainingElectrons = atomicNumber;

    const s = 2;
    const p = 6;
    const d = 10;
    const f = 14;
    const g = 99;
    const i = 99;
    const h = 99;

    const subshells = [
        {subshell: "1s", type: s, },
        {subshell: "2s", type: s, },
        {subshell: "2p", type: p, },
        {subshell: "3s", type: s, },
        {subshell: "3p", type: p, },
        {subshell: "4s", type: s, },
        {subshell: "3d", type: d, },
        {subshell: "4p", type: p, },
        {subshell: "5s", type: s, },
        {subshell: "4d", type: d, },
        {subshell: "5p", type: p, },
        {subshell: "6s", type: s, },
        {subshell: "4f", type: f, },
        {subshell: "5d", type: d, },
        {subshell: "6p", type: p, },
        {subshell: "7s", type: s, },
        {subshell: "5f", type: f, },
        {subshell: "6d", type: d, },
        {subshell: "7p", type: p, },
        {subshell: "5g", type: g, },
        {subshell: "6f", type: f, },
        {subshell: "7d", type: d, },
        {subshell: "6g", type: g, },
        {subshell: "7f", type: f, },
        {subshell: "6h", type: h, },
        {subshell: "7g", type: g, },
        {subshell: "7h", type: h, },
        {subshell: "7i", type: i, },
    ];

    let index = 0;
    for (index; index < subshells.length && remainingElectrons > 0; index++) {
        const subshell = subshells[index];
        let result = subshell.subshell;
        if (remainingElectrons > subshell.type) { result = result + `<sup>${subshell.type}</sup>` }
        else { result = result + `<sup>${remainingElectrons}</sup>` }
        electronConfig.push(result);
        remainingElectrons = remainingElectrons - subshell.type;
    }
    return electronConfig;
}


function removeCommonElements(firstArray, secondArray) {
    // remove elements from the 1st array that appear in the 2nd array
    return firstArray.filter(subshell => !secondArray.includes(subshell));
}


export default function getElectronConfig(atomicNumber) {
    let electronConfig = getRawElectronConfig(atomicNumber);

    if (atomicNumber > 2 ) { 
        let nobleGasSymbol = "[He]";
        let abbrevConfig = [];
        let nobleGasConfig = [];
        
        if (atomicNumber > 86) { 
            nobleGasConfig = getRawElectronConfig(86);
            nobleGasSymbol = "[Rn]";
        } else if (atomicNumber > 54) { 
            nobleGasConfig = getRawElectronConfig(54);
            nobleGasSymbol = "[Rn]";
        } else if (atomicNumber > 36) { 
            nobleGasConfig = getRawElectronConfig(36);
            nobleGasSymbol = "[Kr]";
        } else if (atomicNumber > 18) { 
            nobleGasConfig = getRawElectronConfig(18);
            nobleGasSymbol = "[Ar]";
        } else if (atomicNumber > 10) { 
            nobleGasConfig = getRawElectronConfig(10);
            nobleGasSymbol = "[Ne]";
        } else { 
            nobleGasConfig = getRawElectronConfig(2);
            nobleGasSymbol = "[He]";
        }
        abbrevConfig = removeCommonElements(electronConfig, nobleGasConfig);
        abbrevConfig.splice(0, 0, nobleGasSymbol);
        electronConfig = abbrevConfig;
    }

    const weirdElectronConfigurations = [
        24, 29, 41, 42, 44, 45, 46, 47, 57, 58, 64, 78, 79, 89, 90, 91, 92, 93, 96, 103
    ];

    if (weirdElectronConfigurations.includes(atomicNumber)) {
        electronConfig = handleWeirdConfigurations(atomicNumber);
    }

    return `${electronConfig.join(" ")}`;
}  