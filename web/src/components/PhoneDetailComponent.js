import React from 'react';

function PhoneDetailComponent(phone) {
  return (
    <div>
      <p>Phone Detail Component</p>
      <span>{`${JSON.stringify(phone)}`}</span>
    </div>
  );
}

export default PhoneDetailComponent;
