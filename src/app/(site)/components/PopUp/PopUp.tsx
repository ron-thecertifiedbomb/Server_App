/* eslint-disable */
import React from 'react';

import styles from './styles.module.css'

interface PopupProps {
  fileSizeError: boolean;
  setFileSizeError: React.Dispatch<React.SetStateAction<boolean>>;
  fileTypeError: boolean;
  setFileTypeError: React.Dispatch<React.SetStateAction<boolean>>;
  fileTypeAndSizeError: boolean;
  setFileTypeAndSizeError: React.Dispatch<React.SetStateAction<boolean>>;
  handleClearFileSelection: () => void;
}

const Popup: React.FC<PopupProps> = ({
  fileSizeError,
  setFileSizeError,
  fileTypeError,
  setFileTypeError,
  fileTypeAndSizeError,
  setFileTypeAndSizeError,
  handleClearFileSelection
}) => {
  const closePopup = () => {
    setFileSizeError(false);
    setFileTypeError(false);
    setFileTypeAndSizeError(false);
    handleClearFileSelection();
  };

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div>
      {fileSizeError && (
        <div className={styles.overlay} onClick={closePopup}>
          <div className={styles.popup} onClick={stopPropagation}>
            <h2>Oops!!</h2>
            <p>File Upload is larger than 5 MB</p>
            <button onClick={closePopup}  className={styles.popup_button}>Okay</button>
          </div>
        </div>
      )}

      {fileTypeError && (
        <div className={styles.overlay} onClick={closePopup}>
          <div  className={styles.popup} onClick={stopPropagation}>
            <h2>Oops!!</h2>
            <p>Invalid file format. We can't upload your image/file. Please try again</p>
            <button onClick={closePopup} className={styles.popup_button}>Okay</button>
          </div>
        </div>
      )}

      {fileTypeAndSizeError && (
        <div className={styles.overlay} onClick={closePopup}>
          <div className={styles.popup} onClick={stopPropagation}>
            <h1 className={styles.popup_title}>Oops!!</h1>
            <p className={styles.error_title}>File upload is larger than 5 MB with an invalid format. We can't upload your image/file. Please try again</p>
            <button onClick={closePopup} className={styles.popup_button}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
