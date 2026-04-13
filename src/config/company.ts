/** Central company configuration — single source of truth for all contact, brand, and business data. */
export const company = {
  name: "Tromtrade OÜ",
  legalName: "Tromtrade OÜ",
  regNr: "12314784",
  url: "https://tromtrade.ee",

  phone: "+37255644610",
  phoneDisplay: "5564 4610",
  whatsapp: "https://wa.me/37255644610",
  email: "info@tromtrade.ee",

  address: {
    street: "Lehe 11",
    city: "Tartu",
    region: "Tartumaa",
    country: "EE",
    full: "Lehe 11, Tartu linn",
  },

  geo: { lat: 58.378, lng: 26.729 },

  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "09:00",
    closes: "18:00",
    display: "E–R 9:00–18:00",
  },

  serviceAreas: ["Tartu", "Elva", "Otepää", "Võru", "Viljandi", "Valga", "Põlva"] as const,
  serviceAreaLabel: "Tartu ja Lõuna-Eesti",

  experience: { years: 10, installationsPerYear: 100 },
  guaranteeYears: 2,

  evulUrl: "https://evul.ee/liikmed/12314784-TROMTRADE-OU/sertifikaat",

  social: {
    whatsapp: "https://wa.me/37255644610",
  },
} as const;

export type Company = typeof company;
