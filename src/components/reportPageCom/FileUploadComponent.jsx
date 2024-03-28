import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect } from 'react';

const FileUploadComponent = ({ handleEditClick }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Lấy tập tin đầu tiên từ danh sách tập tin đã chọn

    setSelectedFile(event.target.files[0]); // Lưu trữ đối tượng File
  };

  const handleUpload = () => {
    // Thực hiện xử lý tải lên tập tin ở đây
    if (selectedFile) {
      console.log(selectedFile); // Log ra thông tin về tập tin đã chọn
      // Code để tải lên tập tin
    }
  };

  useEffect(() => {
    if (selectedFile) console.log(selectedFile.name);
  }, [selectedFile]);

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
        <Typography sx={{ height: 20 }}>
          {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)}{' '}
          MB)
        </Typography>
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
