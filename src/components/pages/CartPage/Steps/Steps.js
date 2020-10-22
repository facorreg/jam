import React from 'react';
import PropTypes from 'prop-types';
import StepsStyle from './style';

const Steps = ({ currentStep }) => {
  const steps = ['cart summary', 'address', 'payment'];
  const className = (step) => (
    step === currentStep
      ? 'step currStep'
      : 'step'
  );

  const arrows = (i) => (
    i < steps.length - 1
      ? (
        <>
          <div className="stepArrow" />
          <div className="stepArrowBorder" />
        </>
      )
      : null
  );

  return (
    <StepsStyle>
      <div className="cartStepsContainer">
        <div className="cartSteps">
          {
            steps.map((step, i) => (
              <div className={className(step)}>
                {arrows(i)}
                {step}
              </div>
            ))
          }
        </div>
      </div>
    </StepsStyle>
  );
};

Steps.propTypes = {
  currentStep: PropTypes.string.isRequired,
};

export default Steps;
