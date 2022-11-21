import { View } from "react-native";
import Header from "./src/components/Header";
import { TouchableOpacity, Text } from "react-native";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{ marginTop: 200, textAlign: "center", fontSize: 80 }}>
        {count}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          marginTop: 20,
          marginHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 3,
          elevation: 2,
        }}
        onPress={() => setCount(count + 1)}
      >
        <Text style={{ color: "white", fontSize: 40 }}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          marginTop: 20,
          marginHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 3,
          elevation: 2,
        }}
        onPress={() => setCount(count - 1)}
      >
        <Text style={{ color: "white", fontSize: 40 }}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
