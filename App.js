import { View } from "react-native";
import Header from "./src/components/Header";
import Credits from "./src/Credits";
// import Counter from "./src/Counter";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Credits />
      {/* <Counter /> */}
    </View>
  );
};

export default App;
