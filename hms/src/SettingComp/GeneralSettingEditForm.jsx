/* eslint-disable react/prop-types */

import { ImCross } from "react-icons/im";


function GeneralSettingEditForm({ setIsShowForm, data }) {


    const dateFormats = ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY/MM/DD", "DD-MM-YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "DD.MM.YYYY", "MM.DD.YYYY", "YYYY.MM.DD", "MMMM D, YYYY", "D MMMM, YYYY", "YYYY, MMMM D", "D MMM YYYY", "MMM D, YYYY", "YYYY, MMM D"
    ];

    const currencyCodes = [
        'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD',
        'MXN', 'SGD', 'HKD', 'NOK', 'KRW', 'TRY', 'RUB', 'INR', 'BRL', 'ZAR'
    ];


    return (

        <div className="fixed inset-0 flex items-top justify-center z-50 ">
            <div className="absolute inset-0 bg-black opacity-50 min-h-screen"></div>

            <div className="relative bg-white shadow-lg z-10 max-sm:w-[94%] max-md:w-[80%] md:w-[900px] h-fit mt-5 rounded-sm overflow-y-auto max-h-[90vh]">

                <div className="flex bg-blue-400 text-white  p-2 text-lg font-semibold justify-between items-center"><p >Edit General Setting</p><ImCross className="text-xs  right-4 top-4 hover:text-gray-600 cursor-pointer" onClick={() => setIsShowForm((pre) => !pre)} /></div>


                <form className="px-5 py-2 flex flex-col gap-3 border-b ">


                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 ">

                        <div className="flex flex-col ">
                            <label htmlFor="hospitalName" className="text-sm flex font-semibold">
                                Hospital Name<p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <input type="text" name='hospitalName' id='hospitalName' className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="hospitalName" className="text-sm flex font-semibold pb-1">
                                Hospital Code
                            </label>
                            <input type="text" name='hospitalCode' className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                        </div>

                    </div>


                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="address" className="text-sm flex font-semibold">
                            Address <p className="text-red-500 pl-1 pb-1"> *</p>
                        </label>
                        <textarea type="text" name='address' className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                    </div>


                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">

                        <div className="flex flex-col ">
                            <label htmlFor="Phone" className="text-sm flex font-semibold">
                                Phone<p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <input type="text" name='Phone' className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="Email" className="text-sm flex font-semibold">
                                Email <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <input type="text" name='Email' className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                        </div>

                    </div>


                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">

                        <div className="flex flex-col ">
                            <label htmlFor="language" className="text-sm flex font-semibold">
                                Language <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="language" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                <option>Select</option>
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="zh">Chinese</option>
                                <option value="ja">Japanese</option>
                                <option value="ko">Korean</option>
                                <option value="ru">Russian</option>
                                <option value="ar">Arabic</option>
                                <option value="pt">Portuguese</option>
                                <option value="hi">Hindi</option>
                                <option value="bn">Bengali</option>
                                <option value="pa">Punjabi</option>
                                <option value="jv">Javanese</option>
                                <option value="ms">Malay</option>
                                <option value="sw">Swahili</option>
                                <option value="ta">Tamil</option>
                                <option value="te">Telugu</option>
                                <option value="vi">Vietnamese</option>
                                <option value="tr">Turkish</option>
                                <option value="it">Italian</option>
                                <option value="th">Thai</option>
                                <option value="pl">Polish</option>
                                <option value="uk">Ukrainian</option>
                                <option value="fa">Persian</option>
                                <option value="ro">Romanian</option>
                                <option value="nl">Dutch</option>
                                <option value="el">Greek</option>
                                <option value="hu">Hungarian</option>
                                <option value="sv">Swedish</option>
                                <option value="cs">Czech</option>
                                <option value="da">Danish</option>
                                <option value="fi">Finnish</option>
                                <option value="he">Hebrew</option>
                                <option value="no">Norwegian</option>
                                <option value="sk">Slovak</option>
                                <option value="bg">Bulgarian</option>
                                <option value="hr">Croatian</option>
                                <option value="sr">Serbian</option>
                                <option value="sl">Slovenian</option>
                                <option value="lt">Lithuanian</option>
                                <option value="lv">Latvian</option>
                                <option value="et">Estonian</option>
                                <option value="is">Icelandic</option>
                                <option value="mt">Maltese</option>
                                <option value="ga">Irish</option>
                                <option value="cy">Welsh</option>
                                <option value="sq">Albanian</option>
                                <option value="mk">Macedonian</option>
                                <option value="bs">Bosnian</option>
                                <option value="az">Azerbaijani</option>
                                <option value="ka">Georgian</option>
                                <option value="hy">Armenian</option>
                                <option value="mn">Mongolian</option>
                                <option value="kk">Kazakh</option>
                                <option value="uz">Uzbek</option>
                                <option value="tg">Tajik</option>
                                <option value="tk">Turkmen</option>
                                <option value="ky">Kyrgyz</option>
                                <option value="ne">Nepali</option>
                                <option value="si">Sinhala</option>
                                <option value="my">Burmese</option>
                                <option value="km">Khmer</option>
                                <option value="lo">Lao</option>
                                <option value="am">Amharic</option>
                                <option value="so">Somali</option>
                                <option value="yo">Yoruba</option>
                                <option value="ig">Igbo</option>
                                <option value="ha">Hausa</option>
                                <option value="zu">Zulu</option>
                                <option value="xh">Xhosa</option>
                            </select>
                        </div>

                        <div className="flex flex-col ">
                            <h2 className="text-sm flex font-semibold">
                                Language RTL Text Mode
                            </h2>

                            <div className="flex  mt-2 text-sm font-medium gap-2">

                                <label>
                                    <input type="radio" name="languageRtl" value="disable" className="mr-1" />
                                    Disable
                                </label>

                                <label className="mr-4">
                                    <input type="radio" name="languageRtl" value="enable" className="mr-1" />
                                    Enable
                                </label>
                            </div>
                        </div>

                    </div>


                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">

                        <div className="flex flex-col ">
                            <label htmlFor="timezone" className="text-sm flex font-semibold">
                                Timezone<p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="timezone" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                <option>option</option>
                                <option>(GMT-12:00) International Date Line West, Baker Island</option>
                                <option>(GMT-11:00) Coordinated Universal Time-11, Niue</option>
                                <option>(GMT-10:00) Hawaii-Aleutian, Honolulu</option>
                                <option>(GMT-09:00) Alaska, Anchorage</option>
                                <option>(GMT-08:00) Pacific Time (US & Canada), Los Angeles</option>
                                <option>(GMT-07:00) Mountain Time (US & Canada), Denver</option>
                                <option>(GMT-06:00) Central Time (US & Canada), Chicago</option>
                                <option>(GMT-05:00) Eastern Time (US & Canada), New York</option>
                                <option>(GMT-04:00) Atlantic Time (Canada), Halifax</option>
                                <option>(GMT-03:30) Newfoundland, St. John</option>
                                <option>(GMT-03:00) Buenos Aires, Montevideo</option>
                                <option>(GMT-02:00) Coordinated Universal Time-02, South Georgia</option>
                                <option>(GMT-01:00) Azores, Cape Verde Islands</option>
                                <option>(GMT+00:00) Greenwich Mean Time, London</option>
                                <option>(GMT+01:00) Central European Time, Berlin</option>
                                <option>(GMT+02:00) Eastern European Time, Athens</option>
                                <option>(GMT+03:00) Moscow, Baghdad</option>
                                <option>(GMT+03:30) Iran, Tehran</option>
                                <option>(GMT+04:00) Gulf Standard Time, Dubai</option>
                                <option>(GMT+04:30) Afghanistan, Kabul</option>
                                <option>(GMT+05:00) Pakistan, Karachi</option>
                                <option>(GMT+05:30) India Standard Time, Kolkata</option>
                                <option>(GMT+05:45) Nepal, Kathmandu</option>
                                <option>(GMT+06:00) Bangladesh, Dhaka</option>
                                <option>(GMT+06:30) Cocos Islands, Yangon</option>
                                <option>(GMT+07:00) Indochina Time, Bangkok</option>
                                <option>(GMT+08:00) China Standard Time, Beijing</option>
                                <option>(GMT+09:00) Japan Standard Time, Tokyo</option>
                                <option>(GMT+09:30) Australian Central Time, Adelaide</option>
                                <option>(GMT+10:00) Australian Eastern Time, Sydney</option>
                                <option>(GMT+11:00) Solomon Islands, Noumea</option>
                                <option>(GMT+12:00) New Zealand Standard Time, Auckland</option>
                                <option>(GMT+13:00) Tonga, Apia</option>
                                <option>(GMT+14:00) Line Islands, Kiritimati</option>
                            </select>
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="dateFormat" className="text-sm flex font-semibold">
                                Date Format <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="dateFormat" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                <option>Select</option>
                                {dateFormats.map((format, index) => (
                                    <option key={index} value={format} className="text-xs">
                                        {format}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>


                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">

                        <div className="flex flex-col ">
                            <label htmlFor="currency" className="text-sm flex font-semibold">
                                Currency  <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="currency" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                <option>Select</option>
                                {currencyCodes.map((code) => (
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}

                            </select>
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="title" className="text-sm flex font-semibold">
                                Currency Symbol<p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <input type="text" name='title' className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                        </div>

                    </div>


                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">


                        <div className="flex flex-col ">
                            <label htmlFor="timeFormat" className="text-sm flex font-semibold">
                                Time Format  <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="timeFormat" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                <option>select</option>
                                <option>24 Hour</option>
                                <option>12 Hour</option>

                            </select>
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="title" className="text-sm flex font-semibold">
                                Credit Limit ($)<p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <input type="text" name='title' className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                        </div>

                    </div>


                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">


                        <div className="flex flex-col ">
                            <h2 className="text-sm flex font-semibold">
                                Doctor Restriction Mode

                            </h2>

                            <div className="flex items-center mt-2 gap-2 text-sm font-medium">
                                <label>
                                    <input type="radio" name="res" value="disable" className="mr-1" />
                                    Disable
                                </label>
                                <label className="mr-4">
                                    <input type="radio" name="res" value="enable" className="mr-1" />
                                    Enable
                                </label>

                            </div>
                        </div>


                        <div className="flex flex-col text-sm font-medium">
                            <h2 htmlFor="languageRtl" className="text-sm flex font-semibold">
                                Superadmin Visiblility
                            </h2>

                            <div className="flex items-center mt-2 gap-2">

                                <label>
                                    <input type="radio" name="vis" value="disable" className="mr-1" />
                                    Disable
                                </label>

                                <label className="mr-4">
                                    <input type="radio" name="vis" value="enable" className="mr-1" />
                                    Enable
                                </label>
                            </div>
                        </div>

                    </div>










                    <hr className="my-5"/>

                    <div>
                        <p className='text-sm font-medium pb-3'>Current Theme</p>

                        <div className='grid max-md:grid-cols-2 md:grid-cols-4 gap-3  '>

                            <div className='  p-1.5  rounded-md border '>
                                <img src='https://hms.demandhourly.com/backend/images/default.jpg' alt='img' className='w-full' />
                            </div>

                            <div className=' p-1.5  rounded-md border'><img src='https://hms.demandhourly.com/backend/images/default.jpg' className='w-full' alt='img' /></div>

                            <div className=' p-1.5  rounded-md border'><img src='https://hms.demandhourly.com/backend/images/default.jpg' className='w-full' alt='img' /></div>

                            <div className=' p-1.5  rounded-md border'><img src='https://hms.demandhourly.com/backend/images/default.jpg' className='w-full' alt='img' /></div>

                        </div>
                    </div>


                    <button className="bg-blue-400  w-fit  self-end px-3 text-white hover:bg-blue-800 py-0.5 rounded-sm mb-4">Save</button>
                </form>


            </div>
        </div>



    )
}

export default GeneralSettingEditForm;