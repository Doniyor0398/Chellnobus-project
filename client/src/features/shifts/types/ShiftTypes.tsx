// types/ShiftTypes.ts

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

export interface ShiftActions {
  start: string;
  stop: string;
}

// Основной интерфейс смены
export interface Shift {
  id: string;
  vehicle: string;
  licensePlate: string;
  carName: string;
  driver: Driver | string; // Может быть как объектом, так и строкой
  startShift: string;
  endShift: string;
  startTerminal: string;
  endTerminal: string;
  zoneStart: string;
  breaks: string[];
  status: ShiftStatus | string; // Может быть как объектом, так и строкой
  actions: ShiftActions;
}

// Тип для значений формы (без id и с упрощенными типами)
export interface ShiftFormValues {
  vehicle: string;
  licensePlate: string;
  carName: string;
  driver: string; // В форме всегда работаем со строкой
  startShift: string;
  endShift: string;
  startTerminal: string;
  endTerminal: string;
  zoneStart: string;
  breaks: string[];
  status: ShiftStatus; // В форме всегда работаем с объектом
}

// Тип для обновления статуса
export interface ShiftStatusUpdate {
  active?: string;
  onBreak?: string;
  notActive?: string;
}

// Вспомогательные типы для API
export interface ApiShift extends Omit<Shift, 'id'> {}
export interface ApiShiftResponse extends Shift {}
