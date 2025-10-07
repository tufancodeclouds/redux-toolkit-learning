import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTodos } from "../services/actions/todosAction";

const selectTodosState = (state) => ({
  loading: state.loading,
  todos: state.todos,
  error: state.error
});

const Todos = () => {

  const loading = useSelector((state) => state.loading)
  const todos = useSelector((state) => state.todos)
  const error = useSelector((state) => state.error)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <>
      <h2>Todo App</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {todos && todos.length > 0 && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </>
  )
}

export default Todos