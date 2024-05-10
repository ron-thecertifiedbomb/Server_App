import React from 'react';
import { Box, Tab as MUITab, Tabs } from '@mui/material';
import { compose } from 'redux';

import { withRegisterHoc, withRegisterSelector } from '@/redux/slice/registerSlice/hoc';

import EmailForm from './EmailForm';
import MobileForm from './MobileForm';

const Tab = (props: any) => {
  const { isRegisterLoading, clearAllRegisterData } = props;

  const [value, setValue] = React.useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    clearAllRegisterData();
    setValue(newValue);
  };

  const renderTab = () => {
    if (value === 0) return <MobileForm />;
    return <EmailForm />;
  };

  return (
    <div className="mx-4 w-[95%] rounded border bg-white px-3 py-4 lg:max-w-[500px]">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#e81d2c',
              },
            }}
            sx={{
              '.Mui-selected': {
                color: '#e81d2c !Important',
              },
              '.MuiButtonBase-root': {
                textTransform: 'capitalize !Important',
              },
            }}
            aria-label="basic tabs example"
          >
            <MUITab
              className={`flex-1 !font-poppins !text-[16px] !font-regular`}
              label="Mobile"
              disabled={isRegisterLoading}
              {...a11yProps(0)}
            />
            <MUITab
              className={`flex-1 !font-poppins !text-[16px] !font-regular`}
              label="Email"
              disabled={isRegisterLoading}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        {renderTab()}
      </Box>
    </div>
  );
};

const WrappedComponent = compose(withRegisterHoc, withRegisterSelector)(Tab);

export default WrappedComponent;
