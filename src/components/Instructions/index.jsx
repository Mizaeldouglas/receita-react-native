import { View, Text, StyleSheet } from "react-native";

export function Instructions({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{index + 1}- </Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "row",
    padding: 20,
    marginBottom: 8,
  },
  number: {
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    lineHeight: 15,
  },
});
