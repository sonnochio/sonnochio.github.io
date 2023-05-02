import { any } from "prop-types";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
const Home = () => {
  const titleFont = { fontSize: 60 };
  const profilePic = "src/assets/profile.jpg";
  const [alertVisible, setAlertVisible] = useState(false);
  const buttonColors = [
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
  ];
  const pages = ["Home", "About", "Projects", "Contact"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };




  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={titleFont}>Sonny Kong, Data Scientist</div>
        <img
          src={profilePic}
          className="img-fluid"
          alt="Sonny-with-red-hair"
          style={{ width: "100px", height: "auto", marginLeft: "auto" }}
        ></img>
      </div>
      {pages.map((page, index) => (
        <Button color={buttonColors[index]}> {"  " + page + "  "} </Button>
      ))}

      <Button color="info" onClick={() => setAlertVisible(true)}>
        ❤️
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Thank you for viewing my page!
          <h1> Glad you liked it</h1>
        </Alert>
      )}
      <div>
        <ListGroup
          items={pages}
          heading="Projects"
          onSelectItem={handleSelectItem}
        />
      </div>

    </>
  );
};

export default Home;
