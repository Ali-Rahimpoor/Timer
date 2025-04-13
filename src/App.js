import Stopwatch from "./AiTimer";
import Timer from "./components/Timer";
import Clock from "./components/Hour"
import CountTimer from "./components/CountTimer";
function App() {
  return (
    <div>
      <Clock/>
      <Timer/>
      <CountTimer/>
    </div>
  );
}

export default App;
