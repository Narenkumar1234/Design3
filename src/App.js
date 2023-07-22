import FirstPanel from "./components/FirstPanel";
import LeftLayout from "./components/LeftLayout";
import MainPanel from "./components/MainPanel";
import Rightpanel from "./components/RightPanel";
 
function App() {
  return (
    <div className="flex  flex-col lg:flex-row">      
      <LeftLayout />
      <FirstPanel />
      <MainPanel />
      <Rightpanel />
    </div>
  );

}

export default App;
