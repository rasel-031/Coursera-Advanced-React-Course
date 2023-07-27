import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = (data) => {
    console.log("Form submitted!");
    console.log(data);
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
