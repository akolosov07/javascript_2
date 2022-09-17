const mortgage = (S, p, n) => {
    p /= 1200;
    n *= 12;
    return S * p / (1 - (1 + p) ** (-n));
};

module.exports = mortgage;

const overpayment = (S, p, n) => {
    return n * 12 * mortgage(S, p, n) - S;
}

module.exports = overpayment;