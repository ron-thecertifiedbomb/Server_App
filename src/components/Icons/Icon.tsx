import React from 'react';

import { IconTypes } from '@/shared/enums';
import { IconProps } from '@/shared/interfaces';

const Icon = ({ type = IconTypes.MATERIAL, className, icon, sx }: IconProps) => {
  return (
    <React.Fragment>
      {[
        IconTypes.MATERIAL,
        IconTypes.MATERIAL_OUTLINED,
        IconTypes.MATERIAL_ROUND,
        IconTypes.MATERIAL_SHARP,
        IconTypes.MATERIAL_TWO_TONE,
      ].includes(type) && (
        <i className={`${className} ${type}`} style={sx}>
          {icon}
        </i>
      )}
    </React.Fragment>
  );
};

export default Icon;
