// @ts-ignore //TODO: posprzątać

// import * as crypto from 'crypto';
import { createHmac } from 'node:crypto';

export const hashPwd = (p: string): string => {
  const hmac = createHmac(
    'sha512',
    'ksajdlask ndla dsa oifa isdoaw023- e02934ur8sasde98ay-) ie-0#@I*U)(U)i9_)W I_#)U_#)(-',
  )
    .update(p)
    .digest('hex');
  console.log(`hasło:${p}.`);
  return hmac;
};

// export const hashPwd = (p: string): string => {
//   const hmac = crypto
//     .createHmac(
//       'sha512',
//       'ksajdlask ndla dsa oifa isdoaw023- e02934ur8sasde98ay-) ie-0#@I*U)(U)i9_)W I_#)U_#)(-',
//     )
//     .update(p)
//     .digest('hex');
//   return hmac;
// };
