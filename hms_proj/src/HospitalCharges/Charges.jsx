import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';

Modal.setAppElement('#root');

const Charge = () => {
  const [charges, setCharges] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [chargeCategory, setChargeCategory] = useState('');
  const [code, setCode] = useState('');
  const [chargeType, setChargeType] = useState('');
  const [description, setDescription] = useState('');
  const [standardCharge, setStandardCharge] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentChargeId, setCurrentChargeId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCharges();
    fetchCategories();
  }, []);

  const fetchCharges = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-charges`);
      if (response.data.success && Array.isArray(response.data.response)) {
        setCharges(response.data.response);
      } else {
        console.error('Unexpected response format:', response.data);
        setError('Failed to fetch charges');
      }
    } catch (error) {
      console.error('Error fetching charges:', error);
      setError('Failed to fetch charges');
    }
  };
  

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-chargeCategories`);
      setCategories(response.data.response);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch charge categories');
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
    setChargeCategory('');
    setCode('');
    setChargeType('');
    setDescription('');
    setStandardCharge('');
    setIsEditing(false);
    setError('');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.patch(`${import.meta.env.VITE_APP_BASE_URL}/setup/update-charge/${currentChargeId}`, {
          chargeCategory,
          code,
          chargeType,
          description,
          standardCharge
        });
      } else {
        await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/setup/create-charge`, {
          chargeCategory,
          code,
          chargeType,
          description,
          standardCharge
        });
      }
      fetchCharges();
      closeModal();
      resetForm();
    } catch (error) {
      console.error('Error creating/updating charge:', error);
      setError('Failed to create/update charge');
    }
  };

  const handleEdit = (charge) => {
    setChargeCategory(charge.chargeCategory._id);
    setCode(charge.code);
    setChargeType(charge.chargeType);
    setDescription(charge.description);
    setStandardCharge(charge.standardCharge);
    setCurrentChargeId(charge._id);
    setIsEditing(true);
    setModalIsOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/setup/delete-charge/${id}`);
      fetchCharges();
    } catch (error) {
      console.error('Error deleting charge:', error);
      setError('Failed to delete charge');
    }
  };

  const resetForm = () => {
    setChargeCategory('');
    setCode('');
    setChargeType('');
    setDescription('');
    setStandardCharge('');
    setIsEditing(false);
    setCurrentChargeId(null);
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
              <th className="py-2 border-b border-gray-300">Charge Category</th>
              <th className="py-2 border-b border-gray-300">Charge Type</th>
              <th className="py-2 border-b border-gray-300">Code</th>
              <th className="py-2 border-b border-gray-300">Standard Charge</th>
              <th className="py-2 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {charges.length > 0 ? (
              charges.map((charge, index) => (
                <tr key={charge._id} className="hover:bg-gray-100">
                  <td className="py-2 border-b border-gray-300 text-center">{charge.chargeCategory.name}</td>
                  <td className="py-2 border-b border-gray-300 text-center">{charge.chargeType}</td>
                  <td className="py-2 border-b border-gray-300 text-center">{charge.code}</td>
                  <td className="py-2 border-b border-gray-300 text-center">{charge.standardCharge}</td>
                  <td className="py-2 border-b border-gray-300 text-center">
                    <button onClick={() => handleEdit(charge)} className="px-4 py-1 bg-green-500 text-white rounded-lg shadow-md hover:bg-yellow-600 mr-2">
                      <BiEdit size={20} />
                    </button>
                    <button onClick={() => handleDelete(charge._id)} className="px-4 py-1 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                      <MdOutlineDeleteOutline size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 border-b border-gray-300 text-center">No charges available</td>
              </tr>
            )}
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
            <h2 className="mb-4">{isEditing ? 'Update Charge' : 'Add Charge'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="chargeCategory">Charge Category</label>
                <select
                  id="chargeCategory"
                  value={chargeCategory}
                  onChange={(e) => setChargeCategory(e.target.value)}
                  className="w-full p-2 border mb-4"
                  required
                >
                  <option value="">Select Charge Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="code">Code</label>
                <input
                  type="number"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full p-2 border mb-4"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="chargeType">Charge Type</label>
                <select
                  id="chargeType"
                  value={chargeType}
                  onChange={(e) => setChargeType(e.target.value)}
                  className="w-full p-2 border mb-4"
                  required
                >
                  <option value="">Select Charge Type</option>
                  <option value="Procedures">Procedures</option>
                  <option value="Investigations">Investigations</option>
                  <option value="Supplier">Supplier</option>
                  <option value="Operation Theatre">Operation Theatre</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border mb-4"
                />
              </div>
              <div className="form-group">
                <label htmlFor="standardCharge">Standard Charge</label>
                <input
                  type="number"
                  id="standardCharge"
                  value={standardCharge}
                  onChange={(e) => setStandardCharge(e.target.value)}
                  className="w-full p-2 border mb-4"
                  required
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
                  {isEditing ? 'Update' : 'Submit'}
                </button>
                <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Charge;
