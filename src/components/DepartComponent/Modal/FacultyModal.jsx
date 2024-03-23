import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';

import { TextareaAutosize } from '@mui/material';
import {
  fetchApiAddFalcuty,
  fetchApiEditFaculty,
  fetchApiFalcuty,
} from '@/redux/slice/falcuty/FalcutySlice';

function FacultyModal({ open, handleClose, editItem }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
  });

  useEffect(() => {
    if (editItem) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: editItem.id,
        name: editItem.name,
        description: editItem.description,
      }));
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!editItem) {
      dispatch(fetchApiAddFalcuty(formData)).then(() => {
        dispatch(fetchApiFalcuty());
      });
    } else {
      dispatch(fetchApiEditFaculty(formData)).then(() => {
        dispatch(fetchApiFalcuty());
      });
    }

    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-faculty-modal-title"
      aria-describedby="add-faculty-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="add-faculty-modal-title">
          {editItem ? 'Sửa khoa' : 'Thêm khoa mới'}
        </h2>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Mã khoa"
            name="id"
            value={formData.id}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Tên khoa"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextareaAutosize
            minRows={3}
            maxRows={6}
            aria-label="empty textarea"
            placeholder="Mô tả"
            style={{
              width: '100%',
              minHeight: 100,
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'vertical',
              outline: 'none',
            }}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Lưu
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default FacultyModal;
