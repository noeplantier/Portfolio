import React, { useState } from 'react';
import { uploadFile } from '../../../../storage'; // Assurez-vous que cette fonction est correcte

const StorageComponent = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (file) {
      try {
        const url = await uploadFile(file);
        alert('File uploaded! File URL: ' + url);
      } catch (error) {
        console.error('File upload failed:', error);
        alert('Error uploading file.');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // On s'assure que le fichier est non nul
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>Upload</button>
    </div>
  );
};

export default StorageComponent;
