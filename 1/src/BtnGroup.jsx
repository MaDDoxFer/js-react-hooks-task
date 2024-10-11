import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [active, setActive] = useState(null);

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={`btn btn-secondary left ${active === 'left' ? 'active' : ''}`}
        onClick={() => setActive('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={`btn btn-secondary right ${active === 'right' ? 'active' : ''}`}
        onClick={() => setActive('right')}
      >
        Right
      </button>
    </div>
  );
  
  // END
};

export default BtnGroup;