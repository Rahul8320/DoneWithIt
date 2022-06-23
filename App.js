import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello React Native expo app</Text>
      <TouchableOpacity onPress={() => console.log("Image Press!")}>
        <Image
          fadeDuration={500}
          source={{ width: 200, height: 200, uri: "https://picsum.photos/300" }}
        />
      </TouchableOpacity>
      <Button
        color={"orange"}
        title="Click Me!"
        onPress={() => alert("Button Press!")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
