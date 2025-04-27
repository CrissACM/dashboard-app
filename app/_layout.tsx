import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

  const [loaded] = useFonts({
    'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <View style={{ backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
            animation: 'ios_from_right',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerLeft: ({ canGoBack }) =>
              canGoBack && (
                <Ionicons
                  name='arrow-back-outline'
                  size={24}
                  color='#808080'
                  onPress={() => router.back()}
                />
              ),
          }}
        >
          <Stack.Screen name='home/index' options={{ title: 'User' }} />
          <Stack.Screen name='profile/[id]' options={{ title: 'Profile' }} />
          <Stack.Screen name='data/index' options={{ title: 'Data' }} />
          <Stack.Screen name='stats/index' options={{ title: 'Stats' }} />
          <Stack.Screen name='+not-found' />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </View>
  );
}
