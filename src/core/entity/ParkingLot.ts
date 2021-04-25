export default class ParkingLot {
    code: string;
    capacity: number;
    openHour: number;
    clouseHour: number;
    occupiedSpaces: number;
    constructor (code: string, capacity: number, openHour: number, clouseHour: number, occupiedSpaces: number) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.clouseHour = clouseHour;
        this.occupiedSpaces = occupiedSpaces;
    }

    isOpen(date: Date) {
        const hour = date.getHours();
        return (hour >= this.openHour && hour <= this.clouseHour);
    }
}
