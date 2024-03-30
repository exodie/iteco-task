export interface Transportation {
  route: RouteOfTransportation;
  cargo: CargoOfTransportation;
  payment: PaymentOfTransportation;
}

export type PaymentOfTransportation = {
  amount: number; // Тотал
  FAL: number; // ГСМ
};

export type CargoOfTransportation = {
  typeOfCargo: string;
  tonnage: number;
  volume: number[] | number; // number[] - для выставления "от - до" м^3
  dateInfo: {
    type: "Погрузка" | "Выгрузка" | "Догрузка" | "";
    date: string;
  };
  numberOfCargo: number; // Номер заявки
  typeOfTrailer: string; // Тент и тд
  typeOfLoading: string; // Полная или неполная
};

export type RouteOfTransportation = {
  from: TransportationRouteLoc;
  to: TransportationRouteLoc;
  distance: number;
  addPoints?: TransportationRouteLoc | null;
};

export type TransportationRouteLoc = {
  city: string;
  area: string;
};
