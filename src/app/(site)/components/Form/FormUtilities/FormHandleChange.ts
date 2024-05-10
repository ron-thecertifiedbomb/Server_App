export const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setNameError: React.Dispatch<React.SetStateAction<string>>,
    setStore: React.Dispatch<React.SetStateAction<string>>,
    setStoreError: React.Dispatch<React.SetStateAction<string>>,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    setPhoneError: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setEmailError: React.Dispatch<React.SetStateAction<string>>,
    setComments: React.Dispatch<React.SetStateAction<string>>,
    setCommentsError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { name, value } = event.target;
  
    if (name === "name" && value.length <= 51) {
      setName(value);
  
      if (!/^[a-zA-Z0-9\s.'-]*$/.test(value)) {
        setNameError("Name should only contain (A-Z, a-z, 0-9, ., ', -)");
      } else if (value.length > 50) {
        setNameError("Name should not exceed 50 characters.");
      } else {
        setNameError("");
      }
    }
    // Store Name
  
    if (name === "store" && value.length <= 51) {
      setStore(value);
      if (value.length > 50) {
        setStoreError("Store Name should not exceed 50 characters.");
      } else {
        setStoreError("");
      }
    }
  
    // Contact Number
  
    if (name === "phone") {
      if (!/^[0-9]*$/.test(value)) {
        setPhoneError("This entry can only contain numbers.");
      } else {
        setPhone(value);
  
        if (value.length > 20) {
          setPhoneError("Contact Number should not exceed 20 characters.");
          setPhone(value.substring(0, 21));
        } else {
          setPhoneError("");
        }
      }
    }
  
    // Email
    else if (name === "email" && value.length <= 31) {
      setEmail(value);
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        setEmailError("You have entered an invalid format. Please try again.");
      } else if (value.length > 30) {
        setEmailError("Email should not exceed 30 characters.");
      } else {
        setEmailError("");
      }
    }
  
    // Concern/s Description
  
    if (name === "comments" && value.length <= 201) {
      setComments(value);
      if (value.length > 200) {
        setCommentsError(
          "Concern/s and Description should not exceed 200 characters."
        );
      } else {
        setCommentsError("");
      }
    }
  };
  