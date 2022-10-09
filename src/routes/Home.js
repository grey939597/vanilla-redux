import { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

const Home = (props) => {
  const { todos = [], addToDo } = props;
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
        <ul>
          <>
            {todos.map((todo) => {
              return <ToDo {...todo} key={todo.id} />;
            })}
          </>
        </ul>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
