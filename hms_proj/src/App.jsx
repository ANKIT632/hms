import ImportPatent from './components/importPatent.component';
import Patient from './page/patient.page';
import { Routes, Route } from 'react-router-dom'

import Disablepatient from './components/disablepatient.component';
import  HrUserProfile from './HumanResourceComponents/UserProfileMain.component';
import BedComp from '../src/bed/BedMain'
import HospitalCharges from './HospitalCharges/HostpitalChargesMain';
 


export default function App() {
  return (
    <div >
      <Routes>
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/import" element={<ImportPatent />} />
        <Route path="/patient/disablepatient" element={<Disablepatient />} />
        <Route path='/profile' element={<HrUserProfile/>}/>
        <Route path='/bed' element={<BedComp/>}/>
        <Route path='/hc' element={<HospitalCharges/>}/>
      </Routes>
      </div>
  )
}