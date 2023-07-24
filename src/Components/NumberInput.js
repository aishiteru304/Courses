import React from 'react';
import NumberFormat from 'react-number-format';

const NumberInput = ({ onChange: handleInputChange, className, defaultValue, value }) => {
    return (
        <div>
            <NumberFormat
                id="numberInput"
                thousandSeparator="."
                decimalSeparator=","
                allowNegative={false}
                onValueChange={handleInputChange}
                isNumericString={true}
                className={className}
                defaultValue={defaultValue}
                suffix=" VNĐ"
                value={value}
            />
        </div>
    );
};

export default NumberInput;
