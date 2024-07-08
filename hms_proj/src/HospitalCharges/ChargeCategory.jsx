import  { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';

Modal.setAppElement('#root');

const ChargeCategory = () => {
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [chargeType, setChargeType] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-chargeCategories`);
      setCategories(response.data.response); // Correctly set categories to response.data.response
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch charge categories');
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
    setName('');
    setDescription('');
    setChargeType('');
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
        await axios.patch(`${import.meta.env.VITE_APP_BASE_URL}/v1/setup/update-chargeCategory/${currentCategoryId}`, {
          name,
          description,
          chargeType,
        });
      } else {
        await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/setup/create-chargeCategory`, {
          name,
          description,
          chargeType,
        });
      }
      fetchCategories();
      closeModal();
      resetForm();
    } catch (error) {
      console.error('Error creating/updating category:', error);
      setError('Failed to create/update charge category');
    }
  };

  const handleEdit = (category) => {
    setName(category.name);
    setDescription(category.description);
    setChargeType(category.chargeType);
    setCurrentCategoryId(category._id);
    setIsEditing(true);
    setModalIsOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/setup/delete-chargeCategory/${id}`);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      setError('Failed to delete charge category');
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setChargeType('');
    setIsEditing(false);
    setCurrentCategoryId(null);
  };

  return (
    <div className="shadow-sm shadow-slate-300 rounded-sm">
      <div className="mb-4 flex justify-end px-20">
        <button onClick={openModal} className="px-4 py-2 bg-green-500 text-white">
          Add Category
        </button>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="flex items-center justify-center">
        <table className="min-w-[86%] bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 border-b border-gray-300">Name</th>
              <th className="py-2 border-b border-gray-300">Description</th>
              <th className="py-2 border-b border-gray-300">Charge Type</th>
              <th className="py-2 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id} className="hover:bg-gray-100">
                <td className="py-2 border-b border-gray-300 text-center">{category.name}</td>
                <td className="py-2 border-b border-gray-300 text-center">{category.description}</td>
                <td className="py-2 border-b border-gray-300 text-center">{category.chargeType}</td>
                <td className="py-2 border-b border-gray-300 text-center">
                  <button onClick={() => handleEdit(category)} className="px-4 py-1 bg-green-500 text-white rounded-lg shadow-md hover:bg-yellow-600 mr-2">
                    <BiEdit size={20} />
                  </button>
                  <button onClick={() => handleDelete(category._id)} className="px-4 py-1 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
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
            <h2 className="mb-4">{isEditing ? 'Update Category' : 'Add Category'}</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border mb-4"
                required
              />
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
            <div className="flex space-x-4 mt-4">
              {isEditing ? (
                <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white">
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

export default ChargeCategory;
