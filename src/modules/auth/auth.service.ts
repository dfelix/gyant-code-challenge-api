import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/modules/users/entities/user.entity';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: User = await this.usersService.findOne({ email });
    if (!user) throw new NotFoundException('user-not-found');

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    }
    return null;
  }

  async signPayload(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
