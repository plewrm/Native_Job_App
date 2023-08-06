import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { COLORS, SIZES, icons, images } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"
import prof from "../assets/images/prof1.jpg";

export default function index() {
    const router = useRouter()
    const [searchTerm,setSearchTerm]=useState("")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profImage} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
