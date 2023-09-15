import  { IValidation } from "../types/types";

const Validation = (payload:IValidation )=> {
    return new Promise((resolve, reject) => {
      if (payload.email === "") {
        let dataTextEmpty = {
          error: "error-email",
          errorMessage: "Email field is empty",
        };

        reject(dataTextEmpty);
      }
      if (payload.password === "") {
        let dataTextEmpty = {
          error: "error-password",
          errorMessage: "Password field is empty",
        };

        reject(dataTextEmpty);
      }

      resolve({error:null});
    });
  };

  export default Validation;