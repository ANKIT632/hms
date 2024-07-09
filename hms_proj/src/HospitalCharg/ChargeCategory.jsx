import  { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';



const ChargeCategory = () => {
  // const [categories, setCategories] = useState([]);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [chargeType, setChargeType] = useState('');
  // const [isEditing, setIsEditing] = useState(false);
  // const [currentCategoryId, setCurrentCategoryId] = useState(null);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  // const fetchCategories = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-chargeCategories`);
  //     setCategories(response.data.response); // Correctly set categories to response.data.response
  //   } catch (error) {
  //     console.error('Error fetching categories:', error);
  //     setError('Failed to fetch charge categories');
  //   }
  // };

  // const openModal = () => {
  //   setModalIsOpen(true);
  //   setName('');
  //   setDescription('');
  //   setChargeType('');
  //   setIsEditing(false);
  //   setError('');
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setError('');
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (isEditing) {
  //       await axios.patch(`${import.meta.env.VITE_APP_BASE_URL}/v1/setup/update-chargeCategory/${currentCategoryId}`, {
  //         name,
  //         description,
  //         chargeType,
  //       });
  //     } else {
  //       await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/setup/create-chargeCategory`, {
  //         name,
  //         description,
  //         chargeType,
  //       });
  //     }
  //     fetchCategories();
  //     closeModal();
  //     resetForm();
  //   } catch (error) {
  //     console.error('Error creating/updating category:', error);
  //     setError('Failed to create/update charge category');
  //   }
  // };

  // const handleEdit = (category) => {
  //   setName(category.name);
  //   setDescription(category.description);
  //   setChargeType(category.chargeType);
  //   setCurrentCategoryId(category._id);
  //   setIsEditing(true);
  //   setModalIsOpen(true);
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/setup/delete-chargeCategory/${id}`);
  //     fetchCategories();
  //   } catch (error) {
  //     console.error('Error deleting category:', error);
  //     setError('Failed to delete charge category');
  //   }
  // };

  // const resetForm = () => {
  //   setName('');
  //   setDescription('');
  //   setChargeType('');
  //   setIsEditing(false);
  //   setCurrentCategoryId(null);
  // };

  return (
    <div></div>
  );
};

export default ChargeCategory;
