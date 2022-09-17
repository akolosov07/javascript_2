/* Создайте функцию mortgage() для нахождения аннуитетного ипотечного платежа. Экспортируйте её */

export const mortgage = (S, p, n) => {
    p /= 1200;
    n *= 12;
    return S * p / (1 - (1 + p) ** (-n));
}

export const overpayment = (S, p, n) => {
    return n * 12 * mortgage(S, p, n) - S;
}