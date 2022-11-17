import { ErrorMessages } from "../components/types";
import { REGEXP_EMAIL } from "./constants";

const validateEmptyFieldsInObject = <T extends Record<string, any>>(
  requestBody: T
): ErrorMessages<keyof T> => {
  const warnings: ErrorMessages<keyof T> = [];

  for (let key in requestBody) {
    if (!requestBody[key]) {
      warnings.push({
        key, //"firstName"
        errorMessage: "This  is required field,it cannot be empty",
      });
    }
  }
  return warnings;
};

const validateEmail = (email: string) => REGEXP_EMAIL.test(email);

const isValidEmailLength = (email: string) => email.length >= 3;

const checkIsDate = (eventDate: string | number) =>
  new Date(eventDate).getDate() || new Date(+eventDate).getDate();

export {
  validateEmptyFieldsInObject,
  validateEmail,
  isValidEmailLength,
  checkIsDate,
};
