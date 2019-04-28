import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16292.02914724328!2d18.05609398955078!3d59.30784659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77eed7140101%3A0x797f6f2886cc8f90!2sStockholms+S%C3%B6dra+Station!5e0!3m2!1sid!2sse!4v1556486081838!5m2!1sid!2sse"
        width="100%"
        height="450"
        frameborder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
