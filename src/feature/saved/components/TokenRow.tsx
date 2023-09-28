import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/style";
import Icon from "@expo/vector-icons/Ionicons";
import { HStack, VStack } from "../../../components/layout/Stack";
import { CryptoCurrencyDetail } from "../machine/types";
import { createPercentageColor } from "../../../utils/tokenUtils";

type Props = CryptoCurrencyDetail;

export const TokenRow: React.FC<Props> = ({
  name,
  image,
  current_price,
  price_change_percentage_24h,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  return (
    <Pressable>
      <View style={style.box}>
        <HStack
          style={[
            style.stack,
            {
              justifyContent: `space-between`,
              columnGap: 8,
            },
          ]}
        >
          <HStack style={[style.stack, { columnGap: 14 }]}>
            <View
              onStartShouldSetResponder={() => true}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <Pressable onPress={() => setIsFavorite(!isFavorite)}>
                <Icon
                  name={isFavorite ? `star` : `star-outline`}
                  size={14}
                  color={isFavorite ? `yellow` : `white`}
                />
              </Pressable>
            </View>
            <HStack
              style={[
                style.stack,
                {
                  columnGap: 8,
                },
              ]}
            >
              <View style={style.imageBox}>
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: `500`,
                  ...GlobalStyles.grey500Text,
                }}
              >
                {name}
              </Text>
            </HStack>
          </HStack>
          <VStack style={{
            rowGap: 4,
            justifyContent: `space-between`,
            alignItems: `flex-end`,
        
          }}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: `500`,
                color: createPercentageColor(price_change_percentage_24h),
              }}
            >
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: `500`,
                alignSelf: `flex-end`,

                ...GlobalStyles.grey500Text,
              }}
            >
              {current_price}€
            </Text>
          </VStack>
        </HStack>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  box: {
    ...GlobalStyles.extraDarkBox,
    ...GlobalStyles.radiusMd,
    padding: 12,
    height: 60,
    flex: 1,
  },
  stack: {
    flex: 1,
  },
  imageBox: {
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: `hidden`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
});
