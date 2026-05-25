import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/tasks"
    );

    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();

    if (!title) return;

    await axios.post(
      "http://localhost:5000/api/tasks",
      { title }
    );

    setTitle("");

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mini Task App</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <button type="submit">
          Add
        </button>
      </form>

      <div>
        {tasks.map((task) => (
          <p key={task.id}>
            {task.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;