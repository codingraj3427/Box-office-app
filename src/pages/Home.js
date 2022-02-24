import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'





function Home() {

  const[input,setInput]=useState('');
  const[result,setResult]=useState(null);
  const[searchOption,setsearchOption]=useState('');

  const isShowSearch=searchOption==='shows';

  const onSearch=()=>
  {
    

    apiGet(`/search/${searchOption}?q=${input}`).then(result=>
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


  const onRadioChange=(ev)=>
  {
      setsearchOption(ev.target.value);
      
  }

  console.log(searchOption);


  const renderResult= ()=>
  {
    if(result && result.length===0)
    {   
      return <div>No Result</div>
    }

    if(result && result.length>0){
    
      return(

          result[0].show ? result.map( (item)=>(<div key={item.show.id}>{item.show.name}</div>)) : result.map( (item)=>(<div key={item.person.id}>{item.person.name}</div>))
        
        );
    }

    return null;
  }


  
  return (
    <MainPageLayout>
      <input type="text" placeholder="Search something"onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>


      <div>
        <label htmlFor='Shows-search'>
          Shows
          <input id="Shows-search
          "type="radio" 
          value="shows"
          checked={isShowSearch} 
          onChange={onRadioChange}/>
        </label>

        <label htmlFor='Actor-search'>
          Actors
          <input id="Actor-search"
          type="radio" 
          value="people" 
          checked={!isShowSearch}
          onChange={onRadioChange}/>
        </label>
      </div>




      <button 
      type="button" onClick={onSearch}>Search
      </button>
      {renderResult()}
    </MainPageLayout>
  )
}

export default Home
