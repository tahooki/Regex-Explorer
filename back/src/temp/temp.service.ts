import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Temp } from './temp.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TempService extends TypeOrmCrudService<Temp> {
  constructor(@InjectRepository(Temp) repo) {
    super(repo);
  }
}
