import { View } from 'react-native';
import { Title } from '~/tamagui.config';

const SignUp = () => {
  return (
    <View
      style={{
        backgroundColor: '#00D09E',
        flex: 1,
      }}
    >
      <Title
        color={'black'}
        style={{
          textAlign: 'center',
          marginTop: 100,
          fontWeight: 'bold',
          fontSize: 30,
        }}
      >
        Create Account
      </Title>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          marginTop: 50,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        }}
      ></View>
    </View>
  );
};

export default SignUp;
