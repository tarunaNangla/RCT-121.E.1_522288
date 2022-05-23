import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";

import "./styles.css";
import axios from 'axios';

export default function App() {

  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(false);
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)

  useEffect(()=>{
    axios({
      method:'get',
      url:' http://localhost:3000/candidates'
    })
    .then(res=>{
      console.log(res.data)
      setData(res.data)
      setLoading(false);
    }).catch(error=>{
       setError(true)
       setLoading(false)
       console.log(error)
    })
  },[page])
  return (
    <div className="App">
      <div>
        {
         loading &&
        <div id="loading-container">...Loading</div>
        }
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button disable={page===1} onClick={()=>setPage(page-1)} title="PREV" id="PREV" />
        <Button onClick={()=>setPage(page+1)} id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => {
        return(
          <>
          < CandidateCard key={item.id} {...item}/>
          </>
        )
      })}
    </div>
    // {pagination}
  );
}