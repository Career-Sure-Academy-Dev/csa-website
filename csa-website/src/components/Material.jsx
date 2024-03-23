import { NavLink, Link } from "react-router-dom";
import { notes, topics } from "../utils/material";
import "./Material.css";

// eslint-disable-next-line react/prop-types
const NoteItem = ({ name, fileName }) => {
  let filePathName = `/notes/${fileName}`;
  return (
    <Link to={filePathName} target="_blank" className="note-item">
      {name}
    </Link>
  );
};

// eslint-disable-next-line react/prop-types
const TopicItem = ({ topicName }) => {
  return (
    <div className="topic-item">
      <h2>{topicName}</h2>
      <div className="notes-list">
        {notes
          .filter((note) => note.topic == topicName)
          .map((note) => (
            <NoteItem key={note.id} name={note.name} fileName={note.fileName} />
          ))}
      </div>
    </div>
  );
};

const Material = () => {
  return (
    <div className="material-container">
      <div className="prev-rec-container">
        <p>What to access previous class records? </p>
        <NavLink className="prev-rec-btn" to={`/prevRecordings`}>
          Previous Class Recordings
        </NavLink>
      </div>

      <div className="material-content">
        {topics.map((topic) => (
          <TopicItem topicName={topic.topic} key={topic.id} />
        ))}
      </div>
    </div>
  );
};

export default Material;
