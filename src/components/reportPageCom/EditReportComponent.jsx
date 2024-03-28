import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import { configJodit } from '@/constaints/configJodit'; // Make sure the import path is correct
import { useMemo } from 'react';

const MyEditorComponent = () => {
  const [content, setContent] = useState('');

  const config = useMemo(
    () => configJodit, // Pass the configJodit directly
    [], // Empty dependency array because the config doesn't depend on any variables
  );

  const handleChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <JoditEditor
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => handleChange(newContent)}
      onChange={(newContent) => handleChange(newContent)}
    />
  );
};

export default MyEditorComponent;
