import { configureStore, createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addToDo(state, action) {
      console.log(state);
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

const reducer = {
  todos: todos.reducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const { addToDo, deleteToDo } = todos.actions;

export default store;

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

// const todosReducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload);
//   },
// });

// const reducer = {
//   todos: todosReducer,
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };
