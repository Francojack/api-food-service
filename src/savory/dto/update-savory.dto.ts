import { PartialType } from '@nestjs/mapped-types';
import { CreateSavoryDto } from './create-savory.dto';

export class UpdateSavoryDto extends PartialType(CreateSavoryDto) {}
