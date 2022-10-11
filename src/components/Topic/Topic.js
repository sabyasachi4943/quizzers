import React from 'react';

const Topic = ({topic}) => {
  const { name, logo, total } = topic;
  return (
    <div>
      <h5>{ name }</h5>
      <img src={logo} alt="" />
      <p>{ total }</p>
    </div>
  );
};

export default Topic;