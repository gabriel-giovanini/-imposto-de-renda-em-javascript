const { calcularImposto } = require('./imposto');

test('Faixa isenta', () => {
    expect(calcularImposto(2000)).toBe(0);
});

test('Faixa 7,5%', () => {
    expect(calcularImposto(2500)).toBeCloseTo(5.34, 2);
});

test('Faixa 15%', () => {
    expect(calcularImposto(3000)).toBeCloseTo(55.84, 2);
});

test('Faixa 22,5%', () => {
    expect(calcularImposto(4000)).toBeCloseTo(224.51, 2);
});

test('Faixa 27,5%', () => {
    expect(calcularImposto(5000)).toBeCloseTo(466.27, 2);
});