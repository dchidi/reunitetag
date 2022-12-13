// APP CONSTANTS
export const SETTINGS = {
  VAT: 0.075, //7.5%
};

// Convert values to 2 decimal places
export const To2DP = (num) => {
  return Math.round(num * 100 + Number.EPSILON) / 100;
};

export const validateText = (val) => {
  if (val.length > 2)
    return { status: true, msg: "Input validated", value: val };
  return { status: false, msg: "Invalid input value" };
};

export const validateEmail = (email) => {
  if (email.length > 3) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return { status: true, msg: "Email validated", value: email };
    else return { status: false, msg: "Invalid email address" };
  }
  return { status: false, msg: "Invalid email address" };
};

export const validatePhone = (phone, minLength = 5, maxLength = 20) => {
  if (phone) {
    if (phone.length >= minLength && phone.length <= maxLength) {
      return { status: true, msg: "phone validated", value: phone };
    }
    return { status: false, msg: "Invalid phone number" };
  }
  return { status: false, msg: "phone number field is required" };
};
