import {
  checkIsDate,
  isValidEmailLength,
  validateEmail,
  validateEmptyFieldsInObject,
} from "./validators";

describe("validators", () => {
  it("should return true and false in isValidEmailLength", () => {
    expect(isValidEmailLength("q@e")).toBeTruthy();
    expect(isValidEmailLength("qe")).toBeFalsy();
  });

  it("should return return true and false in validateEmail", () => {
    expect(validateEmail("qwe@qwe.qwe")).toBeTruthy();
    expect(validateEmail("qwe@.qwe")).toBeFalsy();
    expect(validateEmail("...1,;@qwe.qwe")).toBeFalsy();
  });

  it("should return  warnings ", () => {
    const foo = {
      foo: "",
      bar: "qwe",
    };
    const result = validateEmptyFieldsInObject(foo);
    expect(result).toBeDefined();
    expect(result[0].key).toBe("foo");
    expect(result[0].errorMessage).toBe(
      "This  is required field,it cannot be empty"
    );
  });

  it("shouldn't return  warnings ", () => {
    const foo = {
      foo: "qwe",
      bar: "qwe",
    };
    const result = validateEmptyFieldsInObject(foo);
    expect(result.length).toBe(0);
  });

  it("should return true and false in checkIsDate", () => {
    expect(checkIsDate("qwe")).toBeFalsy();
    expect(checkIsDate(Date.now().toString())).toBeTruthy();
    expect(checkIsDate(Date.now())).toBeTruthy();
  });
});
