import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stackRoutes";
import { Favorites } from "../pages/Favorites";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="homeTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size} />;
            }
            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#000" size={size} />;
            }
            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
