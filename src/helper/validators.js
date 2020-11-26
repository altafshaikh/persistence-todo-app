export const Validators = [];

export const isEmpty = (str) => {
  if (str == "" || str == "undefined") {
    return false;
  }
  return true;
};

window.isEmpty = isEmpty;

export const isContainTags = (str) => {
  if (str.includes("<")) {
    return false;
  }
  return true;
};

Validators.push(isEmpty);
Validators.push(isContainTags);
