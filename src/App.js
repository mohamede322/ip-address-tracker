import { useEffect, useState } from "react";
import Map from "./components/Map";
import Input from "./components/Input";
import Info from "./components/Info";
import arrow from "./images/icon-arrow.svg";

function App() {
  const [IP, setIP] = useState("");
  const api = `https://ipapi.co/${IP}/json/`;
  const [data, setData] = useState({});
  const [moving, setMoving] = useState(true);
  async function getData() {
    const response = await fetch(api);
    const data = await response.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleChange(e) {
    const { value } = e.target;
    setIP(value);
  }

  function onMouseDown() {
    const regex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const alertMsg = "You have entered an invalid IP address!";
    if (regex.test(IP)) {
      setMoving(false);
      getData();
    } else {
      alert(alertMsg);
    }
  }

  function onMouseLeave() {
    setTimeout(() => {
      setMoving(true);
    }, 250);
  }

  return (
    <div className="App">
      <Input
        arrow={arrow}
        value={IP}
        onChange={handleChange}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseLeave}
      />
      <Info data={data} />
      {moving && <Map data={data} />}
    </div>
  );
}

export default App;
