import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';

Modal.setAppElement('#root');

const Charge = () => {
  // const [charges, setCharges] = useState([{},{}]);
  // const [categories, setCategories] = useState([{},{}]);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [chargeCategory, setChargeCategory] = useState('');
  // const [code, setCode] = useState('');
  // const [chargeType, setChargeType] = useState('');
  // const [description, setDescription] = useState('');
  // const [standardCharge, setStandardCharge] = useState('');
  // const [isEditing, setIsEditing] = useState(false);
  // const [currentChargeId, setCurrentChargeId] = useState(null);
  // const [error, setError] = useState('');

  // // useEffect(() => {
  // //   fetchCharges();
  // //   fetchCategories();
  // // }, []);

  // const fetchCharges = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-charges`);
  //     if (response.data.success && Array.isArray(response.data.response)) {
  //       setCharges(response.data.response);
  //     } else {
  //       console.error('Unexpected response format:', response.data);
  //       setError('Failed to fetch charges');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching charges:', error);
  //     setError('Failed to fetch charges');
  //   }
  // };
  

  // const fetchCategories = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-chargeCategories`);
  //     setCategories(response.data.response);
  //   } catch (error) {
  //     console.error('Error fetching categories:', error);
  //     setError('Failed to fetch charge categories');
  //   }
  // };

  // const openModal = () => {
  //   setModalIsOpen(true);
  //   setChargeCategory('');
  //   setCode('');
  //   setChargeType('');
  //   setDescription('');
  //   setStandardCharge('');
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
  //       await axios.patch(`${import.meta.env.VITE_APP_BASE_URL}/setup/update-charge/${currentChargeId}`, {
  //         chargeCategory,
  //         code,
  //         chargeType,
  //         description,
  //         standardCharge
  //       });
  //     } else {
  //       await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/setup/create-charge`, {
  //         chargeCategory,
  //         code,
  //         chargeType,
  //         description,
  //         standardCharge
  //       });
  //     }
  //     fetchCharges();
  //     closeModal();
  //     resetForm();
  //   } catch (error) {
  //     console.error('Error creating/updating charge:', error);
  //     setError('Failed to create/update charge');
  //   }
  // };

  // const handleEdit = (charge) => {
  //   setChargeCategory(charge.chargeCategory._id);
  //   setCode(charge.code);
  //   setChargeType(charge.chargeType);
  //   setDescription(charge.description);
  //   setStandardCharge(charge.standardCharge);
  //   setCurrentChargeId(charge._id);
  //   setIsEditing(true);
  //   setModalIsOpen(true);
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/setup/delete-charge/${id}`);
  //     fetchCharges();
  //   } catch (error) {
  //     console.error('Error deleting charge:', error);
  //     setError('Failed to delete charge');
  //   }
  // };

  // const resetForm = () => {
  //   setChargeCategory('');
  //   setCode('');
  //   setChargeType('');
  //   setDescription('');
  //   setStandardCharge('');
  //   setIsEditing(false);
  //   setCurrentChargeId(null);
  // };

  return (
    <div className="shadow-sm shadow-slate-300 rounded-sm">
        
    </div>
  );
};

export default Charge;
