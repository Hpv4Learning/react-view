import { FlatList, View, ViewProps } from "react-native";
import { PokeRow } from "./PokeRow";

const data = new Array(4).fill(0).map((_) => ({ name: ``, image: `` }));

export const RowSection: React.FC<ViewProps> = ({ style }) => (
  <View style={style}>
    <FlatList
      scrollEnabled={false}
      data={data}
      renderItem={() => <PokeRow />}
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
