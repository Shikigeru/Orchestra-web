import React from 'react';
import LeftInfoBlock from './components/LeftInfoBlock';
import RightInfoBlock from './components/RightInfoBlock';

const BottomInfoBlock = () => {
  return (
    <div className="row">
      <div className="col-md-7">
        <LeftInfoBlock />
      </div>
      <div className="col-md-5">
        <RightInfoBlock />
      </div>
    </div>
  );
};

export default BottomInfoBlock;
