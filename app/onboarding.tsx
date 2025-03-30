import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'tamagui';
import { COLORS } from '~/constants/color';
import { Container, Title } from '~/tamagui.config';

const Onboarding = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Container
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Image
          source={require('../assets/images/light_logo.png')}
          height={109}
          width={114}
        />
        <Title
          size={'$9'}
          mt={10}
          ml={20}
          fontWeight={600}
          style={{
            color: COLORS.primary,
            fontSize: 40,
          }}
        >
          FinWise
        </Title>
        <Text style={{ maxWidth: 200, textAlign: 'center', color: '#4B4544' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <Button
            fontWeight={600}
            color={'white'}
            onPress={() => router.push('/sign-in')}
            size="$3"
            style={{
              backgroundColor: COLORS.primary,
              width: 207,
              textAlign: 'center',
            }}
          >
            Log In
          </Button>

          <Button
            onPress={() => router.push('/sign-up')}
            size="$3"
            fontWeight={600}
            variant="outlined"
            style={{
              backgroundColor: '#DFF7E2',
              width: 207,
              textAlign: 'center',
              color: COLORS.primary,
            }}
          >
            Sign Up
          </Button>
          <Button
            onPress={() => router.push('/forgot-password')}
            size="$3"
            fontWeight={600}
            variant="outlined"
            style={{
              width: 207,
              textAlign: 'center',
              color: COLORS.primary,
            }}
          >
            Forgot Password?
          </Button>
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FFF3',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default Onboarding;
