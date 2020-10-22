import styled from 'styled-components';

const StepsStyle = styled.div`
  .cartStepsContainer, .cartSteps {
      display: flex;
      align-items: center;
      justify-content: center;
    }

  .cartStepsContainer {
    grid-area: cartStep;

    .cartSteps {
      width: 100%;

      .step {
        width: 25%;
        height: 60px;
        position: relative;
        background: rgb(51, 51, 51);
        color: white;
        text-align: center;
        line-height: 60px;
      }

      .stepArrow, .stepArrowBorder {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 30px 0 30px 18px;
        border-color: transparent transparent transparent #a9aba9;
        position: absolute;
        right: -18px;
      }

      .stepArrow {
        border-left-color: rgba(51, 51, 51);
        z-index: 2;
      }

      .stepArrowBorder {
        border-left-color: white;
        z-index: 1;
      }

      .currStep {
        background: rgb(95, 95, 95);
      }

      .currStep .stepArrow  {
        border-left-color: rgb(95, 95, 95);
      }
    }
  }
`;

export default StepsStyle;
