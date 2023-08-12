import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuScreen;
