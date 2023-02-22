import { useState } from "react";

export default (initialTodos) => {
  // basic test

  const [state, setState] = useState("");

  // advanced ->

  // var gridAll = [
  //   {
  //     gridId: "b1",
  //     expanded: false,
  //     defaultState: {
  //       styles: `
  //         height: 75px;
  //         width: 75px;
  //         justify-self: end;
  //         align-self: end;`,
  //     },
  //     expandedState: {},
  //   },
  //   {
  //     gridId: "b2",
  //     expanded: false,
  //     defaultState: {
  //       styles: `
  //         height: 75px;
  //         width: 75px;
  //         justify-self: start;
  //         align-self: end;`,
  //     },
  //     expandedState: {},
  //   },
  //   {
  //     gridId: "b3",
  //     expanded: false,
  //     defaultState: {
  //       styles: `
  //         height: 75px;
  //         width: 75px;
  //         justify-self: end;
  //         align-self: start;`,
  //     },
  //     expandedState: {},
  //   },
  //   {
  //     gridId: "b4",
  //     expanded: false,
  //     defaultState: {
  //       styles: `
  //         height: 75px;
  //         width: 75px;
  //         justify-self: start;
  //         align-self: start;`,
  //     },
  //     expandedState: {},
  //   },
  // ];

  // const [gridState, setGridState] = useState("defaultGridState");
  // return {
  //   gridAll,
  //   //
  //   setGridState: (gridId) => {
  //     const updatedGridState = gridAll.map((gridSquare) =>
  //       gridSquare.id == gridId
  //         ? { ...gridSquare, expanded: !gridSquare.expanded }
  //         : gridSquare
  //     );
  //     setTodos(updatedGridState);
  //   },
  // };
};

//   const toggleTodo = (todoId) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id == todoId ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

// const addTodo = (newTodoText) => {
//   setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
// };

// const removeTodo = (todoId) => {
//   const updatedTodos = todos.filter((todo) => todo.id !== todoId);
//   setTodos(updatedTodos);
// };

//   const editTodo = (todoId, newTask) => {
//     console.log(newTask);
//     const updatedTodos = todos.map((todo) =>
//       todo.id == todoId ? { ...todo, task: newTask } : todo
//     );
//     setTodos(updatedTodos);
//   };
