
import './App.css';
import { useState } from 'react';


function App() {
  const [file,setFile]=useState([
    {
      No:'1',
      Name:'Sparrow',
      Category:'Bird'
    },
    {
      No:'2',
      Name:'Lion',
      Category:'Animal'
    },
    {
      No:'3',
      Name:'Tiger',
      Category:'Animal'
    },
    {
      No:'4',
      Name:'Rose',
      Category:'Flower'
    },
    {
      No:'5',
      Name:'Rabit',
      Category:'Animal'
    }
    ,{
      No:'6',
      Name:'Mouse',
      Category:'C. Parts'
    }
  ])
  const [selectname,setSelectname]=useState(null);
  const filterData =(Category)=>
    {
      setSelectname(Category);
    }

    return (
    <div className="App">
        <table border={2} width="50%" align='center'>
            <tr>
              <th>No</th>
              
              <th>Name</th>
              <th>Category</th>
            </tr>
          
              {
                file.filter((item) => selectname === null || item.Category === selectname).map((files) =>{
                  return(
                    <tr key="files">
                      <td>{files.No}</td>
                      <td>{files.Name}</td>
                      <td>{files.Category}</td>
                    </tr>
                  )
                }
                  
                )
              }
           
        </table>
        <button onClick={()=>filterData("Animal")}>Animal</button>
        <button onClick={()=>filterData("Bird")}>Bird</button>
        <button onClick={()=>filterData("Flower")}>Flower</button>
        <button onClick={()=>filterData("C. Parts")}>C. Parts</button>
        <button onClick={()=>filterData(null)}>All</button>

    </div>
  );
}

export default App;
