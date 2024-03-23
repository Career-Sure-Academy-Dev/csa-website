import { Link, useParams } from "react-router-dom";
import { tasks } from "../utils/tasks";

import "./TaskPage.css";

export default function TaskPage() {
  let { taskId } = useParams();

  let task = tasks[Number(taskId) - 1];

  return (
    <>
      <Link className="back-link" to={`/tasks`}>
        Back
      </Link>
      <div className="task-page">
        <h1>{task.title}</h1>
        <p>{task.desc}</p>
        <div className="form-item">
          <input
            type="text"
            id="gLink"
            placeholder="Paster you github project link here..."
          />
          <button>Post Link</button>
        </div>
      </div>
    </>
  );
}
