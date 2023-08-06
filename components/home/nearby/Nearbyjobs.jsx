import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import styles from './nearbyjobs.style'
import useFetch from '../../../hooks/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
const Nearbyjobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch('search', {
    query: "React developer",
    num_pages: "1",
  });

  // console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Near By jobs</Text>
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
            data?.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            ))
          )}
      </View>
    </View>
  )
}

export default Nearbyjobs