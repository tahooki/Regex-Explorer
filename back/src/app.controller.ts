import { Controller, Request, Get, Post, UseGuards, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  //
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return req.user;
  // }

  // constructor(private readonly authService: AuthService) {}
  //
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseInterceptors(ClassSerializerInterceptor) // 굳 작동완료.
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findOne(req.user.email);
  }

  @Post('user')
  async createUser(@Request() req) {
    return this.userService.createOne(req.body);
  }
}

// curl -X POST http://localhost:3000/user -d '{"name":"tahooki", "email": "tahooki12@gmail.com", "password": "good"}' -H "Content-Type: application/json"
// curl -X POST http://localhost:3000/user -d '{"email": "tahooki33@gmail.com", "name":"tahooki33", "password": "good33"}' -H "Content-Type: application/json"
// curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhaG9va2kyNEBnbWFpbC5jb20iLCJpYXQiOjE1Nzc1NTc4NDYsImV4cCI6MTU3NzU1NzkwNn0.EpoifFzgWkST_BFL6ihtVwHAIoW3TaoODNDnVZzILQg"
