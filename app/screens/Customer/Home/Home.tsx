import React from "react";
import { View, FlatList, TextInput } from "react-native";
import { useItems } from "@/app/services/useItems";
import Item from "@/app/components/item/Item";
import { defaultScreen } from "@/app/styles/Global";
import Button from "@/app/components/ui/inputs/button/Button";

const Home = () => {
  const itemsList = useItems();

  return (
    <View className={`${defaultScreen}`}>
      <View className="h-full justify-between">
        <TextInput
          className="text-base bg-white h-14 rounded-2xl border-gray-200 border text-center mb-5"
          placeholder="Search for anything"
        />
        <FlatList
          data={itemsList}
          numColumns={3}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
      <View className="absolute w-full bottom-4 ml-5">
        <Button>View basket</Button>
      </View>
    </View>
  );
};

export default Home;
