import React from 'react'
import { calculatorData } from '../calculatorData'
import CalcCards from '../Components/CalcCards'
const Calculators = () => {


  return (
    <div className='w-full slate  h-full'>
      <div className='flex flex-wrap gap-5  w-[1350px] h-full my-6 mx-auto justify-center'  >
        {
          calculatorData.map((calc) => (<CalcCards calc={calc} />))
        }

      </div>
    </div>
  )
}

export default Calculators