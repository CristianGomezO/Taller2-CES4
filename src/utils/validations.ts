import { IFormValues, IResponse, } from "../types";

export const startGameValidations = (
  values: IFormValues,
): IResponse => {

  if(values){
    if (!values.category) {
      return {
        code: 400,
        message: "The category field is required",
      };
    }
  
    if (!values.difficulty) {
      return {
        code: 400,
        message: "The difficulty field is required",
      };
    }
  
    if (!values.user) {
      return {
        code: 400,
        message: "The user field is required",
      };
    }
  }else {
    return {
      code: 400,
      message: "Required fields",
    };
  }

  return {code: 200}
};
