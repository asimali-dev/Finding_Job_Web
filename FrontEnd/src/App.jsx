import React from 'react'
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
     <div>
      <h1 className='text-4xl text-black'>Hey</h1>
     </div>
  )
}

export default App