
export const otpGenerator = ()=>{
    let otp = Math.floor((Math.random()*1000000)+1).toString();

    if (otp.substring(3) === '000') otpGenerator();

    if (Array.from(new Set(otp.split(''))).length < 3) otpGenerator();

    return otp;
}
