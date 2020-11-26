import { Validators } from "./validators.js";

export const inputValidation = (input) => {
  const str = input.trim();

  return Validators.every((validator) => {
    return validator(str);
  });
};
