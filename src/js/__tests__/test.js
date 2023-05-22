import sortedHealth from "../app";

const heroSkill = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

const sortedHeroSkill = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
];

test('sorted heroes', () => {
    const sortedHeroes = sortedHealth(heroSkill);
    expect(sortedHeroes).toEqual(sortedHeroSkill);
});