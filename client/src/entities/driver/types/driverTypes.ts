export interface Vehicle {
  name: string;
  licensePlate: string;
  specialStatus?: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  schedule: string;
  shift: string;
  vehicle: Vehicle;
  breaks: string[];
}
