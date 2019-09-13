import * as React from 'react';

interface Props {
  id: string
  label: string
  placeholder: string
  htmlFor: string
  type: string
  onChange: (event: object) => void
}

export const InputForm = ({
  id,
  label,
  placeholder,
  htmlFor,
  onChange,
  type
}: Props) => (
  <div className="inputForm">
    <label
      htmlFor={htmlFor}
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  </div>
);
