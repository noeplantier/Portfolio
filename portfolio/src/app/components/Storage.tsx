import React, { useState } from 'react';
import { uploadFile } from '../../../../storage';

const StorageComponent = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (file) {
      const url = await uploadFile(file);
      alert('File uploaded! File URL: ' + url);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default StorageComponent;
