import ParkedCar from "../entity/ParkedCar";
import ParkingLot from "../entity/ParkingLot";

export default interface ParkingLotRepository {
    getParkingLot(code: string) : Promise<ParkingLot | undefined>;
    saveParkedCar(code: string, plate: string, date: Date) : void;
}
