import React from 'react';

const DocCheckbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input className="document-checkbox" type={type} name={name} checked={checked} onChange={onChange} />
);

export default DocCheckbox;