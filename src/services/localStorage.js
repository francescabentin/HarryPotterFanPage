function get(variable, valorPorDefecto) {
    if (localStorage.getItem(variable) === null) {
        return valorPorDefecto;
    } else {
        return JSON.parse(localStorage.getItem(variable));
    }
}

function set(variable, valor) {
    localStorage.setItem(variable, JSON.stringify(valor));
}

function includes(variable) {
    return localStorage.getItem(variable) !== null;
}

function notIncludes(variable) {
    return localStorage.getItem(variable) === null;
}

const ls = { get, set, includes, notIncludes };

export default ls;
