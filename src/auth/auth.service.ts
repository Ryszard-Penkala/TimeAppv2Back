import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { AuthLoginDto } from './dto/auth-login.dto';
import { hashPwd } from '../utlis/hash-pwd';
import { User } from '../user/user.entity';
import { v4 as uuid } from 'uuid';
import { sign } from 'jsonwebtoken';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  private createToken(currentTokenId: string): {
    accessToken: string;
    expiresIn: number;
  } {
    const payload: JwtPayload = { id: currentTokenId };
    const expiresIn = 60 * 60 * 24;
    const accessToken = sign(
      payload,
      'ALSKJMDAPAQ)D+As0do_)kdoapsk-DA)Sd=)ASkd-q0I@+)IDKa=ikda=IADW+A_Id=a_OWs=d-OASda+AWD+PQA+_W@#OD#(#$*&YR^*#$GADSPD)+AD_SDPAA+_DSD+AS+Ad0A_DIKA_s', //TODO: przechować poza kodem gdzieś
      { expiresIn },
    );
    return {
      accessToken,
      expiresIn,
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token;
    let userWithThisToken = null;
    do {
      token = uuid();
      userWithThisToken = await User.findOne({
        where: { currentTokenId: token },
      });
    } while (!!userWithThisToken);
    user.currentTokenId = token;
    await user.save();

    return token;
  }

  async login(req: AuthLoginDto, res: Response): Promise<any> {
    try {
      const user = await User.findOne({
        where: {
          email: req.email,
          pwdHash: hashPwd(String(req.pwd)),
        },
      });
      console.log('email', req.email);
      console.log('pwd', hashPwd(String(req.pwd)));
      if (!user) {
        return res.json({ error: 'Invalid login data!' });
      }
      console.log(`${JSON.stringify(user)}`);
      const token = await ( this.createToken(await this.generateToken(user)));

      return res
        .cookie('jwt', token.accessToken, {
          secure: false, //TODO: `secure: trueJeżeliUżywaszHttps,`
          domain: 'localhost', //TODO: domainCiastka,
          httpOnly: true,
        })
        .json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }
}
