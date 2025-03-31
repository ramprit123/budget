import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Button, Input, Label, XStack, YStack } from 'tamagui';
import { Title } from '~/tamagui.config';

const SignIn = () => {
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
        Welcome Back
      </Title>
      <View
        style={{
          backgroundColor: '#F1FFF3',
          width: '100%',
          height: '100%',
          marginTop: 50,
          borderTopEndRadius: 56,
          borderTopStartRadius: 56,
          paddingHorizontal: 37,
          paddingVertical: 20,
        }}
      >
        <YStack mt={90}>
          <Label width={200} htmlFor="usename" fontSize={15} fontWeight={600}>
            Username or email
          </Label>
          <Input
            placeholder={`example@example.com`}
            style={{
              borderRadius: 18,
              backgroundColor: '#DFF7E2',
              height: 41,
              borderWidth: 1,
              borderColor: '#0E3E3E',
              paddingHorizontal: 10,
              fontSize: 16,
            }}
          />
        </YStack>

        <YStack mt={10}>
          <Label width={200} htmlFor="usename" fontSize={15} fontWeight={600}>
            Password
          </Label>
          <Input
            placeholder={`●●●●●●●●`}
            secureTextEntry={true}
            style={{
              borderRadius: 18,
              backgroundColor: '#DFF7E2',
              height: 41,
              borderWidth: 1,
              borderColor: '#0E3E3E',
              paddingHorizontal: 10,
              fontSize: 16,
            }}
          />
        </YStack>
        <YStack
          gap={20}
          mt={40}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            backgroundColor={'#00D09E'}
            size="$3"
            width={220}
            style={{
              height: 41,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: '#0E3E3E',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              Sign In
            </Text>
          </Button>

          <Button
            size="$3"
            variant="outlined"
            width={220}
            style={{
              height: 41,
              borderRadius: 18,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              Forgot Password?
            </Text>
          </Button>

          <Button
            size="$3"
            backgroundColor={'#DFF7E2'}
            variant="outlined"
            width={220}
            style={{
              height: 41,
              borderRadius: 18,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              Sign Up
            </Text>
          </Button>
        </YStack>
        <YStack
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 16,
            }}
          >
            Don’t have an account?
          </Text>
          <Link href={'/(auth)/sign-up'}>Sign Up</Link>
        </YStack>
      </View>
    </View>
  );
};

export default SignIn;
