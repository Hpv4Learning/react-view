import { FlatList, View, ViewProps } from "react-native";
import {  TokenRow } from "./TokenRow";
import { useMachine } from "@xstate/react";
import { savedTokenMachine } from "../machine";

export const TokenList: React.FC<ViewProps> = ({ style }) => {
  const [state] = useMachine(savedTokenMachine);
  return (
    <View style={style}>
      <FlatList
        scrollEnabled={false}
        data={state.context.tokens}
        renderItem={({item}) => <TokenRow {...item}/>}
        keyExtractor={(_, i) => i.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              padding: 4,
            }}
          />
        )}
      />
    </View>
  );
};
