import { useState } from 'react';
import GeneralSetting from './GeneralSetting';
import NotificationSetting from './NotificationSetting';
import SmsSetting from './SmsSetting';
import EmailSetting from './EmailSetting';
import PaymentMethod from './PaymentMethod';
import FrontCmsSetting from './FrontCmsSetting';
import RolesPermissions from './RolesPermissions';
import BackupRestore from './BackupRestore';
import Languages from './Languages';
import Users from './Users';
import Modules from './Modules';


export const SettingMain = () => {

  const [activeTab, setActiveTab] = useState('generalSetting');


  const COMPONENTS = {
    generalSetting: GeneralSetting,
    notificationSetting: NotificationSetting,
    smsSetting: SmsSetting,
    emailSetting: EmailSetting,
    paymentMethod: PaymentMethod,
    frontCmsSetting: FrontCmsSetting,
    rolesPermissions: RolesPermissions,
    backupRestore: BackupRestore,
    languages: Languages,
    users: Users,
    modules: Modules

  };


  const handleActiveComp = (active) => {
    setActiveTab(active);
  }


  const ActiveComponent = COMPONENTS[activeTab];

  return (
    <div className=" bg-slate-200 min-h-[100vh] p-4 w-full" >
      <div className=' flex max-md:flex-col gap-4'>

        {/* left */}
        <ul className='bg-white md:flex-[0.15] max-md:flex-1 h-fit'>

          <li className={`text-sm   p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'generalSetting') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp("generalSetting")}>General Setting</li>

          <li className={`text-sm   p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'notificationSetting') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp('notificationSetting')}>Notification Setting</li>

          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'smsSetting') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp('smsSetting')}>Sms Setting</li>


          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'emailSetting') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp("emailSetting")}>Email Setting</li>

          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'paymentMethod') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp('paymentMethod')}>Payment Method</li>



          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'frontCmsSetting') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp("frontCmsSetting")}>Front CMS Setting</li>

          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'rolesPermissions') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp('rolesPermissions')}>Roles Permissions</li>

          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'backupRestore') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp('backupRestore')}>backupRestore</li>


 
          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'languages') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp("languages")}>Languages</li>

          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'users') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp('users')}>Users</li>

          <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab === 'modules') ? " font-bold text-blue-500" : " hover:text-blue-400 font-medium"} `} onClick={() => handleActiveComp('modules')}>Modules</li>
        </ul>

        {/* right */}

        <ActiveComponent />


      </div>
    </div>
  );
};

export default SettingMain;
