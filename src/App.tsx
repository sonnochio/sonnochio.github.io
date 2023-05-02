import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";


function App() {
  let items = ["New York", "San Francisco", "london", "china", "big china"];
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <Button color="info" onClick={()=> setAlertVisible(true)}>Danger Zone</Button>
        {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>
          hi
          <h1> solve this probelm</h1>
          big dick big dick energy innit
        </Alert>}
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
