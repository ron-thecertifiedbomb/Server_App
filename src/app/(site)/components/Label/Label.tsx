import { ReactNode } from 'react';


interface LabelProps {
  label: string | ReactNode;
  additionalLabel?: string | ReactNode;
  marginBottom?: number;
  marginTop?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  mediaqueries?: string;
}

const Label: React.FC<LabelProps> = ({
  label,
  additionalLabel,
  marginTop,
  marginBottom,
  fontSize,
  fontWeight,
  color,
  mediaqueries,
}) => {
  return (
    <>
      <p
        className={mediaqueries}
        style={{
          marginTop: marginTop,
          marginBottom: marginBottom,
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: color,
        }}
      >
        {label} {additionalLabel}
      </p>
    </>
  );
};

export default Label;
