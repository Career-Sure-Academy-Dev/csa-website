import "./QnA.css";

const QnA = () => {
  return (
    <div className="qna-container">
      <div className="join-meeting">
        <p>Resolve your queries instantly...</p>
        <button>Join</button>
      </div>
      <div className="post-ques">
        <textarea
          name="ques"
          id="ques"
          cols="30"
          rows="10"
          placeholder="Post your question here..."
        ></textarea>
        <button>Post</button>
      </div>
    </div>
  );
};

export default QnA;
