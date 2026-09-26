export type MenuItem = {
  name: string;
  description: string;
  price: number;
  /** Short dietary / kitchen notes rendered as metadata next to the dish. */
  tags?: string[];
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    blurb: "Small plates from the edge of the fire.",
    items: [
      {
        name: "Ember Bread & Smoked Butter",
        description:
          "Sourdough baked in the coals, whipped butter smoked over oak, flaked salt.",
        price: 320,
        tags: ["V"],
      },
      {
        name: "Charred Beets, Goat Cheese",
        description:
          "Fire-roasted beets, whipped chèvre, candied walnut, beetroot reduction.",
        price: 460,
        tags: ["V", "GF"],
      },
      {
        name: "Tandoori Prawns",
        description:
          "Tiger prawns, ajwain butter, burnt lime, green chilli oil.",
        price: 640,
        tags: ["GF"],
        signature: true,
      },
      {
        name: "Flame-Kissed Chicken Wings",
        description:
          "Grilled over mango wood, gochujang glaze, toasted sesame, scallion.",
        price: 480,
      },
      {
        name: "Smoked Aubergine Dip",
        description:
          "Fire-charred aubergine, tahini, pomegranate, charcoal flatbread.",
        price: 420,
        tags: ["V"],
      },
    ],
  },
  {
    id: "soups-salads",
    label: "Soups & Salads",
    blurb: "Market leaves and slow warmth.",
    items: [
      {
        name: "Burnt Tomato Soup",
        description:
          "Flame-blistered tomatoes, smoked garlic cream, basil oil, grilled crouton.",
        price: 380,
        tags: ["V", "GF"],
      },
      {
        name: "Ember Caesar",
        description:
          "Charred baby gem, coal-smoked chicken, aged parmesan, sourdough crumb.",
        price: 520,
      },
      {
        name: "Roasted Pumpkin & Feta",
        description:
          "Fire-roasted pumpkin, whipped feta, toasted seeds, sage brown butter.",
        price: 480,
        tags: ["V", "GF"],
      },
      {
        name: "Smoked Fish Ceviche",
        description:
          "Line-caught fish cured in lime, coconut milk, chilli, curry leaf oil.",
        price: 560,
        tags: ["GF"],
      },
    ],
  },
  {
    id: "from-the-fire",
    label: "From the Fire",
    blurb: "Cooked over oak, ash and patience — the heart of the kitchen.",
    items: [
      {
        name: "Ember-Grilled Tenderloin",
        description:
          "300g grass-fed tenderloin, bone-marrow butter, charred shallot, jus gras.",
        price: 1450,
        tags: ["GF"],
        signature: true,
      },
      {
        name: "Coal-Roasted Half Chicken",
        description:
          "Brined for 24 hours, roasted in embers, harissa jus, smoked garlic.",
        price: 980,
      },
      {
        name: "Charred Citrus Salmon",
        description:
          "Norwegian salmon, burnt orange glaze, fennel pollen, charred lemon.",
        price: 1240,
        tags: ["GF"],
        signature: true,
      },
      {
        name: "Fire-Roasted Heirloom Vegetables",
        description:
          "Seasonal vegetables roasted in the coals, romesco, herb oil, ash crumble.",
        price: 760,
        tags: ["V", "GF"],
      },
      {
        name: "Lamb Chops, Kashmiri Chilli",
        description:
          "Rack of lamb, Kashmiri chilli rub, mint yogurt, grilled pear.",
        price: 1580,
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    blurb: "Composed plates from the pass.",
    items: [
      {
        name: "Ember Risotto",
        description:
          "Carnaroli rice, roasted mushroom, truffle cream, aged parmesan, pine nuts.",
        price: 890,
        tags: ["V", "GF"],
      },
      {
        name: "Miso Glazed Seabass",
        description:
          "Pan-seared seabass, white miso, bok choy, dashi beurre blanc.",
        price: 1180,
      },
      {
        name: "Ember Smash Burger",
        description:
          "Double patty, smoked cheddar, burnt-onion mayo, pickles, coal bun.",
        price: 720,
      },
      {
        name: "Handmade Rigatoni",
        description:
          "Slow-braised short rib, San Marzano tomatoes, gremolata, pecorino.",
        price: 840,
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    blurb: "For the middle of the table.",
    items: [
      {
        name: "Charred Broccolini",
        description: "Chilli, garlic, almond, lemon.",
        price: 340,
        tags: ["V", "GF"],
      },
      {
        name: "Coal-Baked Potatoes",
        description: "Sour cream, chive, crispy shallots.",
        price: 320,
        tags: ["V", "GF"],
      },
      {
        name: "Grilled Corn, Chipotle Butter",
        description: "Flame-charred sweetcorn, lime, cotija.",
        price: 300,
        tags: ["V", "GF"],
      },
      {
        name: "Sourdough & Cultured Butter",
        description: "Baked hourly in the mouth of the oven.",
        price: 220,
        tags: ["V"],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    blurb: "A quiet finish.",
    items: [
      {
        name: "Smoked Chocolate Tart",
        description:
          "Dark chocolate ganache, oak smoke, smoked sea salt, creme fraiche.",
        price: 480,
        tags: ["V"],
        signature: true,
      },
      {
        name: "Burnt Basque Cheesecake",
        description: "Caramelised top, vanilla bean, macerated berries.",
        price: 440,
        tags: ["V"],
      },
      {
        name: "Charred Pineapple Sorbet",
        description: "Grilled pineapple, jaggery caramel, toasted coconut.",
        price: 380,
        tags: ["V", "GF"],
      },
      {
        name: "Poached Pear, Red Wine",
        description: "Spiced red wine poach, almond praline, vanilla cream.",
        price: 420,
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    blurb: "Low-intervention wines and smoke-touched cocktails.",
    items: [
      {
        name: "Smoked Old Fashioned",
        description: "Bourbon, oak smoke, burnt orange, bitters.",
        price: 650,
        signature: true,
      },
      {
        name: "Ember Negroni",
        description: "Charred rosemary gin, campari, sweet vermouth.",
        price: 620,
      },
      {
        name: "Charred Lime Sour",
        description: "Grilled lime, white rum, demerara, black salt.",
        price: 580,
      },
      {
        name: "House Kombucha",
        description: "Brewed in-house, rotating seasonal flavour.",
        price: 280,
        tags: ["V", "GF"],
      },
      {
        name: "Single-Origin Pour Over",
        description: "Chikmagalur beans, roasted weekly.",
        price: 260,
        tags: ["V", "GF"],
      },
    ],
  },
];

export const inr = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
