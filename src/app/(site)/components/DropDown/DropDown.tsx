/* eslint-disable */
import React, { useEffect, useRef,useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';

import styles from './styles.module.css';

interface Option {
  label: string;
  value: string;
}

interface DropDownProps {
  options: Option[];
  defaultValue: Option | null;
  onSelect: (option: Option) => void;
  setModeValue?: (value: string) => void;
  setInputValue?: (value: string) => void;
  setErrorPreferredModeOfCommunication?: (value: boolean) => void;
  setErrorValueConcern?: (value: boolean) => void;
  defaultLabel: string;
  error: boolean;
  zindex: string;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  defaultValue,
  onSelect,
  error,
  setModeValue,
  setInputValue,
  setErrorPreferredModeOfCommunication,
  setErrorValueConcern,
  defaultLabel,
  zindex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
    if (setErrorValueConcern) {
      setErrorValueConcern(false);
    }
    if (setErrorPreferredModeOfCommunication) {
      setErrorPreferredModeOfCommunication(false);
    }
    if (setModeValue) {
      setModeValue(option.value);
    }
    if (setInputValue) {
      setInputValue(option.value);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.drop_down_container}>
      <main className={styles.select_container}>
        <div className={zindex} ref={dropdownRef}>
          <div
            className={isOpen ? styles.select_header_clicked : styles.select_header}
            onClick={() => setIsOpen(!isOpen)}
          >
            {defaultValue ? (
              <p>{defaultValue.label}</p>
            ) : (
              <p className={styles.select_label}>{defaultLabel}</p>
            )}

            <div className={isOpen ? styles.up : styles.down}>
              <MdArrowBackIos />
            </div>
          </div>

          {isOpen && (
            <div className={styles.dropdown_options}>
              {options.map((option) => (
                <p className=' hover:bg-[#FAFAFA]' key={option.value} onClick={() => handleOptionClick(option)}>
                  {option.label}
                </p>
              ))}
            </div>
          )}
        </div>
        <br />
        <br />
        <div className={styles.error_container}>
          {error ? (
            <div className={styles.error_container_show} style={{ marginTop: '7px' }}>
              <div className={styles.error}>
                <p className="text-[#e81d2c] text-[16px]">This field is required.</p>
              </div>
            </div>
          ) : (
            <div className="error-hidden">
              <p className="hidden">This field is required</p>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default DropDown;
