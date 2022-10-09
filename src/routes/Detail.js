import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { state: todos = [] } = props;
  const id = useParams().id;
  const todo = todos.find((todo) => todo.id === parseInt(id)) || "";
  return (
    <>
      <h1>{todo?.text}</h1>
      <p>Created at: {todo?.id}</p>
    </>
  );
};

const mapStateProps = (state) => {
  return { state };
};

export default connect(mapStateProps)(Detail);
