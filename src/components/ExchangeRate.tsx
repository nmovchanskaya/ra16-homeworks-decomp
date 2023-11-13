/**
 * Exchange Rate shows one exchange rate details
 * has next params:
 *
 * @param {string} curName
 * @param {string} cur2Name
 * @param {number} rate
 * @param {string} change
 */

export const ExchangeRate = ({curName, cur2Name, rate, change}: any) => {
    return (
        <>
            {curName}{cur2Name}{rate}{change}
        </>
    )
}
