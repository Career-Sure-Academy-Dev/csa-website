import { Link } from "react-router-dom";
import "./Tasks.css";

import { tasks } from "../utils/tasks";

// eslint-disable-next-line react/prop-types
const TaskItem = ({ id, title }) => {
  return (
    <Link className="task-item" to={`/tasks/${id}`}>
      {title}
    </Link>
  );
};

const Tasks = () => {
  return (
    <div className="task-list">
      {tasks.map(({ id, title, desc }) => (
        <TaskItem key={id} id={id} title={title} desc={desc} />
      ))}
    </div>
  );
};

export default Tasks;
