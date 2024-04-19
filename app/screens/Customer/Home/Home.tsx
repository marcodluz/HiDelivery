import React from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { useItems } from "@/app/services/useItems";
import Item from "@/app/components/Item/Item";
import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

// const order = {
//   distance: "18.3",
//   time: "02:05",
//   price: "25.89",
//   orderTime: Date.now(),
//   accepted: false,
//   items: [
//     {
//       title: "Original Cheeseburger",
//       image: require("@/assets/burger.jpg"),
//       quantity: 3,
//       minPrice: 5.99,
//       maxPrice: 7.99,
//     },
//   ],
// };

// const item = {
//   title: "Pineapple",
//   image:
//     "https://firebasestorage.googleapis.com/v0/b/hidelivery-prod.appspot.com/o/images%2Fitems%2Fpineapple.jpg?alt=media&token=bacdb8a9-b1a8-443b-8518-a127d2956856",
//   minPrice: 2.5,
//   maxPrice: 5.0,
// };

const Home = () => {
  const itemsList = useItems();
  const navigation = useNavigation();
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <View className="bg-white h-full">
      {/* <TouchableOpacity
        className="py-2 items-center"
        onPress={() => Database.createOrder(order)}
      >
        <Text className="text-black font-semibold text-lg">
          Create an Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="py-2 items-center"
        onPress={() => Database.getListOrders(1709745048421, 1709756842810)}
      >
        <Text className="text-black font-semibold text-lg">Get an Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="py-2 items-center"
        onPress={() => Database.createItem(item)}
      >
        <Text className="text-black font-semibold text-lg">Create an Item</Text>
      </TouchableOpacity> */}
      <View className="px-5">
        <FlatList
          data={itemsList}
          numColumns={3}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;
