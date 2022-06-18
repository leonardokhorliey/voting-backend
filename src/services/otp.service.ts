/** @format */

import { Repository } from "../repository";
import { Otp } from "../models/Otp";
import { User } from "../models/User";


export class OtpService extends Repository<Otp> {
  
  constructor() {
    super(Otp);
  }
  public saveOTP = async (data: Partial<Otp>) => {
    return await this.create(data);
  };

  public verifyOTP = async (data: any) => {
    const otpRecord = await this.findOne({
      where: {
        code: data.otp.toString(),
        phone: data.phone,
      },
    });

    if (otpRecord) {
      User.update(
        { is_verified: 1 },
        { where: { phone: otpRecord.dataValues.phone } }
      );
    }

    return otpRecord;
  };
}
