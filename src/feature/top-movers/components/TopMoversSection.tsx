import React from "react";
import { FlatList, View } from "react-native";
import { TokenCard } from "./TokenCard";
import { useMachine } from "@xstate/react";
import { topMoversMachine } from "../machine";

export const TopMoversSection = () => {
  const [{ context }] = useMachine(topMoversMachine);
  return (
    <FlatList
      data={context.topMovers}
      style={{
        marginTop: 16,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      renderItem={({ item }) => <TokenCard {...item} />}
      keyExtractor={(_, i) => i.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View
          style={{
            padding: 8,
          }}
        />
      )}
      horizontal
    />
  );
};
