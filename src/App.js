import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="data:image/webp;base64,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"
          alt=""
          srcset=""
        />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyeBLv7LvP-kPXelQOpE1EQCcxZtSDw37d3QfEynRWysRvkD6RiMkS20SqpRU8shoDcO1vUQPTNkN5A&usqp=CAU" />
        </div>
        <div>ava + desription</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
