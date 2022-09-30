import { useState } from "react";
import { IErrors, ISetErrors } from "./types";

export const useErrors = (): IErrors => {
  const [errors, setErrors] = useState([]);

  const setError = ({ field, message }: ISetErrors) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  };

  const removeError = (fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    );
  };

  const getErrorMessageByFieldName = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  return { errors, setError, removeError, getErrorMessageByFieldName };
};
