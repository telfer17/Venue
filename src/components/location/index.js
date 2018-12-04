import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.9812646694313!2d-0.10528968464720968!3d51.56857697964523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM0JzA2LjkiTiAwwrAwNicxMS4yIlc!5e0!3m2!1sen!2suk!4v1543960401341"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        ></iframe>

        <div className="location_tag">
          <div>Location</div>
        </div>
        
    </div>
  );
};

export default Location;
