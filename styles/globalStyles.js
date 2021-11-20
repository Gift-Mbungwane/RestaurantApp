import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
    borderRadius: 20,
    height: 200,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(89, 89, 89, 1)",
    padding: 18,
    marginTop: 20,
    marginRight: 25,
  },
  headerTextRview: {
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    color: "rgba(89, 89, 89, 1)",
    marginTop: 20,
    marginRight: 25,
  },
  headTextModal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(89, 89, 89, 1)",
    padding: 18,
    marginVertical: -15,
    alignSelf: "center",
  },
  search: {
    borderRadius: 40,
    width: 316,
    height: 50,
    alignContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  mostpopular: {
    padding: 24,
    borderRadius: 20,
    width: 150,
    height: 170,
    elevation: 5,
    margin: 10,
  },
  image: {
    width: 119,
    height: 120,
    borderRadius: 20,
    alignItems: "flex-start",
  },
  menuImage: {
    width: 160,
    height: 180,
    borderRadius: 20,
  },
  flatlistContainer: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    //flex: 1,
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 20,
    elevation: 40,
    margin: 15,
    right: 15,
    shadowRadius: 15,
  },
  viewDetailsSlideContainer: {
    width: 316,
    height: 200,
    flexDirection: "row",
    //flex: 1,
    borderRadius: 20,
    elevation: 40,
    margin: 15,
    right: 15,
    shadowRadius: 15,
  },
  viewDSImage: {
    width: 316,
    height: 200,
    borderRadius: 20,
    elevation: 5,
  },
  flatInside: {
    flexDirection: "row",
  },
  Tab: {
    flexDirection: "row",
    height: "10%",
    width: 380,
    backgroundColor: "#32AFB7",
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
  },
  iconTab: {
    alignItems: "center",
    alignSelf: "center",
    left: 10,
    flexDirection: "row",
  },
  confirmButton: {
    backgroundColor: "#32AFB7",
    height: 60,
    width: 316,
    borderRadius: 40,
    alignSelf: "center",
    bottom: 0,
    marginVertical: 10,
  },
  imagesList: {
    width: 150,
    height: 170,
    borderRadius: 20,
    margin: 10,
  },
  reviewBooked: {
    backgroundColor: "#32AFB7",
    height: 60,
    width: 150,
    borderRadius: 40,
    alignSelf: "center",
    elevation: 5,
    marginVertical: 480,
    position: "absolute",
  },
  confirmBook: {
    backgroundColor: "#FFFFFF",
    height: 60,
    width: 150,
    borderRadius: 40,
    alignSelf: "center",
    bottom: 0,
    elevation: 20,
    marginVertical: 40,
    position: "absolute",
  },
  signInButton: {
    backgroundColor: "#32AFB7",
    height: 61,
    width: 256,
    marginVertical: 20,
    alignSelf: "center",
    borderRadius: 40,
  },
  loginIcon: {
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    marginHorizontal: "5%",
    height: 50,
    width: 50,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  changeStatusText: {
    backgroundColor: "white",
    marginVertical: 15,
    position: "relative",
    marginVertical: 10,
    height: 40,
    width: 100,
    alignSelf: "center",
    borderRadius: 20,
  },
});
