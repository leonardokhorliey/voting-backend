/** @format */

import { injectable } from 'tsyringe'
import { Controller } from './'
import { UserService } from '../services/user.service'
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { encrypt, decrypt } from '../utils/encryption'
import { config } from '../config/config'

@injectable()
class AuthController extends Controller {
  // private userRepository
  constructor(
    private userService: UserService
  ) {
    super()
  }

  getUsers = async (req, res) => {
    try {
      let response = await this.userService.findAllUsers()
      return this.response(res, 200, false, response, '')
    } catch (error) {
      return this.response(res, 500, true)
    }
  }

  createUser = async (req, res) => {
    try {
      let response = await this.userService.saveUser(req.body)
      return response
        ? (delete response.dataValues.password,
          this.response(res, 201, false, response, ''))
        : this.response(res, 400, true, false, 'User already exists')
    } catch (err) {
      console.log(err)
      return this.response(res, 500, true)
    }
  }

  login = async (req, res) => {
    try {
      let response = await this.userService.loginUser(req.body)
      if (response) {
        if (!bcrypt.compareSync(req.body.password, response.password)) {
          return this.response(res, 401, true, false, 'password is incorrect')
        }
        let jwt_payload = {
          id: response.id,
          email: response.email,
          phone: response.phone,
        }

        let authorization = jwt.sign(jwt_payload, config.web.jwt_secrete)

        delete response.dataValues.password
        response.dataValues.authorization = authorization
        return this.response(res, 200, false, response, 'Login successful')
      } else {
        return this.response(res, 401, true, false, 'User does not exist')
      }
    } catch (err) {
        return this.response(res, 500, true)
    }
  }

  verifyOtp = async (req, res) => {
    try {
      let response = await this.userService.verifyOTP(req.body)
      if (response) {
        return this.response(res, 200, false, response, 'Valid OTP')
      }
      return this.response(res, 200, true, false, 'Invalid OTP')

    } catch (err) {
      return this.response(res, 500, true)
    }
  };
}

export default AuthController
