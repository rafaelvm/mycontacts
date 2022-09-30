export type ISetErrors = {
  field: string;
  message: string;
};

export type IErrors = {
  errors: any[];
  setError: ({ field, message }: ISetErrors) => void;
  removeError: (fieldName: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => any;
};
