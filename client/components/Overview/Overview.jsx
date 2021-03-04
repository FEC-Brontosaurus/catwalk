import React, { useState } from 'react';
import ProductInformation from './components/ProductInformation';
import Styles from './components/Styles';
import Sizes from './components/Sizes';
import Quantity from './components/Quantity';

const Overview = ({ currentProduct }) => {
  //  Current selection of items to be used in specific
  //  components that rely on others existing e.g. size depends on current style
  const [currentStyle, setCurrentStyle] = useState();
  const [currentSize, setCurrentSize] = useState();
  const [currentQuantity, setCurrentQuantity] = useState(null);

  //  render each component and certain components will not render
  //  unless the data required is present (used to save some time);
  return (
    <div id="Overview">
      {(currentProduct && currentStyle) ? (
        <ProductInformation
          currentProduct={currentProduct}
          currentStyle={currentStyle}
        />
      )
        : null}
      <Styles
        id={currentProduct.id}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
      />
      {currentStyle
        ? (
          <Sizes
            currentStyle={currentStyle}
            setCurrentSize={setCurrentSize}
            setCurrentQuantity={setCurrentQuantity}
          />
        ) : null }
      {currentStyle ? (
        <Quantity
          currentStyle={currentStyle}
          currentSize={currentSize}
          setCurrentQuantity={setCurrentQuantity}
          currentQuantity={currentQuantity}
        />
      )
        : null }
    </div>
  );
};

export default Overview;
