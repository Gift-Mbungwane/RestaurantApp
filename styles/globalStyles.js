import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    height: 200,
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
  flatlistContainer: {
    width: 316,
    height: 120,
    flexDirection: "row",
    //flex: 1,
    backgroundColor: "rgba(245, 245, 245, 9)",
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
    elevation: 40,
  },
  flatInside: {
    flexDirection: "row",
  },
  Tab: {
    flexDirection: "row",
    height: 70,
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
    marginVertical: -50,
    position: "absolute",
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
    elevation: 20,
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
    marginVertical: -70,
    position: "absolute",
  },
});
