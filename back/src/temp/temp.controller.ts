import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Temp } from './temp.entity';
import { AuthGuard } from '@nestjs/passport';
import { TempService } from './temp.service';

@Crud({
  model: {
    type: Temp
  }
})
// @UseGuards(AuthGuard('jwt')) //  될까?
@Controller('temp')
export class TempController implements CrudController<Temp> {
  constructor(public service: TempService) {}
}
