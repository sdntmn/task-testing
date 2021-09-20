import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Main from "./Main";
import PopupForm from "./PopupForm";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  // Первоначальное состояние попапа Task (False - закрыт)===============
  const [isEditTaskPopupOpen, setIsEditTaskPopupOpen] = useState(false);

  // Обработчик состояние попапа Task (Меняем на True)===================
  const onEditTask = () => {
    setIsEditTaskPopupOpen(true);
  };
  // Закрытие попапа Task (Меняем на False)==============================
  function closeAllPopups() {
    setIsEditTaskPopupOpen(false);
  }

  // Список задач =======================================================
  const [tasks, setTasks] = useState([]);

  // Дата в нужном формате ==============================================
  let today = new Date();
  let dateString = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  // Добавление задачи ==================================================

  const addTask = (inputTask, inputDescription, usePerformer) => {
    const newItem = {
      id: tasks.length + 1,
      caption: inputTask,
      description: inputDescription,
      performer: usePerformer,
      date: dateString,
    };

    setTasks([...tasks, newItem]);
    closeAllPopups();
  };

  return (
    <div className="page">
      <Route exact path="/">
        <Header path="/sign-in" btnLink="Выйти" pathLink="sign-in"></Header>
      </Route>
      <Switch>
        <Main
          exact
          path="/"
          tasks={tasks}
          setTasks={setTasks}
          handleEditTask={onEditTask}
        />

        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
      </Switch>

      <PopupForm
        isOpen={isEditTaskPopupOpen}
        onClose={closeAllPopups}
        name="Task"
        title="Добавить задание"
        btnName="Сохранить"
        addTask={addTask}

        // onUpdateUser={handleUpdateTask}
      ></PopupForm>
    </div>
  );
}

export default App;
