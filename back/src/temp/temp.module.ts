import { Module } from '@nestjs/common';
import { TempController } from './temp.controller';
import { TempService } from './temp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temp } from './temp.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Temp]),
  ],
  controllers: [ TempController ],
  providers:   [ TempService ]
})
export class TempModule {
}
