type Action = {
  type: "UPDATED_FORM";
  data: any;
};

export const initialState = {
    email: { value: "", touched: false, hasError: true, error: "" },
    password: { value: "", touched: false, hasError: true, error: "" },
    isFormValid: false,
};
  
export const formReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "UPDATED_FORM":
      // eslint-disable-next-line no-case-declarations
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};