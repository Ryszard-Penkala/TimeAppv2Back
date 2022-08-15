import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';

export interface JwtPayload {
  id: string;
}

function cookieExtractor(req: any): null | string {
  return (req && req.cookies) ? (req.cookies?.jwt ?? null) : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey:
        'ALSKJMDAPAQ)D+As0do_)kdoapsk-DA)Sd=)ASkd-q0I@+)IDKa=ikda=IADW+A_Id=a_OWs=d-OASda+AWD+PQA+_W@#OD#(#$*&YR^*#$GADSPD)+AD_SDPAA+_DSD+AS+Ad0A_DIKA_s', //TODO:przechować poza kodem gdzieś
    });
  }

  async validate(payload: JwtPayload, done: (error, user) => void) {
    if (!payload || !payload.id) {
      return done(new UnauthorizedException(), false);
    }
    const user = await User.findOne({ where: { currentTokenId: payload.id } });
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}
