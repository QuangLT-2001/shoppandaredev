import React from "react";
import { FilerByPriceItems } from "./style";
import Input from '../../../../Component/input';
import PropTypes from "prop-types";
import RadioButton from "../../../../Component/Radio";
const FilerByPriceItem = ({
  filterByPriceItem,
  onChange,
  checked
}) => {
  const { value, label, id } = filterByPriceItem;
  return (
    <RadioButton
      value={id}
      onChange={onChange}
      label={label}

    />
  );
}

FilerByPriceItem.propTypes = {
  filterByPriceItem: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default FilerByPriceItem;