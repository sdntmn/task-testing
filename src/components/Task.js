import React from "react";

export default function Task({ task }) {
  console.log(task);
  return (
    <li className="element">
      <ul className="intro__lists">
        <li className="intro__list">
          ИД: <span className="intro__numbers">{task.id}</span>
        </li>
        <li className="intro__list">
          <span className="intro__numbers">{task.caption}</span>
        </li>
        <li className="intro__list">{task.description}</li>
        <li className="intro__list">
          Дата:
          <span className="intro__numbers">{task.date}</span>
        </li>
        <li className="intro__list">
          Исполнитель:
          <span className="intro__numbers">{task.performer}</span>
        </li>
      </ul>
    </li>
  );
}

/*   ИД: {{ task.id }}<br>
    {{ task.caption }}<br> Заголовок задачи
    {{ task.description }}<br> Описание задачи
    Дата: {{ task.date|date("Y-m-d")}}<br> 
    Исполнитель: {{ task.performer.username }}<br> имя пользователя исполнителя задачи
    <br>
    */
