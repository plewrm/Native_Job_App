import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'
import useFetch from '../../../hooks/useFetch'
const Popularjobs = () => {
  const router = useRouter()
 //isLoading and error load dynamically
// const [data,setData]=useState([]);
// const [isLoading, setIsLoading]=useState(false)
// const [error, setError]=useState(null)
 const { data, isLoading, error } = useFetch('search', {
  query: "React developer",
  num_pages: "1",
});

const [selectedJob, setSelectedJob] = useState();

const handleCardPress = (item) => {
  router.push(`/job-details/${item.job_id}`);
  setSelectedJob(item.job_id);
};

 console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : 
        error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs