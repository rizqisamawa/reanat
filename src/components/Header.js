import { StatusBar, Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#07191D",
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 10,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#07191D" />
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#FFFF" }}>
        Discover
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFF" }}>
        New Ideas
      </Text>
    </View>
  );
};

export default Header;
