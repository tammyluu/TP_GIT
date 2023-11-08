import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import Button from './components/Button'
import Row from './components/Row'
import calculator , {initialState} from './components/logic.js'
import { useState } from 'react'

export default function App() {
    const [input, setInput] = useState("")

    // handle tap method
    const HandleTap = (type, value) => {
        setInput((state) => calculator(type, value, state));
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Calculator</Text>
       {/* Status base here */}
       <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => HandleTap("clear")}
            />

            <Button
              text="^"
              theme="secondary"
              onPress={() => HandleTap("power")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => HandleTap("percentage")}
            />

            <Button
              text="/"
              theme="secondary"
              onPress={() => HandleTap("operator", "/")}
            />
          </Row>

          {/* Number */}
          <Row>
            <Button text="7" onPress={() => HandleTap("number", 7)} />
            <Button text="8" onPress={() => HandleTap("number", 8)} />
            <Button text="9" onPress={() => HandleTap("number", 9)} />
            <Button text="X" theme="secondary" onPress={() => HandleTap("operator", "*")}/>
          </Row>

          <Row>
            <Button text="5" onPress={() => HandleTap("number", 5)} />
            <Button text="6" onPress={() => HandleTap("number", 6)} />
            <Button text="7" onPress={() => HandleTap("number", 7)} />
            <Button
              text="-"
              theme="secondary"
              onPress={() => HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => HandleTap("number", 1)} />
            <Button text="2" onPress={() => HandleTap("number", 2)} />
            <Button text="3" onPress={() => HandleTap("number", 3)} />
            <Button
              text="+"
              theme="secondary"
              onPress={() => HandleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="." onPress={() => HandleTap("number", ".")} />
            <Button text="0" onPress={() => HandleTap("number", 0)} />
            <Button
              text="Del"
              theme="primary"
              onPress={() => HandleTap("clear")}
            /> 
            <Button
              text="="
              theme="secondary"
              onPress={() => HandleTap("equal", "=")}
            />
          </Row>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor :"black",
        justifyContent: "flex-end",
    },
    title : {
        color : "white",
        padding : 20,
        fontSize : 40,
        fontWeight: "bold",
    },
    value: {
        color: "#fff",
        fontSize: 42,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10,
      }
})                                                    