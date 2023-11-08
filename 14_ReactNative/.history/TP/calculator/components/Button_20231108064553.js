import { StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'

export default function Button({onPress, text, size, theme}) {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}
// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;


const styles = StyleSheet.create({
    button: {
      backgroundColor: "white",
      flex: 1,
      height: Math.floor(buttonWidth - 10),
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-end",
      margin: 5,
      borderRadius : 40,
      paddding: 5,
    },
    text: {
      color: "black",
      fontSize: 24,

    },
    textSecondary: {
      color: "#060606",
    },
    buttonSecondary: {
      backgroundColor: "#a6a6a6",
      borderRadius : 20,
    },
    buttonAccent: {
      backgroundColor: "#ffc107",
    
    },
  });