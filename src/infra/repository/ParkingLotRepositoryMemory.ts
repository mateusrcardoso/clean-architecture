import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
    parkingLots = [
        {code: 'shopping',
        capacity: 5,
        openHour: 8,
        clouseHour: 22,
        occupiedSpaces: 0 }];
    parkedCars: ParkedCar[] = [];

    getParkingLot(code: string): Promise<ParkingLot | undefined> {
        const parkingLotData = this.parkingLots
        .find(parkingLot => parkingLot.code === code);
        if (parkingLotData !== undefined) {
            parkingLotData.occupiedSpaces = this.parkedCars.length;
            const parkingLot = ParkingLotAdapter.create(
                parkingLotData.code,
                parkingLotData.capacity,
                parkingLotData.openHour,
                parkingLotData.clouseHour,
                parkingLotData.occupiedSpaces);
                return Promise.resolve(parkingLot);
        }
        return Promise.resolve(parkingLotData);
    }

    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push({code, plate, date});
    }
}
