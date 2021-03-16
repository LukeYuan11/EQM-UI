import React from 'react'
import { Spin } from 'antd';

const Loading = ({ tip }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin style={{ marginRight: 10 }} tip={tip} />
      LOADING...
    </div>
  );
};

export default Loading;