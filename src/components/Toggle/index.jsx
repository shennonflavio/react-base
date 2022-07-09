import { func, string } from 'prop-types';
import React, { useState } from 'react';
import { stars } from '../../assets';

import { Container, ButtonTheme, WrapperToggleButton } from './styles';

function Toggle({ theme, toggleTheme }) {
  const [buttonEffect, setButtonEffect] = useState(theme);

  return (
    <Container>
      <WrapperToggleButton
        move={buttonEffect}
        onClick={toggleTheme}
        rotate={buttonEffect}
      >
        <ButtonTheme
          rotate={buttonEffect}
          onClick={() => setButtonEffect((prev) => !prev)}
        >
          <div>
            <div>
              <div>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
        </ButtonTheme>
      </WrapperToggleButton>
    </Container>
  );
}

export default Toggle;
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
