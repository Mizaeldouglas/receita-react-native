import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FoodList } from "../../components/FoodList";

export default function Search() {
  const route = useRoute();
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`);
      setReceipes(response.data);
    }
    fetchReceipes();
  }, [route.params?.name]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.text}>Não encontramos oque está buscando...</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 14,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#000",
  },
  text: {
    paddingTop: " 50%",
    fontSize: 20,
    color: "red",
  },
});
