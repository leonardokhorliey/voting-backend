import { injectable } from "tsyringe";
import { Repository } from "../repository";
import { User } from "../models/User";
import { Op } from "sequelize";
import { sequelize } from "../../sequelize";
import { OtpService } from "./otp.service";
import { otpGenerator } from "../utils/authentication";
import { addIntervaltoDate } from "../utils/func";
import { config } from "../config/config";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(config.sendgrid.sendgrid_api_key);

@injectable()
export class UserService extends Repository<User> {
  // private repository
  constructor(
    private otpService: OtpService
  ) {
    super(User);
  }
  public saveUser = async (userData: User): Promise<User> => {
    let check = await this.checkDuplicate(userData);
    if (check) {
      return null;
    } else {
      let newUser: any = await this.create(userData);
      await this.otpService.saveOTP({
        email: newUser.email,
        phone: newUser.phone,
        code: otpGenerator(),
        expiration_time: addIntervaltoDate(new Date(), 10, "minute"),
        purpose: "login"
      });
      return newUser;
    }
  };

  public findAllUsers = async () => {
    return await this.findAll();
  };

  private checkDuplicate = async (data) => {
    let check = await sequelize.query(
      `SELECT * FROM Users WHERE email=:email OR phone=:phone`,
      {
        replacements: { email: data.email, phone: data.phone },
      }
    );
    return check[0].length == 0 ? null : check;
  };

  public loginUser = async (data) => {
    let user = await this.findOne({
      where: {
        [Op.or]: [
          {
            email: data.email,
          },
          {
            phone: data.phone,
          },
        ],
      },
      
    });

    return user;
  };

  public verifyOTP = async (data) => {
    return this.otpService.verifyOTP(data);
  };

  
}