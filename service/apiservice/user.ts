import axios from "axios";

export async function LoginService(request:any){
    const url = `https://traiga-api.vercel.app/api/login`;
    // const url = `http://localhost:3002/api/login`;
  
    return new Promise((resolve, reject) => {
      const response = axios
        .post(url, {
          ...request,
        })
        .then((data) => {
          console.log("data inpr", data);
          resolve(data);
        })
        .catch((error) => {
          console.log("err in promise:", error);
          const objectErr = {
            status: error?.response?.data?.status,
            statusMessage: error?.response?.data?.statusMessage,
          };
          reject(objectErr);
        });
      return response;
    });
  };
  

  export async function SignUpService(request:any){
    const url = `https://traiga-api.vercel.app/api/signup`;
    // const url = `http://localhost:3002/api/login`;
  
    return new Promise((resolve, reject) => {
      const response = axios
        .post(url, {
          ...request,
        })
        .then((data) => {
          console.log("data inpr", data);
          resolve(data);
        })
        .catch((error) => {
          console.log("err in promise:", error);
          const objectErr = {
            status: error?.response?.data?.status,
            statusMessage: error?.response?.data?.statusMessage,
          };
          reject(objectErr);
        });
      return response;
    });
  };
