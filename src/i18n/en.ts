import type { Dictionary } from './de';

export const en: Dictionary = {
  lang: 'en',
  locale: 'en',
  path: '/en/',
  altPath: '/',
  meta: {
    title: 'Café Lumière — Specialty coffee, pâtisserie and brunch in Zürich',
    description:
      'Café Lumière is a fictional café concept in Zürich: specialty coffee, pâtisserie and brunch in a room of plaster, walnut and limestone. A concept project by Forma Studio.',
  },
  nav: {
    menu: 'Menu',
    room: 'Room',
    visit: 'Visit',
    open: 'Menu',
    close: 'Close',
    primary: 'Main navigation',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    label: 'Café Lumière · Zürich',
    headline: ['Morning takes', 'its time here.'],
    sub: 'Specialty coffee, pâtisserie and brunch in the light of a Zürich morning.',
    alt: 'The Café Lumière room in the early morning: an arched niche behind the walnut counter, limestone floor in sunlight.',
    scroll: 'Continue',
  },
  statement: {
    label: 'The café',
    heading: 'A room for first light',
    lead: 'Lumière means light. The name is our floor plan: tall east-facing windows, pale plaster, and a limestone floor that carries the sun across the room.',
    body: [
      'In the morning the light falls in long bands across the tables; by midday it turns soft and even. We kept the room quiet enough for you to notice.',
      'With it comes what makes a good morning: carefully made coffee, pastry from our own oven, and a brunch that is in no hurry.',
    ],
  },
  offering: {
    label: 'Coffee & pâtisserie',
    heading: ['From the cup,', 'from the oven'],
    intro: 'Two things we make fresh every morning, and that belong together.',
    alt: 'A cappuccino in a speckled stoneware cup and a butter croissant on a walnut table, the counter in morning light behind.',
    notes: [
      {
        title: 'Coffee',
        text: 'A few roasts that change regularly. Each cup made to order.',
      },
      {
        title: 'Pâtisserie',
        text: 'Baked early each morning. When the case is empty, it is empty.',
      },
    ],
    link: 'See the menu',
  },
  menu: {
    label: 'A selection',
    heading: 'The menu',
    intro: 'A short menu that changes with the season.',
    note: 'Prices in CHF.',
    tablist: 'Menu categories',
    categories: [
      {
        id: 'kaffee',
        name: 'Coffee',
        items: [
          { name: 'Espresso', desc: 'Short and dense', price: '4.50' },
          { name: 'Cappuccino', desc: 'With whole milk or oat drink', price: '6.00' },
          { name: 'Flat white', desc: 'Double espresso, fine milk foam', price: '6.50' },
          { name: 'Hand filter', desc: 'Changing roast, brewed to order', price: '7.00' },
          { name: 'Cold brew', desc: 'Steeped cold for twelve hours', price: '6.50' },
        ],
      },
      {
        id: 'patisserie',
        name: 'Pâtisserie',
        items: [
          { name: 'Butter croissant', desc: 'Fresh from the oven every morning', price: '3.80' },
          { name: 'Nut croissant', desc: 'Hazelnut, not too sweet', price: '4.80' },
          { name: 'Berry tartlet', desc: 'Shortcrust, vanilla cream, seasonal berries', price: '7.50' },
          { name: 'Lemon tartlet', desc: 'Sharp, with torched meringue', price: '7.50' },
          { name: 'Brioche', desc: 'With butter and jam', price: '5.50' },
        ],
      },
      {
        id: 'brunch',
        name: 'Brunch',
        items: [
          { name: 'Bircher muesli', desc: 'Apple, hazelnut, yoghurt', price: '12.50' },
          { name: 'Sourdough bread', desc: 'Butter, jam, honey', price: '9.50' },
          { name: 'Poached egg', desc: 'On sourdough, with herbs and radish', price: '18.00' },
          { name: 'Scrambled eggs', desc: 'Chives, toasted brioche', price: '17.50' },
          { name: 'Lumière breakfast', desc: 'Croissant, bread, cheese, egg and a coffee', price: '26.00' },
        ],
      },
    ],
  },
  room: {
    label: 'Atmosphere',
    heading: 'The room',
    lifestyleAlt:
      'Two guests talking at a window table, the counter with its arched niche and a barista at work behind them.',
    text: [
      'One room, three materials. None of them is loud, and all of them look better in the light.',
      'The arch behind the counter is the only gesture. Everything else is allowed to be background: for conversation, for the newspaper, for a second cup.',
    ],
  },
  philosophy: {
    label: 'Approach',
    heading: 'Less, done well.',
    lead: 'A short menu, a quiet room and time for both. A morning rarely needs more.',
    points: [
      { title: 'Care', text: 'Five things done properly rather than twenty done roughly.' },
      { title: 'Calm', text: 'No music to talk over. No table that hurries you.' },
      { title: 'Light', text: 'The room follows the day, and we put nothing in its way.' },
    ],
  },
  visit: {
    label: 'Place & hours',
    heading: 'Visit',
    alt: 'Café Lumière seen from the street: large windows, two small tables on the pavement, a passer-by in the morning light.',
    placeLabel: 'Place',
    place: 'Zürich, Switzerland',
    hoursLabel: 'Opening hours',
    hours: [
      { days: 'Tuesday – Friday', time: '7.30 – 18.00' },
      { days: 'Saturday – Sunday', time: '8.30 – 17.00' },
      { days: 'Monday', time: 'closed' },
    ],
    note: 'Café Lumière is a concept, not a real location. Opening hours and menu are part of the design.',
    text: 'It is at its best early, while the light still lies long across the tables. Come later and it is quieter, and with a little luck one of the two tables outside is free.',
  },
  footer: {
    disclosure:
      'A concept project by Forma Studio. Café Lumière is a fictional brand created as a design and development project.',
    tagline: 'Specialty coffee · Pâtisserie · Brunch',
    top: 'Back to top',
  },
};
