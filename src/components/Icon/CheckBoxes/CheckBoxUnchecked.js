// @flow
import React from 'react';

function CheckBoxUnchecked(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 20 20">
      <path d="M18.5.04l.22.04.2.06.19.08.17.1.15.12.13.13.12.15.1.17.08.19.06.2.04.22.03.24L20 2v16l-.01.26-.03.24-.04.22-.06.2-.08.19-.1.17-.12.15-.13.13-.15.12-.17.1-.19.08-.2.06-.22.04-.24.03L18 20H2l-.26-.01-.24-.03-.22-.04-.2-.06-.19-.08-.17-.1-.15-.12-.13-.13-.12-.15-.1-.17-.08-.19-.06-.2-.04-.22-.03-.24L0 18V2l.01-.26.03-.24.04-.22.06-.2.08-.19.1-.17.12-.15.13-.13.15-.12.17-.1.19-.08.2-.06.22-.04.24-.03L2 0h16l.26.01.24.03zM2.55 2.03l-.08.02-.08.03-.07.03-.07.05-.06.05-.05.06-.05.07-.03.07-.03.08-.02.08v14.86l.02.08.03.08.03.07.05.07.05.06.06.05.07.05.07.03.08.03.08.02h14.9l.08-.02.08-.03.07-.03.07-.05.06-.05.05-.06.05-.07.03-.07.03-.08.02-.08V2.57l-.02-.08-.03-.08-.03-.07-.05-.07-.05-.06-.06-.05-.07-.05-.07-.03-.08-.03-.08-.02H2.55z" />
    </svg>
  );
}

CheckBoxUnchecked.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default CheckBoxUnchecked;
