import React from "react"

import { View, Text } from "react-native"

import PropTypes from "prop-types"

const SalesData = ({employee, amount}) => {

    return (
        <View>
            <Text>Employee Name: {employee}- Sales amount ${amount}</Text>
        </View>
    )
}

SalesData.propTypes = {

    employee: PropTypes.string.isRequired,

    amount: PropTypes.number.isRequired,
}

export default SalesData
