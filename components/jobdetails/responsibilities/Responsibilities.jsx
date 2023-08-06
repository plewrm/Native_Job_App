import React from 'react';
import { View, Text } from 'react-native';
import styles from "./responsibilities.style";

const Responsibilities = ({title,resp}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}:</Text>

    <View style={styles.pointsContainer}>
      {resp.map((item, index) => (
        <View style={styles.pointWrapper} key={item + index}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>{item}</Text>
        </View>
      ))}
    </View>
  </View>
  );
}

export default Responsibilities;
