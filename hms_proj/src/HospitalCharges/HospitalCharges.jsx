import React, { useState } from 'react';
import Charges from './Charges';
import ChargeCategory from './ChargeCategory';
import DoctorsOPDCharge from './DoctorsOPDCharge';

const HospitalCharges = () => {
  const [activeTab, setActiveTab] = useState('Charges');

  return (
    <div className="container mx-auto p-4 md:ml-16 sm:ml-0 ml-0 shadow-sm shadow-slate-200 w-[95%]">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'Charges' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('Charges')}
        >
          Charges
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'ChargeCategory' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('ChargeCategory')}
        >
          Charge Category
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'DoctorsOPDCharge' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('DoctorsOPDCharge')}
        >
          Doctors OPD Charge
        </button>
      </div>
      {activeTab === 'Charges' && <Charges />}
      {activeTab === 'ChargeCategory' && <ChargeCategory />}
      {activeTab === 'DoctorsOPDCharge' && <DoctorsOPDCharge />}
    </div>
  );
};

export default HospitalCharges;
