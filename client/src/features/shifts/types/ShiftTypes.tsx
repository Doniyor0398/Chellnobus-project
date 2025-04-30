export interface Shift {
  id: string;
  vehicle: string;
  driver: string;
  startShift: string;
  endShift: string;
  startTerminal: string;
  endTerminal: string;
  zoneStart: string;
  breaks: string[];
}
