import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Search from "../pages/Search";
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Detalhes da receita",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: "Veja oque encontramos" }}
      />
    </Stack.Navigator>
  );
}
