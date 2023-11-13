/**
 * News Item shows one news item
 * has next params:
 *
 * @param {string} img
 * @param {string} title
 * @param {string} link
 * @param {string} category
 */

export const NewsItem = ({img, title, link, category}: any) => {
    return (
        <>
            {img}{title}{link}{category}
        </>
    )
}
