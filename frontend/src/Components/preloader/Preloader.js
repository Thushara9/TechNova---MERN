import React from 'react';
import { PropagateLoader} from 'react-spinners';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      <PropagateLoader color={"#36D7B7"} loading={true} size={21} />
    </div>
  );
};

export default Preloader;
