import { useState } from 'react'

function App() {
const [color, setColor] = useState('green');
  return(
  

  <> 
  
  <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}> </div>
  
  
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
    <div className='flex flex-wrap justify-center gap-6 text-2xl font-bold cursor-pointer bg-white rounded-full p-4 '>
      <button className='bg-black text-white rounded-full shadow-lg px-4' onClick={() => setColor('black')}>black</button>
      <button className='bg-white text-black rounded-full shadow-lg px-4' onClick={() => setColor('white')}>white</button>
      <button className='bg-red-500 text-white rounded-full  shadow-lg px-4' onClick={() => setColor('red')}>red</button>
      <button className='bg-blue-500 text-white rounded-full shadow-lg px-4' onClick={() => setColor('blue')}>blue</button>
      <button className='bg-green-500 text-white rounded-full shadow-lg px-4' onClick={() => setColor('green')}  >green</button>
      <button className='bg-pink-500 text-white rounded-full shadow-lg px-4' onClick={() => setColor('pink')}>pink</button>
    </div>
  </div>
  
  </>
  )
}
export default App