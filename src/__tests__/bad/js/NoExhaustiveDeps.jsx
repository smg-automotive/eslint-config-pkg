import React, { useEffect, useState } from 'react';

const NoExhaustiveDeps = ({ onChange }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <input
      value={value}
      type="text"
      onChange={(event) => setValue(event.target.value)}
    ></input>
  );
};

NoExhaustiveDeps.propTypes = {
  onChange: () => {},
};

export default NoExhaustiveDeps;
