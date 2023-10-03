import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { GlobalStyles } from '../../constants/style'

export const Chip:React.FC<ViewProps> = ({children}) => (
    <View style={style.container}>
        {children}
    </View>
  )


const style = StyleSheet.create({
    container: {
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `flex-start`,
        height: 14,
        paddingHorizontal: 4,
        borderRadius: 100,
        ...GlobalStyles.darkBg
    },
})