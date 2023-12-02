import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';

function ExerciseCard({exercise}) {
  
  return (
    <View>
      <Text>{exercise.name}</Text>
    </View>
    
  )
}

export default ExerciseCard