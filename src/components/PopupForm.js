import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import FormInput from "./FormInput";

export default function PopupForm({
  isOpen,
  onClose,
  name,
  addTask,
  btnName,
  title,
}) {
  const [inputTask, setInputTask] = useState("");
  const [inputDescription, setinputDescription] = useState("");
  const [usePerformer, setUsePerformer] = useState("");

  useEffect(() => {
    setInputTask("");
    setinputDescription("");
    setUsePerformer("");
  }, [isOpen]);

  // Функция обработчик добавления заголовка задачи ========================
  const handleChange = (evt) => {
    setInputTask(evt.target.value);
  };

  // Функция обработчик добавления описания задачи ========================
  const handleChangeDescription = (evt) => {
    setinputDescription(evt.target.value);
  };

  // Функция обработчик добавления описания задачи ========================
  const handleChangePerformer = (evt) => {
    setUsePerformer(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask(inputTask, inputDescription, usePerformer);
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      name={name}
      title={title}
      btnName={btnName}
      onSubmit={handleSubmit}
    >
      <FormInput
        value={inputTask}
        onChange={handleChange}
        placeholder="Заголовок задачи"
      ></FormInput>
      <span className="popup__input-error about-input-error"></span>
      <textarea
        value={inputDescription}
        onChange={handleChangeDescription}
        placeholder="Описание задачи"
        className="popup__textarea"
        name="story"
        rows="5"
        cols="40"
      ></textarea>
      <span className="popup__input-error about-input-error"></span>
      <FormInput
        value={usePerformer}
        onChange={handleChangePerformer}
        placeholder="Исполнитель"
        type="text"
        name={name}
        required
      ></FormInput>
    </Popup>
  );
}
