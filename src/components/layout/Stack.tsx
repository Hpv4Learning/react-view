import { StyleSheet, View, ViewProps } from "react-native";

export const HStack: React.FC<ViewProps> = ({ style, children, ...rest }) => (
  <View {...rest} style={[customStyle.row, style]}>
    {children}
  </View>
);

export const VStack: React.FC<ViewProps> = ({ style, children, ...rest }) => (
  <View {...rest} style={[customStyle.column, style]}>
    {children}
  </View>
);

const customStyle = StyleSheet.create({
  row: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `flex-start`,
  },
  column: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    justifyContent: `center`,
  },
});
