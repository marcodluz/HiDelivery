import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { useItems } from "@/app/services/useItems";
import Item from "@/app/components/Item/Item";
import { useAuth } from "@/app/context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { defaultScreen } from "@/app/styles/Global";

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

  return (
    <View className={`${defaultScreen}`}>
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
      <TextInput
        className="text-base bg-white h-14 rounded-2xl border-gray-200 border text-center mb-5"
        placeholder="Search for anything"
      />
      <View className="h-full">
        <FlatList
          data={itemsList}
          numColumns={2}
          renderItem={({ item }) => <Item item={item} />}
          columnWrapperStyle={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        />
      </View>
    </View>
  );
};

export default Home;
