function calcularImposto(renda) {
    if (renda <= 2428.80) {
        return 0;
    } else if (renda <= 2826.65) {
        return (renda * 0.075) - 182.16;
    } else if (renda <= 3751.05) {
        return (renda * 0.15) - 394.16;
    } else if (renda <= 4664.68) {
        return (renda * 0.225) - 675.49;
    }
    return (renda * 0.275) - 908.73;
}

module.exports = { calcularImposto };