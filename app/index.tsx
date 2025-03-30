import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'tamagui';
import { Container, Title } from '~/tamagui.config';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Container
        mt={20}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/images/logo.png')}
          height={109}
          width={114}
        />
        <Title
          size={'$9'}
          mt={10}
          ml={20}
          fontWeight={600}
          color={'white'}
          style={{
            textAlign: 'center',
            marginVertical: 10,
          }}
        >
          FinWise
        </Title>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D09E',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default Home;
