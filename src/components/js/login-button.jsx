import React from 'react';

const LoginButton = (props) => {
  return (
    <a href={props.href} >

          <div className="px-6 mx-4 py-2 z-10 bg-custom-navy hover:bg-dark-blue text-white w-36 font-semibold rounded-md transition duration-300 ease-in-out">{props.text}</div>
    </a>
  );
};

export default LoginButton;
