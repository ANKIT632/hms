import './App.css'
import { Routes, Route } from 'react-router-dom'
import SettingMain from './SettingComp/SettingMain'
function App() {
 

  return (
   <div >
   <Routes>
       <Route path='/setting' element={<SettingMain/>}/>
   </Routes>
   </div>
  )
}

export default App;
