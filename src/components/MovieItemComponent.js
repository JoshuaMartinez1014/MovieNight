import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovieItemComponent = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      {/* You can add other movie details here, for example: */}
      <Text style={styles.info}>Director: {movie.director}</Text>
      <Text style={styles.info}>Release Date: {movie.releaseDate}</Text>
      {/* ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default MovieItemComponent;
