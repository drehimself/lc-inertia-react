import React from 'react';
import Guest from '../Layouts/Guest';

export default function Index(props) {
  return (
    <Guest>
      <div>Index: {props.foo}</div>
    </Guest>
  );
}
