import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { RegisterUserResponse } from '../../types/user/user.entity';
import { User } from './user.entity';
import { hashPwd } from '../utlis/hash-pwd';

@Injectable()
export class UserService {

  filter(user: User): RegisterUserResponse {
    const { id, email } = user;
    return { id, email };
  }

  async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
    const user = new User();
    user.email = newUser.email;
    user.pwdHash = await (hashPwd(newUser.pwdHash));

    await user.save();
    return this.filter(user);
  }

  async checkEmailAlreadyExist(emailAddress: string): Promise<boolean> {
    const data = await User.find({
      where: { email: emailAddress },
    });
    return data.length ? true : false;
  }
}
