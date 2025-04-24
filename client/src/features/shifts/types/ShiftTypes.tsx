export interface Driver {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface ShiftStatus {
  active: string;
  onBreak: string;
  notActive: string;
}

export interface Shift {
  id: string;
  vehicle: string;
  licensePlate: string;
  carName: string;
  driver: Driver | string;
  startShift: string;
  endShift: string;
  startTerminal: string;
  endTerminal: string;
  zoneStart: string;
  breaks: string[];
  status: ShiftStatus | string;
  actions: {
    start: string;
    stop: string;
  };
}
