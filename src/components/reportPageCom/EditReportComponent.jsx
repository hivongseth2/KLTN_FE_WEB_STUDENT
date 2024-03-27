import { Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditReportComponent = ({ report, edit }) => {
  const [text, setText] = useState(report); // Quản lý nội dung với hook useState

  // Hàm xử lý thay đổi nội dung
  const handleChange = (content) => {
    setText(content);
  };

  if (edit) {
    return (
      <ReactQuill
        theme="snow" // Chủ đề snow là chủ đề mặc định và phổ biến
        value={text} // Nội dung hiện tại của trình soạn thảo
        onChange={handleChange} // Xử lý sự kiện khi nội dung thay đổi
      />
    );
  } else {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  }
};

export default EditReportComponent;
