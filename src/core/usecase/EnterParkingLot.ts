import ParkedCar from "../entity/ParkedCar";
import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
    parkingLotRepository: ParkingLotRepository;

    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }

    async execute(code: string, plate: string, date: Date) {
        const parkingLot = await this.parkingLotRepository.getParkingLot(code);
        if (parkingLot === undefined) {
            throw new TypeError('The value was promised to always be there!');
          }
        const parkedCar = new ParkedCar(code, plate, date);
        if (!parkingLot.isOpen(parkedCar.date)) throw new Error('The parking lot is closed');
        if (parkingLot.isFull()) throw new Error('The parking lot is full');
        await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);
        return parkingLot;
    }
}
