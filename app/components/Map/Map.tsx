import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useAddress } from "@/app/context/AddressContext";
import { FontAwesome5 } from "@expo/vector-icons";

const Map = () => {
  const { markerPosition } = useAddress();
  const DEFAULT_LATITUDE = 54.3141; // Central latitude for the UK
  const DEFAULT_LONGITUDE = -2.23; // Central longitude for the UK

  return (
    <View className="h-full">
      <MapView
        provider={PROVIDER_GOOGLE}
        className="h-2/3 rounded-full"
        initialRegion={{
          latitude: DEFAULT_LATITUDE,
          longitude: DEFAULT_LONGITUDE,
          latitudeDelta: 12, // Broad delta to encompass the whole UK
          longitudeDelta: 12, // Broad delta to encompass the whole UK
        }}
        region={
          markerPosition
            ? {
                latitude: markerPosition.latitude,
                longitude: markerPosition.longitude,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
              }
            : undefined
        }
      >
        {markerPosition && (
          <Marker coordinate={markerPosition} title={"Selected Location"} />
        )}
      </MapView>
      {useAddress().address && (
        <TouchableOpacity
          className={`h-14 mt-5 bg-rose-600 rounded-full items-center w-full overflow-hidden justify-center`}
        >
          <Text className="text-white font-semibold text-2xl">Confirm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Map;
