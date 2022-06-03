import { ScrollView, Text, StyleSheet, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Country from '../Country'

export default Countries = () => {
  const [countries, setCountries] = useState([])
  const [searched, setSearched] = useState([])
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()

        setCountries(data)
        setSearched(data)
      } catch (error) {
        console.log(error?.message)
      }
    }

    getCountries()
  }, [])

  const handleSearch = (text) => {
    setSearched(
      countries?.filter(({ name }) =>
        name?.common?.toLowerCase().includes(text?.toLowerCase())
      )
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search Country by Name'
        style={styles.input}
        onChangeText={handleSearch}
      />
      <Text style={styles.title}>
        {searched?.length === countries?.length
          ? 'All Countries'
          : 'Searched Countries'}
      </Text>
      <ScrollView style={styles.countries}>
        {searched?.map((country, i) => (
          <Country key={i} country={country} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  countries: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
