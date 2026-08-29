
// Section.jsx
import React from 'react';

function idCard(props) {
  return (
    <section>
      <p>firstname: {props.firstname}</p>
      <p>lastname: {props.lastname}</p>
    </section>
  );
}

export default Section;