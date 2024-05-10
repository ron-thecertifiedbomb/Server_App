import React from 'react';

import { promotions } from '../../../../../../__mocks__/promotions';

import PromotionSectionItem from './PromotionSectionItem';

const PromotionSection = () => {
  return (
    <div>
      {promotions?.map((promotion, i) => (
        <React.Fragment key={i}>
          <PromotionSectionItem {...promotion} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PromotionSection;
