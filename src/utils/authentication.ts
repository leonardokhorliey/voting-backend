import * as otp from 'otp-generator'
export const otpGenerator = ()=>{
 return Math.floor((Math.random()*1000000)+1);
}
