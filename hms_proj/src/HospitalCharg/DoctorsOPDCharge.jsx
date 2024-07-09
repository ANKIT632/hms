import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';


const DoctorOPDCharge = () => {
  // const [doctorOPDCharges, setDoctorOPDCharges] = useState([]);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [doctor, setDoctor] = useState('');
  // const [standardCharge, setStandardCharge] = useState('');
  // const [isEditing, setIsEditing] = useState(false);
  // const [currentChargeId, setCurrentChargeId] = useState(null);
  // const [doctors, setDoctors] = useState([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchDoctorOPDCharges();
  //   fetchDoctors();
  // }, []);

  // const fetchDoctorOPDCharges = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}'/setup/get-drOpdCharges`);
  //     setDoctorOPDCharges(response.data.response);
  //   } catch (error) {
  //     console.error('Error fetching Doctor OPD Charges:', error);
  //     setError('Failed to fetch doctor OPD charges');
  //   }
  // };

  // const fetchDoctors = async () => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/hr/get-staffs`);
  //     setDoctors(response.data.data);
  //   } catch (error) {
  //     console.error('Error fetching doctors:', error);
  //     setError('Failed to fetch doctors');
  //   }
  // };

  // const openModal = () => {
  //   setModalIsOpen(true);
  //   setDoctor('');
  //   setStandardCharge('');
  //   setIsEditing(false);
  //   setError('');
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setError('');
  // };

  // const handleSubmit = async () => {
  //   try {
  //     await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/setup/create-drOpdCharge`, {
  //       doctor,
  //       standardCharge: parseFloat(standardCharge),
  //     });
  //     fetchDoctorOPDCharges();
  //     closeModal();
  //   } catch (error) {
  //     console.error('Error creating Doctor OPD Charge:', error);
  //     setError('Failed to create doctor OPD charge');
  //   }
  // };

  // const handleUpdate = async () => {
  //   try {
  //     await axios.patch(`${import.meta.env.VITE_APP_BASE_URL}/setup/update-drOpdCharge/${currentChargeId}`, {
  //       doctor,
  //       standardCharge: parseFloat(standardCharge),
  //     });
  //     fetchDoctorOPDCharges();
  //     closeModal();
  //   } catch (error) {
  //     console.error('Error updating Doctor OPD Charge:', error);
  //     setError('Failed to update doctor OPD charge');
  //   }
  // };

  // const handleEdit = async (id) => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/setup/get-drOpdChargeById/${id}`);
  //     setDoctor(response.data.response.doctor);
  //     setStandardCharge(response.data.response.standardCharge.toString());
  //     setCurrentChargeId(id);
  //     setIsEditing(true);
  //     setModalIsOpen(true);
  //   } catch (error) {
  //     console.error('Error fetching Doctor OPD Charge by ID:', error);
  //     setError('Failed to fetch doctor OPD charge for editing');
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/setup/delete-drOpdCharge/${id}`);
  //     fetchDoctorOPDCharges();
  //   } catch (error) {
  //     console.error('Error deleting Doctor OPD Charge:', error);
  //     setError('Failed to delete doctor OPD charge');
  //   }
  // };

  return (
  <div>
    
  </div>
      );
    };
    
    export default DoctorOPDCharge;
    