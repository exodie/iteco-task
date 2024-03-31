import { SimpleFaker, faker } from "@faker-js/faker";
import { type Transportation } from "@/shared/types";

const generateRandomDate = (): Date => faker.date.future();

const generateRandomTransportation = (): Transportation => {
  return {
    route: {
      from: {
        city: faker.location.city(),
        area: faker.location.state({ abbreviated: true }),
      },
      to: {
        city: faker.location.city(),
        area: faker.location.state({ abbreviated: true }),
      },
      distance: faker.number.int({ min: 500, max: 2000 }),
      addPoints:
        faker.number.int({ min: 1, max: 100 }) >= 70
          ? new SimpleFaker().helpers.arrayElements([
              {
                city: faker.location.city(),
                area: faker.location.state({ abbreviated: true }),
              },
              {
                city: faker.location.city(),
                area: faker.location.state({ abbreviated: true }),
              },
              {
                city: faker.location.city(),
                area: faker.location.state({ abbreviated: true }),
              },
            ])
          : null,
    },
    cargo: {
      typeOfCargo: faker.commerce.product(),
      tonnage: faker.number.int({ min: 2.5, max: 10 }),
      volume: [
        faker.number.int({ min: 5, max: 50 }),
        faker.number.int({ min: 50, max: 90 }),
      ],
      dateInfo: {
        type: new SimpleFaker().helpers.arrayElement([
          "Погрузка",
          "Выгрузка",
          "Догрузка",
        ]),
        date: generateRandomDate().toISOString(),
      },
      numberOfCargo: faker.commerce.isbn(),
      typeOfTrailer: new SimpleFaker().helpers.arrayElement(["Тент", "Термос"]),
      typeOfLoading: new SimpleFaker().helpers.arrayElement([
        "Полная",
        "Неполная",
      ]),
    },
    payment: {
      amount: faker.number.int({ min: 50_000, max: 250_000 }),
      FAL: faker.number.int({ min: 2500, max: 10_000 }),
    },
  };
};

export const getTransportations = Array.from({ length: 1_000 }, () =>
  generateRandomTransportation()
);
