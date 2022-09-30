export type IErrorType = {
  field: string;
  message: string;
};

export type IErrors = {
  errors: any[];
  setError: ({ field, message }: IErrorType) => void;
  removeError: (fieldName: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => string;
};
