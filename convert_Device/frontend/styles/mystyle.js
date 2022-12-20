import React from "react";
import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    contenair: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      width: 100,
      height: 100,
      padding: 10,
    },
    input: {
      margin: 15,
      borderWidth: 1,
      paddingLeft: 15,
      height: 40,
    },
    textInfo: {
      fontSize: 25,
      alignContent: 'center',
      fontWeight: 'bold',
      marginLeft: 33,
      marginTop: 50,
    },
    textRes: {
      color: 'green',
      alignContent: 'center',
      fontSize: 15,
      marginLeft: 50,
      marginTop: 20,
    },
    button: {
      height: 45,
      width: 100,
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f00',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      borderRadius: 20,
    },
    textButton: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 'auto',
      textAlign: 'center',
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
  })

  export default styles