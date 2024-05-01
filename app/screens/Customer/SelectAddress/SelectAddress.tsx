import React from "react";
import AddressSearchBar from "@/app/components/addressSearchBar/AddressSearchBar";
import { View } from "react-native";
import { useAddress } from "@/app/context/AddressContext";
import Map from "@/app/components/map/Map";
import BackButton from "@/app/components/backButton/BackButton";
import NearbyShops from "@/app/components/nearbyShops/NearbyShops";

const Products = ({ navigation }: any) => {
  console.log("Selected Address: " + useAddress().address);

  return (
    <View className="bg-white h-full">
      <View className="px-5 z-10 pt-14">
        <BackButton navigation={navigation} />
        <View className="mt-4 z-10 flex-1">
          <AddressSearchBar />
        </View>
      </View>
      <View className="h-full top-0 w-full absolute">
        <Map />
      </View>
    </View>
  );
};

export default Products;
