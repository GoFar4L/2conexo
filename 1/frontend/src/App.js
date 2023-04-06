import styles from './App.css';
import Slider from "./components/Slider/Slider";
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import {Get, Post} from "./service/fetchBackend";

function App() {

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [result, setResult] = useState('?');
  const [csrf, setCsrf] = useState('');
  const {get: getCSRF, error: csrfError, pending: csrfPending, response: csrfResponse} = Get();
  const {post: postSum, error: sumError, pending: sumPending, response: sumResponse} = Post();

  useEffect(()=>{
      getCSRF('csrf')
  }, [])

  useEffect(()=>{
      if(csrfResponse){
        setCsrf(csrfResponse.csrf_token)
      }
  }, [csrfResponse])


  useEffect(()=>{
      if(sumResponse) {
          setResult(sumResponse.sum.toString())
      }
  }, [sumResponse])
  const handleXChange = (event, newValue) => {
        if(newValue > 100){
            setXValue(100)
        }else if(newValue < 0){
            setXValue(0)
        }else{
            setXValue(newValue)
        }
  }
  const handleYChange = (event, newValue) => {
        if(newValue > 100){
            setYValue(100)
        }else if(newValue < 0){
            setYValue(0)
        }else{
            setYValue(newValue)
        }
  }



  return (

      <>
          {csrfPending ? <></> : <>
            <div className={styles.App}>
                <div className={styles.container}>
                  <Slider value={xValue} handleChange={handleXChange}></Slider>
                  <Slider value={yValue} handleChange={handleYChange}></Slider>
                </div>
                <p>A = {xValue}</p>
                <p>B = {yValue}</p>
                <Button variant="contained" onClick={()=>{
                    postSum('sum', {valueX:xValue, valueY:yValue}, csrf)
                }}>SUM</Button>
                <p>A + B = {result}</p>
            </div>
          </>}
      </>

  );
}

export default App;
