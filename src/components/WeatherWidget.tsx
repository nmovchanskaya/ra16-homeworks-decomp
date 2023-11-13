/**
 * Weather Widget shows information about the weather
 * has next params:
 *
 * @param {string} img
 * @param {string} tempCur
 * @param {string} tempMin
 * @param {string} tempMax
 */

export const WeatherWidget = ({img, tempCur, tempMin, tempMax}: any) => {
    return (
        <>
            {img}{tempCur}{tempMin}{tempMax}
        </>
    )
}
