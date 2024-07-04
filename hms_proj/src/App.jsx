import ImportPatent from './components/importPatent.component';
import Patient from './page/patient.page';
import { Routes, Route } from 'react-router-dom'
ImportPatent;
import Disablepatient from './components/disablepatient.component';


export default function App() {
  return (
    <div className='min-h-[100vh]  '>
      <Routes>
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/import" element={<ImportPatent />} />
        <Route path="/patient/disablepatient" element={<Disablepatient />} />
      </Routes>
      </div>
  )
}