import "./App.css";
import "./normal.css";
function App() {
  return (
    <div className="app_main">
      <aside className="aside_msg">
        <div className="chat_btn">
          <span>+</span>New Chat
        </div>
      </aside>
      <section className="gpt_body">
        <h1>ChatGpt</h1>
        <div className="gpt_intro">
          <div>Examples</div>
          <div>Capabilities</div>
          <div>Limitations</div>
        </div>
      </section>
    </div>
  );
}

export default App;
