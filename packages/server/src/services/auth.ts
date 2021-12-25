import { LoginParams } from '@fb/common';
import { comparePassword, sign, verifyToken } from '../helpers/auth';
import { Unauthorized } from '../helpers/httpError';
import UserRepository from '../repositories/user';

export default class AuthenticationService {
  private readonly user: UserRepository;

  constructor(user: UserRepository) {
    this.user = user;
  }

  // eslint-disable-next-line class-methods-use-this
  private async signToken(id: string) {
    const token = await sign({
      user: { id },
    });

    return token;
  }

  async login({ email, password }: LoginParams) {
    const user = await this.user.findOne({ email });
    if (!user) throw new Unauthorized('Invalid Credentials');

    const matched = await comparePassword(password, user.password);
    if (!matched) throw new Unauthorized('Invalid Credentials');

    const token = await this.signToken(user.id);

    return {
      user,
      token,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  verify({ token, secret }: { token: string; secret?: string }) {
    const decoded = verifyToken(token, secret);
    return decoded;
  }
}
