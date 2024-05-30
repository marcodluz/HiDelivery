import React, { useEffect, useState } from "react";
import axios from "axios";
import Constants from "expo-constants";
import { useAddress } from "@/app/context/AddressContext";
import { FlatList, View, Text } from "react-native";

const NearbyShops = () => {
  const { markerPosition } = useAddress();
  const [supermarkets, setSupermarkets] = useState([]);

  const fetchNearbySupermarkets = async (latitude: any, longitude: any) => {
    const apiKey = Constants.expoConfig?.extra?.googleApiKey;
    const radius = 5000; // Define the radius within which to search for supermarkets (in meters)
    const type = "supermarket"; // Specify the type of place you are looking for

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const markets = response.data.results.map((market: any) => ({
        id: market.place_id, // Use place_id as a unique key for each item
        name: market.name,
        open: market.opening_hours?.open_now ? "Open" : "Closed", // Check if the opening_hours object exists and if open_now is true
      }));
      setSupermarkets(markets);
    } catch (error) {
      console.error("Error fetching nearby supermarkets:", error);
    }
  };

  useEffect(() => {
    if (markerPosition) {
      fetchNearbySupermarkets(
        markerPosition.latitude,
        markerPosition.longitude
      );
    }
  }, [markerPosition]);
  return (
    <View>
      <FlatList
        className="mt-5 absolute -z-10 bg-white self-center w-full p-4 pt-10 rounded-2xl"
        data={supermarkets}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text
              className={`${
                item.open === "Open" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.open}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default NearbyShops;
