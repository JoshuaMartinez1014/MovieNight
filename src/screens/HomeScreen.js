import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MovieItemComponent from "../components/MovieItemComponent";
import globalStyles from "../styles/globalStyles";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  const movies = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      releaseDate: "2010",
      streaming: "Netflix",
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      releaseDate: "2014",
      streaming: "amazonPrime",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ position: "absolute", top: 50, right: 30, zIndex: 10 }}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu" size={30} />
      </TouchableOpacity>

      <LinearGradient
        colors={["#009fff", "#5f0979", "#030128"]}
        style={backgroundFront}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={movieNight}>Movie Night</Text>
        <ScrollView
          style={scrollContainer}
          contentContainerStyle={{ alignItems: "center", paddingTop: 100 }}
        >
          {movies.map((movie, index) => (
            <MovieItemComponent key={index} movie={movie} />
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const localStyles = StyleSheet.create({
  backgroundFront: {
    height: "110%",
    backgroundColor: "#6EE6FF",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    zIndex: 1,
  },
  scrollContainer: {
    flex: 1,
    zIndex: 2,
    marginTop: 100,
  },
  movieNight: {
    position: "absolute",
    top: 100,
    left: "10%", // Adjust as per your requirement for center alignment
    width: 328,
    height: 100,
    /*     fontFamily: "Gadugi", */
    fontSize: 52,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 2.13,
    color: "pink",
    zIndex: 1,
  },
});

const { backgroundFront, scrollContainer, movieNight } = localStyles;

export default HomeScreen;
