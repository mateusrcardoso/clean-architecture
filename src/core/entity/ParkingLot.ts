export default class ParkingLot {
    code: string;
    capacity: number;
    openHour: number;
    clouseHour: number;
    constructor (code: string, capacity: number, openHour: number, clouseHour: number) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.clouseHour = clouseHour;
    }

    isOpen(date: Date) {

    }
}
