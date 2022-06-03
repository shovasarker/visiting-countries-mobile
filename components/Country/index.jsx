import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default Country = ({ country }) => {
  const { name, flags } = country
  return (
    <View style={styles.country}>
      <Image source={{ uri: flags?.png }} style={styles.img} />
      <Text style={styles.name}>{name?.common}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  country: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
    borderRadius: 6,
    marginTop: 10,
    textAlign: 'center',
  },
  img: {
    width: 220,
    height: 165,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
