import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'stretch',
        justifyContent: 'center',
        marginVertical:30,
      },
    header: {
        fontSize:16,
        fontWeight: '700',
        textAlign: 'center',
    },
    box: {
        marginVertical:20,
    },
    restImage: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
    },
    restNameCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    restName: {
        fontSize:22,
        marginTop:14,
        marginHorizontal:10,
    },
    restAddress: {
        marginTop:12,
        marginHorizontal:10,
    }
})