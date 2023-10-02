import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/style";
import { NewsResponse } from "../types";

type Props = NewsResponse["articles"][0]

export const Article = ({title, urlToImage}:Props) => (
    <View style={styles.container}>
      <View style={styles.imageHedaer}>
        <Image
          source={{ uri: urlToImage}}
          style={{ width: `100%`, height: `100%` }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={{
            fontWeight: `500`,
            fontSize: 14,
            color: `white`,
        }}>
            {title}
        </Text>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 140,
    maxHeight: 200,
    height: `auto`,
    ...GlobalStyles.extraDarkBox,
    ...GlobalStyles.radiusMd,
  },
  imageHedaer: {
    width: `100%`,
    height: `50%`,
    ...GlobalStyles.radiusMd,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    overflow: `hidden`,
  },
  cardContent: {
    padding: 10,
    height: `50%`
  },
});
