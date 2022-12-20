import React from "react";
import styles from './styles/mystyle';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CheckBox, Icon } from "react-native-elements";


const myAppMobile =  ()=>{
  const [text,  setText] = React.useState(0)
  const [euro, setEuro] = React.useState(false)
  const [dollar, setDollar] = React.useState(false)

  


  const isCheckedEuro = ()=>{
    setEuro(true)
    setDollar(false)
    console.log('Euro is checked')
  }
  const isCheckedDollar = ()=>{
    setEuro(false)
    setDollar(true)
    console.log('Dollar is checked')
  }
  const convert = ()=>{
    if(euro){
      setText(text => parseInt(text)/1.01)
    }
    else if(dollar){
      setText(text => parseInt(text)*1.01)
    }
    else{
      setText('Choice before the type to convert')
    }
  }

  return(
    <View>
      <Text style = {styles.textInfo}>Application Mobile for convert $ to € / € to $</Text>
      <TextInput 
        style = {styles.input}
        placeholder = "Input the price in €"
        keyboardType = "numeric"
        value = {text}
        onChangeText={setText}
      />
      <View style = {styles.mychecks}>
        <CheckBox
          title='€ to $'
          checked = {dollar}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={isCheckedDollar}
        />
        <CheckBox
          title='$ to  €'
          checked = {euro}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={isCheckedEuro}
          style = {styles.checked}
        />
      </View>
      <TouchableOpacity
        onPress={convert}
        style = {styles.button}
        icon = {{name: 'convert'}}
      >
        <Text style = {styles.textButton}>convert</Text>
      </TouchableOpacity>
      <Text style = {styles.textRes}>{text}</Text>
    </View>
  );

}

export default myAppMobile;