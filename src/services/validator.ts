import validator from "validator";

export type ValidationType = Record<string, (...args: (string | any)[]) => string | undefined>;
// export type ValidationType = Record<string, (a: string, b: any) => string | undefined>;

export const validators: ValidationType = {
  email: (email: string) => {
    if (validator.isEmpty(email)) {
      return "E-mail is required";
    }

    if (!validator.isEmail(email)) {
      return "E-mail is invalid";
    }
  },
  password: (password: string) => {
    if (validator.isEmpty(password)) {
      return "Password is required";
    }

    if (!validator.isStrongPassword(password)) {
      return "Password is weak";
    }
  },

  verifyPassword: (verifyPassword: string, { password }: Record<string, string>) => {
    if (validator.isEmpty(verifyPassword)) {
      return "Password is required";
    }
    if (verifyPassword !== password) {
      return "Password mismatch";
    }
  },
};

export const validateFormSubmit = (formData: Record<string, string>) => {
  let errors: any = {};
  let isValid = true;
  Object.keys(formData).forEach((key) => {
    const error = validators[key](formData[key], formData);
    errors[key] = error;
    if (error) {
      isValid = false;
    }
  });

  return { errors, isValid };
};
