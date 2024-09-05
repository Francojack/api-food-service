import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SavoryService } from './savory.service';
import { CreateSavoryDto } from './dto/create-savory.dto';
import { UpdateSavoryDto } from './dto/update-savory.dto';

@Controller('savory')
export class SavoryController {
  constructor(private readonly savoryService: SavoryService) {}

  @Post()
  create(@Body() createSavoryDto: CreateSavoryDto) {
    return this.savoryService.create(createSavoryDto);
  }

  @Get()
  findAll() {
    return this.savoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavoryDto: UpdateSavoryDto) {
    return this.savoryService.update(+id, updateSavoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savoryService.remove(+id);
  }
}
