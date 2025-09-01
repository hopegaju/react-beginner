import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
function App(){
  const [alertVisible, setAlertVisible] = useState(false);
  return <div>
    {alertVisible && <Alert onClose={() => setAlertVisible(false)}>This is an alert!</Alert>}
    <Button color="primary" onClick={() => setAlertVisible(true)}>Click me</Button>
  </div>
}

export default App;