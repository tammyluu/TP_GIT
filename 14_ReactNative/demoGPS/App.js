import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'
import 'dotenv/config'

// npm i @react-native-community/geolocation
// ajout de la ligne : <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// dans le repertoire android/app/src/main/AndroidManifest.xml

export default function App() {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [getPosition, setGetPosition] = useState(true)
    const [localisation, setLocalisation] = useState({pays:"", ville:""})
    const [localisationAxios, setLocalisationAxios] = useState({pays:"", ville:""})
    
    useEffect(() => {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
        error => console.log(error),
        {enableHighAccuracy : true, timeout : 20000,maximumAge : 1000 }
        )
    },[getPosition])
  
        function getAPIWithFetch(){
          fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=bhOhx4YzBjNKzylYXk7CZgJcwmFqXCGx&q=${latitude}%2C${longitude}`)
          .then (response => response.json())
       
          .then(data => setLocalisation({pays : data.Country.LocalizedName, ville: data.LocalizedName}))
          .catch (error =>console.log(error))
        }

        function getAPIAxios(){
          axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=bhOhx4YzBjNKzylYXk7CZgJcwmFqXCGx&q=${latitude}%2C${longitude}`)
          .then(response => setLocalisationAxios({pays : response.data.Country.LocalizedName,ville: response.data.LocalizedName}))
          .catch(error =>console.log(error))
        }


        function reload() {
          setGetPosition(state => !state)
        }
  return (
    <View>
      <Button title='refresh' onPress={reload}></Button>
      <Text>Latitude : {latitude}</Text>
      <Text>Longtitude : {longitude}</Text>
      <Button title='get location with Fetch' onPress={getAPIWithFetch}></Button>
      <Button title='get location with Axios' onPress={getAPIAxios}></Button>
      <Text>Localication : {localisation.pays} {localisation.ville}</Text>

    </View>
  )
}

const styles = StyleSheet.create({})