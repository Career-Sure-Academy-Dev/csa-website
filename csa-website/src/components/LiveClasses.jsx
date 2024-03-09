import ClassCard from "./ClassCard";
import "./LiveClasses.css";

const LiveClasses = () => {
  const classes = [
    {
      title: "Class Name 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },
    {
      title: "Class Name 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },
    {
      title: "Class Name 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },
    {
      title: "Class Name 4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },
    {
      title: "Class Name 5",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },
    {
      title: "Class Name 6",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },

    {
      title: "Class Name 7",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },
    {
      title: "Class Name 8",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium voluptate molestiae animi tempore dolore, molestias asperiores maxime eius, amet error aperiam doloribus? Facere aspernatur voluptates sequi, fugiat nihil itaque.",
    },
  ];

  return (
    <div className="classes-container">
      {classes.map((classItem) => (
        <ClassCard
          key={classItem.title}
          title={classItem.title}
          desc={classItem.desc}
        />
      ))}
    </div>
  );
};

export default LiveClasses;
