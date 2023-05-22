export default function sortedHealth(heroes) {
    const sortedHero = heroes.sort((a,b) => b.health - a.health);
    return sortedHero
}