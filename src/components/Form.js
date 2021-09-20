import React from "react";

export default function Form({ title, btnName, name, children }) {
  return (
    <div className="form">
      <form className="form__data" id={`form_${name}`} name={`${name}`}>
        <fieldset className="form__grouping">
          <legend className="form__title">{title}</legend>
          <input
            className="form__input "
            id="form-email-reg"
            minLength="2"
            maxLength="30"
            placeholder="Email"
            type="email"
            name="place"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            className="form__input popup__input_value_link"
            id="form-link-reg"
            placeholder="Пароль"
            type="password"
            name="link-reg"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </fieldset>
        <button
          type="submit"
          className="form__button"
          aria-label="Зарегистрироваться"
        >
          {btnName}
        </button>
        {children}
      </form>
    </div>
  );
}
