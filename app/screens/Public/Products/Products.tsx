import React from "react";
import styles from "./Styles";
import AddressSearchBar from "../../../components/AddressSearchBar/AddressSearchBar";
import { View } from "react-native";

const Products = () => {
  return (
    <View style={styles.container}>
      <AddressSearchBar />
    </View>
  );
};

export default Products;
