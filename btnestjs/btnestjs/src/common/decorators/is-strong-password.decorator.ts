import { registerDecorator, ValidationOptions } from "class-validator";

export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: any): boolean{
          const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
          return check.test(value);
        }
      },
    });
  };
}