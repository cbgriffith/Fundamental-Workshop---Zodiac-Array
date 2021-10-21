import { useZodiac } from "./ZodiacDataProvider.js"
import { Zodiac } from "./Zodiac.js"

export const ZodiacList = () => {
    const zodiac = useZodiac()

    let zodiacHTMLRepresentations = "<h1>Zodiac List</h1>"
    for(const singleZodiacObject of zodiac) {
        zodiacHTMLRepresentations += Zodiac(singleZodiacObject)
    }
    document.querySelector(".zodiaclist").innerHTML += `
        <article class="zodiaclist">
            ${zodiacHTMLRepresentations}
        </article>
    `
}