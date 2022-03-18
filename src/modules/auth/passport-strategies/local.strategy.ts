import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const payload = await this.authService.validateUser(email, password);
    if (!payload) throw new UnauthorizedException('invalid-credentials');
    return payload;
  }
}