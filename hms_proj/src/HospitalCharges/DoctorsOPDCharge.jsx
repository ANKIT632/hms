import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';

Modal.setAppElement('#root');

const DoctorOPDCharge = () => {
  const [doctorOPDCharges, setDoctorOPDCharges] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [doctor, setDoctor] = useState('');
  const [standardCharge, setStandardCharge] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentChargeId, setCurrentChargeId] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDoctorOPDCharges();
    fetchDoctors();
  }, []);

  const fetchDoctorOPDCharges = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}'/setup/get-drOpdCharges`);
      setDoctorOPDCharges(response.data.response);
    } catch (error) {
      console.error('Error fetching Doctor OPD Charges:', error);
      setError('Failed to fetch doctor OPD charges');
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/hr/get-staffs`);
      setDoctors(response.data.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setError('Failed to fetch doctors');
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
    setDoctor('');
    setStandardCharge('');
    setIsEditing(false);
    setError('');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setError('');
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/setup/create-drOpdCharge`, {
        doctor,
        standardCharge: parseFloat(standardCharge),
      });
      fetchDoctorOPDCharges();
      closeModal();
    } catch (error) {
      console.error('Error creating Doctor OPD Charge:', error);
      setError('Failed to create doctor OPD charge');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(`${import.meta.env.VITE_APP_BASE_URL}/setup/update-drOpdCharge/${currentChargeId}`, {
        doctor,
        standardCharge: parseFloat(standardCharge),
      });
      fetchDoctorOPDCharges();
      closeModal();
    } catch (error) {
      console.error('Error updating Doctor OPD Charge:', error);
      setError('Failed to update doctor OPD charge');
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-drOpdChargeById/${id}`);
      setDoctor(response.data.response.doctor);
      setStandardCharge(response.data.response.standardCharge.toString());
      setCurrentChargeId(id);
      setIsEditing(true);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error fetching Doctor OPD Charge by ID:', error);
      setError('Failed to fetch doctor OPD charge for editing');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/setup/delete-drOpdCharge/${id}`);
      fetchDoctorOPDCharges();
    } catch (error) {
      console.error('Error deleting Doctor OPD Charge:', error);
      setError('Failed to delete doctor OPD charge');
    }
  };

  return (
    <div className="shadow-sm shadow-slate-300 rounded-sm">
      <div className="mb-4 flex justify-end px-20">
        <button onClick={openModal} className="px-4 py-2 bg-green-500 text-white">
          Add Charge
        </button>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="flex items-center justify-center">
        <table className="min-w-[86%] bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 border-b border-gray-300">SN</th>
              <th className="py-2 border-b border-gray-300">Doctor</th>
              <th className="py-2 border-b border-gray-300">Standard Charge ($)</th>
              <th className="py-2 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctorOPDCharges.map((charge, index) => (
              <tr key={charge._id} className="hover:bg-gray-100">
                <td className="py-2 border-b border-gray-300 text-center">{index + 1}</td>
                <td className="py-2 border-b border-gray-300 text-center">{charge.doctor}</td>
                <td className="py-2 border-b border-gray-300 text-center">{charge.standardCharge}</td>
                <td className="py-2 border-b border-gray-300 text-center">
                  <button onClick={() => handleEdit(charge._id)} className="px-4 py-1 bg-green-500 text-white rounded-lg shadow-md hover:bg-yellow-600 mr-2">
                    <BiEdit size={20} />
                  </button>
                  <button onClick={() => handleDelete(charge._id)} className="px-4 py-1 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                    <MdOutlineDeleteOutline size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <div className="p-4">
            <h2 className="mb-4">{isEditing ? 'Update Doctor OPD Charge' : 'Add Doctor OPD Charge'}</h2>
            <div className="form-group">
              <label htmlFor="doctor">Doctor</label>
              <select
                id="doctor"
                value={
                    doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full p-2 border mb-4"
                    required
                  >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc) => (
                      <option key={doc._id} value={doc._id}>
                        {doc.firstName} {doc.lastName}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="number"
                  value={standardCharge}
                  onChange={(e) => setStandardCharge(e.target.value)}
                  className="w-full p-2 border mb-4"
                  placeholder="Standard Charge ($)"
                  required
                />
                <div className="flex space-x-4 mt-4">
                  {isEditing ? (
                    <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white">
                      Update
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white">
                      Submit
                    </button>
                  )}
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      );
    };
    
    export default DoctorOPDCharge;
    