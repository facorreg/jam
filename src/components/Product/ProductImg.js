import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const ProductImg = ({
  src, setLoadingStatus, pUrl,
}) => {
  const onload = () => setLoadingStatus(true);
  const router = useRouter();

  const handleClick = () => { router.push(pUrl); };

  return (
    // eslint-disable-next-line
    <div role="button" className="imgContainer" onClick={handleClick}>
      <img src={src} onLoad={onload} alt="productImg" />
    </div>
  );
};

ProductImg.propTypes = {
  src: PropTypes.string.isRequired,
  setLoadingStatus: PropTypes.func.isRequired,
  pUrl: PropTypes.string.isRequired,
};

export default ProductImg;
