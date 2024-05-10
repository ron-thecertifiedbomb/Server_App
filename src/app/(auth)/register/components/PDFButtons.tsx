import React, { useState } from 'react';
import { compose } from 'redux';

import TextButton from '@/components/Buttons/TextButton';
import PDFDialog from '@/components/Dialog/PDFDialog';
import { withSettingSelector } from '@/redux/slice/settingSlice/hoc';

const PDFButtons = (props: any) => {
  const { policyData } = props;

  const [showPdf, setShowPdf] = useState(false);
  const [pdfURL, setPDFurl] = useState('');

  const onClickButton = (type: string) => {
    const { data: response } = policyData;

    setPDFurl((_) =>
      type === 'privacy'
        ? response.data.find((item: any) => item.policyTitle === 'Privacy Policy')?.filePath
        : response.data.find((item: any) => item.policyTitle === 'Terms of Use')?.filePath
    );
    setShowPdf((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col mt-8">
      <div>
        <TextButton
          onClick={() => onClickButton('privacy')}
          buttonText="Privacy Policy"
          buttonClassName="mb-4"
          textClassName="font-poppins font-medium text-[14px] underline"
        />
      </div>
      <div>
        <TextButton
          onClick={() => onClickButton('terms')}
          buttonText="Terms of Use"
          textClassName="font-poppins font-medium text-[14px] underline"
        />
      </div>
      <PDFDialog url={pdfURL} open={showPdf} onClose={() => setShowPdf(false)} />
    </div>
  );
};

const WrappedComponent = compose(withSettingSelector)(PDFButtons);

export default WrappedComponent;
