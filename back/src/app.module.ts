import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TempModule } from './temp/temp.module';
import { Temp } from './temp/temp.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'regex-explorer',
      entities: [User, Temp],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TempModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
