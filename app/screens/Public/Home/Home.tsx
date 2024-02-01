import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./Styles";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../assets/welcome-image.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>Welcome to {"\n"}HiDelivery</Text>
        <Text style={styles.descriptionText}>
          Our task is to deliver to you as quickly as possible at any time of
          the day
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
