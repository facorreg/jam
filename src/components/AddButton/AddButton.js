/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import StyledAddButton from './styles';

const AddButton = ({
  productId, displayAsText, cName, quantity, updateItemQuantity,
}) => {
  const updateHandler = async (q) => {
    await updateItemQuantity(q, productId);
  };

  const add = () => updateHandler(quantity + 1);
  const sub = () => updateHandler(quantity - 1);

  const AddButtonContainer = ({ children }) => (
    <div className={cName}>
      <StyledAddButton>
        {children}
      </StyledAddButton>
    </div>
  );

  AddButtonContainer.propTypes = { children: PropTypes.element.isRequired };

  if (!quantity) {
    return (
      <AddButtonContainer>
        {
          !displayAsText
            ? (
              <div
                role="button"
                className="cartButton"
                onClick={add}
              >
                <img src="/cartBlack.png" alt="cart" />
              </div>
            )
            : (
              <button
                type="button"
                className="textCartButton"
                onClick={add}
              >
                Ajouter au panier
              </button>
            )
        }
      </AddButtonContainer>
    );
  }
  return (
    <AddButtonContainer>
      <div className="addCartButton">
        <button type="button" onClick={sub} disabled={quantity === 0}>-</button>
        <div>{quantity}</div>
        <button type="button" onClick={add}>+</button>
      </div>
    </AddButtonContainer>
  );
};

AddButton.defaultProps = {
  displayAsText: false,
  cName: '',
};

AddButton.propTypes = {
  productId: PropTypes.string.isRequired,
  displayAsText: PropTypes.bool,
  cName: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  updateItemQuantity: PropTypes.func.isRequired,
};

export default AddButton;
