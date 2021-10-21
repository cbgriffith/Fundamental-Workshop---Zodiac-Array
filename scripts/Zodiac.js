export const Zodiac = (zodiac) => {
    return `
        <section class="zodiac-card">
            <div class="zodiac__id">ID: ${zodiac.id}</div>
            <div class="zodiac__name">Name: ${zodiac.name}</div>
            <div class="zodiac__mascot">Mascot: ${zodiac.mascot}</div>
            <div class="zodiac__dates">Dates: ${zodiac.dates}</div>
            <div class="zodiac__element">Element: ${zodiac.element}</div>
            <div class="zodiac__animal">Animal: ${zodiac.wvAnimal}</div>
        </section><br>
    `
}