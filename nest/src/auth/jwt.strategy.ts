import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({ // Jwt 전략 옵션 넣는 곳
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 베어러 토큰 옵션
      ignoreExpiration: false, // 뭐징?
      secretOrKey: jwtConstants.secret, // 이거 시크릿 키임
    });
  }

  async validate(payload: any) { // payload. sub가 뭘까? 아이값?
    return { userId: payload.sub, name: payload.name, email: payload.email };
  }
}
