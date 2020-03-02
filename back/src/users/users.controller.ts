import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from './users.entity';

@Crud({
  model: {
    type: [User]
  }
})
@Controller('users')
export class UsersController {
  constructor() {
  }
}
