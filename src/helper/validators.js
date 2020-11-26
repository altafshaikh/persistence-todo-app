export const Validators = [];

export const isEmpty = (str) => {
  if (str == "") {
    return false;
  }
  return true;
};

export const isContainTags = (str) => {
  if (str.includes("<")) {
    return false;
  }
  return true;
};

Validators.push(isEmpty);
Validators.push(isContainTags);
