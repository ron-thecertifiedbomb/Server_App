import React from 'react';

import Banner from '../components/Banner/Banner';
import Form from '../components/Form/Form';

const ContactUs = () => {
  return (
    <React.Fragment>
      <Banner title={'Contact Us'} />
      <div className="container w-full m-auto ">
        <Form />
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
