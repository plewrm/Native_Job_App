import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
// import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font';

// SplashScreen.preventAutoHideAsync()

const Layout =()=>{
    const [fontsLoaded]=useFonts({
        DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular:require('../assets/fonts/DMSans-Regular.ttf')
    })

    const OnLayoutRootView = useCallback (async()=>{
        if(fontsLoaded){
         await Font.loadAsync
        }
    },[fontsLoaded])
    if(!fontsLoaded) return null;
    return <Stack onLayout={OnLayoutRootView}/>
}
export default Layout