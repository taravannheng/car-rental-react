import { FC } from 'react';

interface Props {
  text: string;
}

const DividerWithText: FC<Props> = ({ text }) => {
  return (
    <div className="divider divider__with-text">
      <hr />
      <p>{text}</p>
    </div>
  );
};

export default DividerWithText;
