import { View, Text, StyleSheet } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});
