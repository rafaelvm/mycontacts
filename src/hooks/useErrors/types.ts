export type ISetErrors = {
  field: string;
  message: string;
};

export type IErrors = {
  setError: ({ field, message }: ISetErrors) => void;
  removeError: (fieldName: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => any;
};
