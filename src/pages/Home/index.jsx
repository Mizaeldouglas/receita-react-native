import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FoodList } from "../../components/FoodList";
import { Logo } from "../../components/Logo";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

import { Text as MotiText } from "moti";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [foods, setFoods] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function fecthApi() {
      const response = await api.get("/foods");
      setFoods(response.data);
    }
    fecthApi();
  }, []);

  function handleSearch() {
    if (!inputValue) {
      return;
    }
    let input = inputValue;
    setInputValue("");
    navigation.navigate("Search", { name: input });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <MotiText
        from={{
          opacity: 0,
          translateY: 15,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          delay: 100,
          type: "timing",
          duration: 650,
        }}
        style={styles.title}
      >
        Encontre a receita
      </MotiText>
      <MotiText
        from={{
          opacity: 0,
          translateY: 18,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          delay: 200,
          type: "timing",
          duration: 850,
        }}
        style={styles.title}
      >
        que combina com você
      </MotiText>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da comida..."
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color={"#4cbe6c"} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ececec",
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "90%",
    maxWidth: "90%",
    height: 45,
  },
});
