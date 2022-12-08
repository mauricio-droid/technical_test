import React,{useState, useEffect} from 'react';
import TableComponent from './components/table';
import getData from './services/getData';
import './App.css';

function App() {
  const [value, setValue]=useState();
  const getDataAPI = () => {
    setValue();
    getData()
      .then((response) => response.json())
      .then((result) => {
        setValue(result);
        console.log(result);
      })
      .catch(() => {
        console.log('err');
      });
  };
  useEffect(() => {
    getDataAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <button type="button" onClick={()=> getDataAPI()}>Reload</button>
      {
        value === undefined ? (<p>Loading...</p>):(<TableComponent props={value} />)
      }
    </div>
  );
}

export default App;
