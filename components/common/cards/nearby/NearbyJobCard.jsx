import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'
const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={handleNavigate}
  >
    <TouchableOpacity style={styles.logoContainer}>
    <Image
        source={{ uri: (job.employer_logo)}}
        resizeMode='contain'
        style={styles.logImage}
      />
      {/* <Image
        source={{ uri: checkImageURL( item.employer_logo)
           ? item.employer_logo 
           :'https://www.freepik.com/free-vector/logo-with-human-shape-star_952464.htm#query=dummy%20logo&position=13&from_view=keyword&track=ais' }}
        resizeMode='contain'
        style={styles.logoImage}
      /> */}
    </TouchableOpacity>
   
    <View style={styles.textContainer}>
    <Text style={styles.jobName} numberOfLines={1}>
      {job.job_title}
    </Text>
    <Text style={styles.jobType} >
      {job.job_employement_type}
    </Text>
    </View>
  </TouchableOpacity>
  )
}

export default NearbyJobCard