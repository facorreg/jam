import React from 'react';
import PropTypes from 'prop-types';

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
  );
};

Steps.propTypes = {
  currentStep: PropTypes.string.isRequired,
};

export default Steps;
