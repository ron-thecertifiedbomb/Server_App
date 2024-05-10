/* eslint-disable react/display-name */
import React from 'react';
/** Redux */
import { useSelector } from 'react-redux';

/**
 * A HOC that is being used for our network.
 * It has states that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withNavSelector = (CustomComponent: any) => {
  return (props: any) => {
    //State
    const recentSearch = useSelector((state: any) => state.Nav.recentSearch);
    const searchKey = useSelector((state: any) => state.Nav.searchKey);

    return <CustomComponent {...props} recentSearch={recentSearch} searchKey={searchKey} />;
  };
};
