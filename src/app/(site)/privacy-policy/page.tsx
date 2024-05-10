'use client';
import React, { useReducer } from 'react';

import Accordion from '../components/Accordion/Accordion';
import Banner from '../components/Banner/Banner';
import Label from '../components/Label/Label';
import { PrivacyPolicyContent } from '../utilities/data/privacypolicy/privacypolicy';
import { privacySection, reducer } from '../utilities/reducers/accordionreducers';

const PrivacyPolicy = () => {
  const initialState = privacySection;
  const [sectionState, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Banner title={'Privacy Policy'} />
      <div className="container w-full m-auto mt-[47px] pl-[10px] pr-[10px] mb-[97px] max-w-[1197px]">
        <Accordion
          content={PrivacyPolicyContent.profile}
          selectedTitle={sectionState}
          dispatch={dispatch}
        />
        <Label
          label={'Privacy Notice'}
          marginTop={36}
          marginBottom={14}
          fontSize={'28px'}
          fontWeight={'600'}
          color={'#434343'}
        />
        <Accordion
          content={PrivacyPolicyContent.facts}
          selectedTitle={sectionState}
          dispatch={dispatch}
        />
        <Label
          label={'Web Analytics'}
          marginTop={36}
          marginBottom={14}
          fontSize={'28px'}
          fontWeight={'600'}
          color={'#434343'}
        />
        <Accordion
          content={PrivacyPolicyContent.policy}
          selectedTitle={sectionState}
          dispatch={dispatch}
        />
      </div>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
