import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome User!</Text>

      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button title="Sign In" onPress={() => router.push('/auth/SignInScreen')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Sign Up" onPress={() => router.push('/auth/SignUpScreen')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonGroup: {
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    marginBottom: 20,
  },
});