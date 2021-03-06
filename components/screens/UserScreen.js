import React, { Component, useState, useEffect } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { Input } from "react-native-elements";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";
import HomeScreen from "../screens/HomeScreen";
import globalUserModel from "../Model";
import * as ImagePicker from "expo-image-picker";
import {
  auth,
  db,
  imagesRef,
  storage,
  storageRef,
  fb,
} from "../../database/firebase";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../../assets/Restaurant/register.jpg");

export default function UserScreen({ route, navigation }) {
  const [isVisible, setVisible] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState("");
  // const [upload, setUpload] = useState(false);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    fetchData();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri);

    if (!result.cancelled) {
      setSubmit(true);
      setImage(result.uri);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError("Network request failed!"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", result.uri, true);
        xhr.send(null);
      });

      const ref = storageRef.child(new Date().toISOString());
      const snapshot = (await ref.put(blob)).ref
        .getDownloadURL()
        .then((imageUrl) => {
          setPhoto(imageUrl);
          console.log(
            imageUrl,
            "this is setting the image too storage before 3"
          );

          blob.close();
          setSubmit(false);
        });

      // snapshot.snapshot.ref.getDownloadURL().then((imageUrl) => {
      //   console.log(imageUrl, "this is setting the image too storage before 2");
      //   setPhoto(imageUrl);
      // });
    }
  };

  const upDate = () => {
    const uid = auth?.currentUser?.uid;
    setSubmit(true);
    return db
      .collection("users")
      .doc(uid)
      .update({
        photoURL: photo,
        userName: globalUserModel.userName,
      })
      .then(() => {
        setSubmit(false);
        alert("your profile has been updated");
        setVisible(false);
      })
      .catch((error) => {
        setSubmit(false);
        alert("could not update this information");
      });
  };

  const fetchData = () => {
    const uid = auth?.currentUser?.uid;
    return db
      .collection("users")
      .where("uid", "==", uid)
      .onSnapshot((snapShot) => {
        const query = snapShot.docs.map((documentSnap) => documentSnap.data());
        //console.log(resto);
        setUser(query);
      });
  };

  const Signout = () => {
    setUploading(true);
    auth
      .signOut()
      .then(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            navigation.navigate("LoginScreen");
            setUploading(false);
            // alert("account is still signed in");

            // ...
          } else {
            alert("you're now logged out");
            navigation.navigate("LoginScreen");
            setUploading(false);
            // User is signed out
            // used this if else method on signing out funtionality
          }
        });
      })
      .catch((error) => {
        // An error happened.
        const errorMessage = error.message;
        console.log(errorMessage);
        setUploading(false);
        alert("unable to signout");
      });
  };

  return (
    <View style={globalStyles.container}>
      <View>
        {/**modal */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
              alert("Modal has now been closed.");
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00BCD4",
                height: "50%",
                width: "80%",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#fff",
                marginTop: 80,
                marginLeft: 40,
              }}
            >
              <View style={{ alignSelf: "flex-start", marginVertical: 40 }}>
                <TouchableOpacity
                  onPress={() => {
                    try {
                      setVisible(false);
                    } catch (error) {
                      const errorMessage = error.message;
                      alert(errorMessage);
                    }
                  }}
                >
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="white"
                    style={{ right: -10, bottom: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignSelf: "center",
                  flexDirection: "row",
                  bottom: 60,
                }}
              >
                <Image
                  source={{ uri: photo }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 60,
                    backgroundColor: "white",
                  }}
                />
                <TouchableOpacity onPress={pickImage}>
                  <FontAwesome
                    name="user-circle-o"
                    size={24}
                    color="grey"
                    style={{ marginHorizontal: -20, marginTop: 105 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: 250, bottom: 30 }}>
                <Input
                  placeholder="Name"
                  onChangeText={(userName) => globalUserModel.setName(userName)}
                  style={{ color: "#FFFFFF" }}
                />
                <TouchableOpacity
                  style={globalStyles.changeStatusText}
                  onPress={upDate}
                >
                  {!submit ? (
                    <Text
                      style={{
                        alignSelf: "center",
                        marginVertical: 10,
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Submit
                    </Text>
                  ) : (
                    <ActivityIndicator
                      style={{ alignSelf: "center" }}
                      color="black"
                      size="large"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      {/**end of the modal */}
      <View style={globalStyles.container}>
        <View style={{ flexDirection: "row", right: 25, marginVertical: -15 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            <Ionicons name="ios-chevron-back" size={34} color="#32AFB7" />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={user}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => {
            return (
              <SafeAreaView>
                <View>
                  <Image
                    source={{ uri: item.photoURL }}
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 120,
                      marginVertical: 10,
                      backgroundColor: "white",
                      alignSelf: "center",
                    }}
                  >
                    {globalUserModel.setPhoto(item.photoURL)}
                  </Image>
                  <TouchableOpacity onPress={() => setVisible(true)}>
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      size={38}
                      color="#32AFB7"
                      style={{
                        alignSelf: "center",
                        left: 50,
                        bottom: 50,
                      }}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{ alignSelf: "center", fontSize: 18, bottom: 35 }}
                  >
                    {item.userName}
                    {globalUserModel.setName(item.userName)}
                  </Text>
                  <Text
                    style={{ fontSize: 15, bottom: 30, alignSelf: "center" }}
                  >
                    {item.email}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    right: 15,
                    marginVertical: 35,
                    marginHorizontal: 20,
                  }}
                >
                  <Feather name="calendar" size={24} color="black" />
                  <Text style={{ fontSize: 20, left: 10 }}>My Bookings</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("BookingHistory");
                    }}
                    style={{ alignSelf: "flex-end" }}
                  >
                    <Ionicons
                      name="ios-chevron-back"
                      size={38}
                      color="#32AFB7"
                      style={{
                        transform: [{ rotateY: "180deg" }],
                        bottom: 4,
                        marginHorizontal: 105,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    backgroundColor: "#32AFB7",
                    height: 50,
                    width: 100,
                    borderRadius: 40,
                    marginVertical: 110,
                  }}
                  onPress={Signout}
                >
                  {!uploading ? (
                    <AntDesign
                      name="logout"
                      size={30}
                      color="white"
                      style={{ alignSelf: "center", marginVertical: 10 }}
                    />
                  ) : (
                    <ActivityIndicator
                      size="large"
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  )}
                </TouchableOpacity>
              </SafeAreaView>
            );
          }}
        />
      </View>
      {/**end of the body */}
      <View style={globalStyles.Tab}>
        <View style={globalStyles.iconTab}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <FontAwesome
              name="home"
              color="black"
              size={34}
              style={{ margin: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BookingHistory")}
          >
            <MaterialIcons
              name="date-range"
              color="black"
              size={34}
              style={{ marginHorizontal: 90 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("UserScreen")}>
            <AntDesign
              name="user"
              color="black"
              size={34}
              style={{ marginHorizontal: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
