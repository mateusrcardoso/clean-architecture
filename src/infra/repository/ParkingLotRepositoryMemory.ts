import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
    parkingLots: ParkingLot[] = [new ParkingLot('shopping', 5, 8, 22, 0)];
    parkedCars: ParkedCar[] = [];

    getParkingLot(code: string): Promise<ParkingLot | undefined> {
        const parkingLot = this.parkingLots
        .find(parkingLot => parkingLot.code === code);
        if (parkingLot !== undefined) {
            parkingLot.occupiedSpaces = this.parkedCars.length;
        }
        return Promise.resolve(parkingLot);
    }

    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push({code, plate, date});
    }
}
