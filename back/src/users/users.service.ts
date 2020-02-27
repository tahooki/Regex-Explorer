import { ClassSerializerInterceptor, Get, Injectable, UseInterceptors } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import * as bcrypt from 'bcrypt';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {
  }

  // 여기서 할게아니고 컨트롤러에서 해야할듯... 이게 쓰는곳이 2군대임
  // @UseInterceptors(ClassSerializerInterceptor) // 이게 작동이 안되면 plainToClass 를 쓰면 됨. 근데 이게 안되면 entity가 잘못 된거임 plainToClass 쓸일이 없슴.
  async findOne(email: string): Promise<User | undefined> {
    // const user = await this._userRepository.findOne({ email });
    const user = await User.findOne({ email }); // 레파짓토리 안쓰고 할 수 있슴. 굳
    return new User(user);
  }

  async createOne(user: User): Promise<User | undefined> {
    const userEntity = new User();
    userEntity.email = user.email;
    userEntity.password = await bcrypt.hash(user.password, 10); // 암호화 password 시킴
    userEntity.name = user.name;

    // return this._userRepository.save(userEntity);
    return userEntity.save();
  }
}

// curl -X POST http://localhost:3000/auth/login -d '{"email": "tahooki12@gmail.com", "password": "good"}' -H "Content-Type: application/json"
// curl -X POST http://localhost:3000/auth/login -d '{"email": "tahooki33@gmail.com", name: "tahooki33", "password": "good33"}' -H "Content-Type: application/json"
// curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"


