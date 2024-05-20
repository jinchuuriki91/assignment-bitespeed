import Navbar from "./components/Navbar/Navbar";
import NodesPanel from "./components/NodesPanel/NodesPanel";
import Playground from "./components/Playground";
import SettingsPanel from "./components/SettingsPanel";
import "./App.css"


export default function App() {
  return (
    <div>
      <Navbar />
      <div className="dashboard-root">
        <Playground />
        <NodesPanel />
      </div>
    </div>
  );
}
