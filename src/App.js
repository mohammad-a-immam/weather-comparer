import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";


function App() {


  return (
  // Navbar
      <>
        <Navbar bg={"dark"} className="text-light">
          <Container>
            <Navbar.Brand href="#home" className={"text-light"}>Weather Comparer</Navbar.Brand>
            <div style={{fontSize:"x-small"}}>Powered by <a href={"https://openweathermap.org/api"}>OpenWeatherMap</a></div>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className={"text-light"}>
                Presented by: <a href={"https://github.com/mohammad-a-immam"} className="text-light text-decoration-underline">Mohammad A Immam</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid={true} className="mt-3">
          <Row>
            <div className={"m-auto col-8 text-center"}>Please input US based zip codes to compare weather in different locations. You may compare upto 4 weather locations at once!</div>
            <div className={"m-auto col-8 text-center"}>

                <button className="btn btn-warning rounded-4 text-muted" onClick={()=>window.location.reload()}>
                   Restart
                </button>
            </div>
          </Row>
          <Row>
              <Col md={6} className="p-4">
                    <WeatherWidget/>
              </Col>
              <Col md={6} className="p-4">
                  <WeatherWidget/>
              </Col>
              <Col md={6} className="p-4">
                  <WeatherWidget/>
              </Col>
              <Col md={6} className="p-4">
                  <WeatherWidget/>
              </Col>
          </Row>
        </Container>
      </>



  );

  function WeatherWidget(){

      const [data,setData] = useState();
      const [zip, setZip] = useState("");
      const [loading, setLoading] = useState("Get Weather");
      const [localTime,setLocalTime] = useState();

      function GetWeather(){
          const api_key = process.env.REACT_APP_OPENWEATHER_APIKEY;
          if(api_key === null || api_key === "your_openweathermap_apikey"){
              setLoading("no api key!");
              return;
          }

          if(!zip){
              setLoading("no zip code");
              return;
          }
          setLoading("Loading..")
          axios.get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zip}&appid=${api_key}`)
              .then(res=>{
                  setData(res.data);
                  let d = new Date();
                  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
                  let nd = new Date(utc + (1000*res.data.timezone));
                  setLocalTime(nd.toLocaleString());
              }).catch(()=>{
                  setLoading("Unexpected Error")
          })
      }

    return (

            data?
                <div className="card p-4 w-75 m-auto mb-0">
                    <div className="d-flex">
                        <h6 className="flex-grow-1">{data.name}</h6>
                        <h6>Local Time: {localTime}</h6>
                    </div>

                    <div className="d-flex flex-column temp">
                        <h1 className="mb-0 font-weight-bold" id=""> {data.main.temp}&deg; F </h1>
                        <span className="small grey">{data.weather.main}</span>
                    </div>

                    <div className="d-flex">
                        <div className="temp-details flex-grow-1">
                            <p className="">
                                <img src="https://i.imgur.com/B9kqOzp.png" height="17px" alt={"icon"}/>

                                <span> {data.wind.speed} mph @ {data.wind.degree}&deg; </span>
                            </p>

                            <p className="my-1">
                                <img src={require("./assets/img/humidity.png")} width={15} alt={"icon"}/>
                                <span> {data.main.humidity}% </span>
                            </p>

                        </div>

                        <div>
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width="50px" alt={"icon"}/>
                        </div>
                    </div>
                </div>:
                <Row>
                    <Col>
                        <input className="form-control rounded-4" placeholder={"US Zip Code"} value={zip} onChange={(e)=>setZip(e.target.value)}/>
                    </Col>
                    <Col xs={4}>
                        <Button variant="warning" className="text-light rounded-4" onClick={GetWeather}>{loading}</Button>
                    </Col>
                </Row>

    );
  }
}

export default App;
