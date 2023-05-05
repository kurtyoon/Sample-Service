import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from '../entities/record.entity';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  create(@Body() createRecordDto: CreateRecordDto): Promise<Record> {
    return this.recordsService.create(createRecordDto);
  }

  @Get()
  findAll(): Promise<Record[]> {
    return this.recordsService.findAll();
  }

  @Delete(':no')
  remove(@Param('no') no: string): Promise<void> {
    return this.recordsService.remove(no);
  }
}
