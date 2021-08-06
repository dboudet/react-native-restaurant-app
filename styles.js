import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginBottom: 30,
  },
  touchableAddNew: {
    backgroundColor: "#FFFFFF",
    borderColor: "#AADD66",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
  },
  touchableAddNewText: {
    color: "#AADD66",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
    marginHorizontal: 4,
  },
  box: {
    marginVertical: 6,
  },
  touchableGreenButton: {
    backgroundColor: "#AADD66",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
    borderRadius: 5,
    width: 300,
    alignSelf: "center",
  },
  touchableGreenButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    margin: 20,
  },
  restImage: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  restNameCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restName: {
    fontSize: 22,
    marginTop: 14,
    marginHorizontal: 10,
  },
  restAddress: {
    marginTop: 12,
    marginHorizontal: 10,
  },
  addNewHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
  },
  addNewInput: {
      backgroundColor: '#FFFFFF',
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20,
  },
})
