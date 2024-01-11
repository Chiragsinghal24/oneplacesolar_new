import React from 'react';
import { BiSolidDownload } from 'react-icons/bi';

const Download = ({ Documentname, fileUrl }) => {
  return (
    <>
      <div className="alert shadow-lg bg-warning">
        <h3 className="text-black-900">{Documentname}</h3>
        <button className="btn btn-warning cursor-pointer text-black-900 lg:ml-auto" onClick={() => window.open(fileUrl, '_blank')}>
          <BiSolidDownload size={30} />Download
        </button>
      </div>
    </>
  );
};

export default Download;
