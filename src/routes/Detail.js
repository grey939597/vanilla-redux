import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const todos = useSelector((state) => state.todos);
  const id = useParams().id;
  const todo = todos.find((todo) => todo.id === parseInt(id)) || "";
  return (
    <>
      <h1>{todo?.text}</h1>
      <p>Created at: {todo?.id}</p>
    </>
  );
};

export default Detail;
