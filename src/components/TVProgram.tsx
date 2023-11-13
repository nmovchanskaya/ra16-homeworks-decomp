/**
 * TV Program shows one TV program
 * has next params:
 *
 * @param {string} time
 * @param {string} title
 * @param {string} channel
 * @param {string} link
 */

export const TVProgram = ({time, title, channel, link}: any) => {
    return (
        <>
            {time}{title}{channel}{link}
        </>
    )
}
