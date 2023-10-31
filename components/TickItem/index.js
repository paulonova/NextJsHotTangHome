import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TickItem = ({ children }) => {
  return (
    <div className="grid grid-cols-[50px_1fr] gap-3 my-10">
      <div className="text-3xl text-green-500 flex justify-center items-center">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TickItem;
