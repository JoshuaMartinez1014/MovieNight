import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import MovieItemComponent from "../components/MovieItemComponent";

import globalStyles from "../styles/globalStyles";

const HomeScreen = ({ navigation }) => {
  const movies = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      releaseDate: "2010-07-16",
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      releaseDate: "2014-11-07",
    },
    // Add more movies here
  ];

  return (
    <View style={[globalStyles.container, backgroundMain]}>
      <View style={backgroundFront}></View>

      <ScrollView
        style={scrollContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text style={movieNight}>Movie Night</Text>
        {movies.map((movie, index) => (
          <MovieItemComponent key={index} movie={movie} />
        ))}
        <Button
          title="Go to Menu"
          onPress={() => navigation.navigate("Menu")}
        />
      </ScrollView>
    </View>
  );
};

const localStyles = StyleSheet.create({
  backgroundMain: {
    flex: 1,
    backgroundColor: "#332c2c",
  },
  backgroundFront: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "70%",
    backgroundColor: "#6EE6FF",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    zIndex: 1, // make sure this stays behind ScrollView content
  },
  scrollContainer: {
    flex: 1,
    zIndex: 2, // make sure content in ScrollView stays on top
  },
  movieNight: {
    width: 328,
    height: 100,
    fontFamily: "Gadugi",
    fontSize: 52,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 2.13,
    color: "#000000",
    marginTop: 100,
  },
});

const { backgroundMain, backgroundFront, scrollContainer, movieNight } =
  localStyles;

export default HomeScreen;
