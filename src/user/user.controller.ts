import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { RegisterUserResponse } from '../../types/user/user.entity';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService) private userService: UserService,
  ) {
  }

  @Post('/register')
  register(
    @Body() newUser: RegisterDto,
  ): Promise<RegisterUserResponse> {
    console.log(newUser);
    return this.userService.register(newUser);
  }

  @Get('/register/:email')
  checkEmailAlreadyExist(
    @Param('email') email: string,
  ): Promise<boolean> {
    return this.userService.checkEmailAlreadyExist(email);
  }
}
