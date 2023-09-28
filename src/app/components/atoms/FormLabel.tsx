import React from 'react';

interface FormLabelProps {
  text: string,
  inputName: string,
}

export const FormLabel = ({
  text,
  inputName
}: FormLabelProps) =>
  <label className="flex flex-col text-white" htmlFor={inputName}>
    {text}
  </label>;

export default FormLabel;
