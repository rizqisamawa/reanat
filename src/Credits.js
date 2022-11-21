import { View, Text, Button, Alert } from "react-native";

const Credits = () => {
  const credit = () => {
    Alert.alert("Credits", "Created by Rizqi Samawa.", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={{ minHeight: 10, display: "flex", justifyContent: "center" }}>
      <Button title="Credits" onPress={() => credit()} />
    </View>
  );
};

export default Credits;
