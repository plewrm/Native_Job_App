import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useReducer } from 'react'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'
const jobTypes = ["Full-Time", "Part-Time", "FreeLancer"]
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-Time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi Alex</Text>
        <Text style={styles.welcomeMessage}>Find a perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What kind of job you looking?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=> item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome