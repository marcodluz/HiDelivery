import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FlatList,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

type MarkerPosition = {
  latitude: number;
  longitude: number;
};

const AddressSearchBar = () => {
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [useCurrentLocation, setUseCurrentLocation] = useState<boolean>(false);
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition | null>(
    null
  );
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setLocation(location);
      setUseCurrentLocation(true);
    })();
  }, []);

  const apiKey = Constants.expoConfig?.extra?.googleApiKey;

  const fetchPlaces = async () => {
    let apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}&language=en`;

    // If the useCurrentLocation flag is true and location data is available, include the location in the request
    if (useCurrentLocation && location) {
      const { latitude, longitude } = location.coords;
      apiUrl += `&location=${latitude},${longitude}&radius=100`; // radius is in meters
    }

    try {
      const response = await axios.get(apiUrl);
      setPredictions(response.data.predictions);
      setIsListVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectAddress = async (placeId: string) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      const { lat, lng } = response.data.result.geometry.location;
      // Update your map region and marker position here
      setMarkerPosition({ latitude: lat, longitude: lng });
      setIsListVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="h-full mt-14">
      <TextInput
        className="text-base bg-white h-14 rounded-2xl border-gray-200 border-2 text-center"
        placeholder="Search for your address"
        onChangeText={(text) => {
          setQuery(text);
          fetchPlaces();
        }}
        value={query}
      />
      {isListVisible && (
        <FlatList
          className="mt-14 absolute z-10 bg-white self-center w-full p-1"
          data={predictions}
          keyExtractor={(item: any) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="my-4"
              onPress={() => handleSelectAddress(item.place_id)}
            >
              <Text className="text-base">{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <View className="h-full mt-5">
        <MapView
          provider={PROVIDER_GOOGLE}
          className="flex-1 rounded-full"
          initialRegion={{
            latitude: location ? location.coords.latitude : 0,
            longitude: location ? location.coords.longitude : 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
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
      </View>
    </View>
  );
};

export default AddressSearchBar;
