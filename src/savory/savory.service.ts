import { Injectable } from '@nestjs/common';
import { CreateSavoryDto } from './dto/create-savory.dto';
import { UpdateSavoryDto } from './dto/update-savory.dto';

@Injectable()
export class SavoryService {
  create(createSavoryDto: CreateSavoryDto) {
    return 'This action adds a new savory';
  }

  findAll() {
    return `This action returns all savory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} savory`;
  }

  update(id: number, updateSavoryDto: UpdateSavoryDto) {
    return `This action updates a #${id} savory`;
  }

  remove(id: number) {
    return `This action removes a #${id} savory`;
  }
}
