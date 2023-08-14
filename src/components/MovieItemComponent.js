import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const MovieItemComponent = ({ movie, onDelete, onEdit }) => {
  const [isExtended, setIsExtended] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [localRating, setLocalRating] = useState(movie.rating);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? "star" : "star-outline"}
          size={24}
          color="#FFD700"
          onPress={() => isEditMode && updateRating(i)}
        />
      );
    }
    return stars;
  };

  const updateRating = (newRating) => {
    setLocalRating(newRating);
    if (onEdit) {
      alert("onEdit called!"); // Alert instead of console.log
      onEdit({ ...movie, rating: newRating });
    }
  };

  const [localTitle, setLocalTitle] = useState(movie.title);
  const [localDirector, setLocalDirector] = useState(movie.director);
  const [localReleaseDate, setLocalReleaseDate] = useState(movie.releaseDate);
  const [localStreaming, setLocalStreaming] = useState(movie.streaming);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsExtended(!isExtended)}
    >
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <TextInput
          style={styles.title}
          value={localTitle}
          onChangeText={setLocalTitle}
          editable={isEditMode}
        />
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          {renderStars(localRating)}
        </View>
        {isExtended && (
          <>
            <View
              style={[
                styles.info,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              <Text style={{ fontWeight: "bold" }}>Director: </Text>
              <TextInput
                value={localDirector}
                onChangeText={setLocalDirector}
                editable={isEditMode}
              />
            </View>

            <View
              style={[
                styles.info,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              <Text style={{ fontWeight: "bold" }}>Date: </Text>
              <TextInput
                value={localReleaseDate}
                onChangeText={setLocalReleaseDate}
                editable={isEditMode}
              />
            </View>
            <View
              style={[
                styles.info,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              <Text style={{ fontWeight: "bold" }}>Streaming: </Text>
              <TextInput
                value={localStreaming}
                onChangeText={setLocalStreaming}
                editable={isEditMode}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "lightgreen" }]}
                onPress={() => setIsEditMode(!isEditMode)}
              >
                <Text>{isEditMode ? "Save" : "Edit"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "pink" }]}
                onPress={() => {
                  alert("onDelete pressed!");
                  /* onDelete(); */
                }}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "flex-start",
  },
  info: {
    fontSize: 14,
    padding: 10,
    margin: 5,
    fontWeight: "bold",
    backgroundColor: "#EDE5D6",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  button: {
    marginLeft: 15,
    padding: 5,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
});

export default MovieItemComponent;
