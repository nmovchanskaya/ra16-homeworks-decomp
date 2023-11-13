/**
 * Rules Widget shows one rule
 * has next params:
 *
 * @param {string} img
 * @param {string} title
 * @param {string} link
 * @param {string} linkTitle
 */

export const RulesWidget = ({img, title, link, linkTitle}: any) => {
    return (
        <>
            {img}{title}{link}{linkTitle}
        </>
    )
}