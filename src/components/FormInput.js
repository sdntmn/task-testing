import React from "react";

export default function FormInput({
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <input
      className="popup__input popup__input_value_name"
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required
    />
  );
}
