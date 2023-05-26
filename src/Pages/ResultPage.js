import React, { useEffect, useState } from 'react';
import ResultCard from '../Components/ResultCard';



const ResultPage = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/getFundResults')
      .then((response) => response.json())
      .then((data) => {
        setFunds(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    
    <div className='flex flex-wrap gap-10 text-white justify-center mx-auto'>
    
{ (funds.length>0 ) ?
    funds.map((fund)=>(
       <ResultCard fund={fund}/>
    ))
    :
    <div>NO data to show</div>

}

    </div>
  )


    

};

export default ResultPage;
