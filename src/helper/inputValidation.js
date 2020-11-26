import { Validators } from "./validators.js";

export const inputValidation = (input) => {
  const str = input.trim();
  console.log(
    "🚀 ~ file: inputValidation.js ~ line 5 ~ inputValidation ~ str",
    typeof str
  );

  return Validators.every((validator) => {
    return validator(str);
  });
};
