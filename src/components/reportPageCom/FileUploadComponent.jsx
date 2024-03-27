import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadComponent = ({ handleEditClick }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Lấy tập tin đầu tiên từ danh sách tập tin đã chọn
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file); // Lưu trữ đối tượng File
  };

  const handleUpload = () => {
    // Thực hiện xử lý tải lên tập tin ở đây
    console.log(selectedFile); // Log ra thông tin về tập tin đã chọn
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        accept=".pdf, .doc, .docx"
        style={{ display: 'none' }}
      />
      <label htmlFor="file-upload">
        <Button
          component="span"
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
        >
          Chọn tập tin
        </Button>
      </label>
      {selectedFile && (
        <span>
          {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)}{' '}
          MB)
        </span>
      )}
      <Button onClick={handleUpload} variant="contained" color="success">
        Tải lên
      </Button>

      <Button onClick={handleEditClick} variant="contained" color="error">
        Hủy
      </Button>
    </Stack>
  );
};

export default FileUploadComponent;
