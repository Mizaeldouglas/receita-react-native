import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Entypo } from "@expo/vector-icons";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("Clicou")}>
          <Entypo name="heart" size={28} color="red" />
        </Pressable>
      ),
      headerBackTitleVisible: true,
    });
  }, [navigation, route.params?.data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.title}>{route.params?.data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#312e38",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});
