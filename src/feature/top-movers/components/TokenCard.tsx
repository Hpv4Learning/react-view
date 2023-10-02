import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/style";
import { CryptoCurrencyDetail } from "../../saved/machine/types";
import { HStack } from "../../../components/layout/Stack";
import { createPercentageColor } from "../../../utils/tokenUtils";
import { Chip } from "../../../components/layout/Chip";


export const TokenCard: React.FC<CryptoCurrencyDetail> = ({
  symbol,
  image,
  current_price,
  price_change_percentage_24h,
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.imageBox}>
      <Image
        source={{ uri: image }}
        style={{
          width: `100%`,
          height: `100%`,
        }}
        />
        </View>
      <HStack
        style={{
          columnGap: 8,
          alignItems: `flex-end`,
        }}
      >
        <Text style={{
              fontSize: 12,
              color: GlobalStyles.whiteText.color,
              fontWeight: `bold`,
            }}>{symbol.toUpperCase()}</Text>
        <Chip>
          <Text
            style={{
              fontSize: 8,
              color: GlobalStyles.whiteText.color,
            }}
          >
            {current_price}€
          </Text>
        </Chip>
      </HStack>
      <Text
        style={{
          fontSize: 14,
          color: createPercentageColor(price_change_percentage_24h),
        }}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.darkBox,
    ...GlobalStyles.radiusSm,
    ...GlobalStyles.borderColor,
    padding: 16,
    height: 120,
    width: 120,
    display: `flex`,
    alignItems: `flex-start`,
    justifyContent: `center`,
  },
  header: {
    display: `flex`,
    rowGap: 8,
    justifyContent: `flex-start`,
  },
  imageBox: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: `hidden`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
});
