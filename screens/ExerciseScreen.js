import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React from 'react'
import ExerciseCard from '../components/exerciseCard';
export default function ExerciseScreen(exercises) {
  const exercisesData = exercises.route.params;
  console.log(exercises.route)
  return (
    <View className="flex-1 relative bg-white">
      <FlatList 
            vertical
            showsVerticalScrollIndicator={false}
            data={exercisesData}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{<ExerciseCard exercise={item}/> 
            }}
          />
    </View>
  )
}
