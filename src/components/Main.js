import React from "react";
import Task from "./Task";

export default function Main({ handleEditTask, tasks }) {
  return (
    <main className="content page__cover">
      <section>
        <button
          className="profile__button"
          type="button"
          aria-label="Добавить"
          onClick={handleEditTask}
        >
          Создать задачу
        </button>
      </section>
      <section>
        <ul className="elements">
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              caption={task.caption}
              description={task.description}
              data={task.date}
              performer={task.performer}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
