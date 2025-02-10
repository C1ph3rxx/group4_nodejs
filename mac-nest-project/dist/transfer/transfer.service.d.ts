import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { Model } from 'mongoose';
import { Transfer } from './schemas/transfer.schema';
export declare class TransferService {
    private userModel;
    constructor(userModel: Model<Transfer>);
    create(createTransferDto: CreateTransferDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTransferDto: UpdateTransferDto): string;
    remove(id: number): string;
}
