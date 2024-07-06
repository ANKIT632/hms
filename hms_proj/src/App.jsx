import ImportPatent from './components/importPatent.component';
import Patient from './page/patient.page';
import { Routes, Route } from 'react-router-dom'
ImportPatent;
import Disablepatient from './components/disablepatient.component';
import  HrUserProfile from './HumanResourceComponents/UserProfileMain.component';
 


export default function App() {
  return (
    <div >
      <Routes>
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/import" element={<ImportPatent />} />
        <Route path="/patient/disablepatient" element={<Disablepatient />} />

        <Route path='/profile' element={<HrUserProfile/>}/>
      </Routes>
      </div>
  )
}