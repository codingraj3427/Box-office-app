import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'





function Home() {

  const[input,setInput]=useState('');
  const[result,setResult]=useState(null);



  const onSearch=()=>
  {
    

    apiGet(`/search/shows?q=${input}`).then(result=>
      { 
        setResult(result);
      });

     
  };


  const onInputChange=(ev)=>
  { 
    setInput(ev.target.value);
    console.log(ev.target.value);
  };


  const onKeyDown=(ev)=>
  {
    if(ev.keyCode===13)
    {
      onSearch();
    }
  }

  const renderResult= ()=>
  {
    if(result && result.length==0)
    {   
      return <div>No Result</div>
    }

    if(result && result.length>0){
    
      return <div>{result.map( (item)=>(<div key={item.show.id}>{item.show.name}</div>))}</div>
      
    }

    return null;
  }


  
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
      <button 
      type="button" onClick={onSearch}>Search
      </button>
      {renderResult()}
    </MainPageLayout>
  )
}

export default Home
