import {URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP} from "@env"

export const signup = async(email:string, password:string) => {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      return { token:data.idToken, userId: data.localId }
  };


export const signin = async(email:string, password:string) => {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      return { token:data.idToken, userId: data.localId }
  };

  const AuthService = {
    signin, signup
  };
  export default AuthService;