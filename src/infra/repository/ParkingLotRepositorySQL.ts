import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from '../database/database';

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
    async getParkingLot(code: string): Promise<ParkingLot | undefined> {
        // const parkingLot = await database.oneOrNone('select * from ');
        throw new Error("Method not implemented.");
    }
    saveParkedCar(code: string, plate: string, date: Date): void {
        throw new Error("Method not implemented.");
    }
    
}
