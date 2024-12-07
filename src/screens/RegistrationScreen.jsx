import React, { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { style } from '../../styles/general';
import Input from '../components/Input';
import { showPasswordButton } from '../components/ShowPassButton';
import { colors } from '../../styles/colors';
import Button from '../components/Button';

export default function RegistrationScreen() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [securePassEntry, setSecurePassEntry] = useState(true);

  const doRegister = () => {
    console.log(`Implement logic to register user ${userName}`);
  };

  const doLogin = () => {
    console.log(`Implement routing and link to log-in`);
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <Image source={require('../../assets/images/register_bg.jpg')} style={style.backgroundImage} />
      <KeyboardAvoidingView style={style.authWindowContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={style.avatarContainer}>
          <Image source={require('../../assets/images/add.png')} style={{ width: 25, height: 25, position: 'absolute', top: (120 - 25) / 2, left: (120 - 25) / 2 }} />
        </View>
        <Text style={[style.registrationTitle, { paddingTop: 40 }]}>Registration</Text>
        <Input value={userName} onChangeText={setUserName} placeholder='Name' textContentType={'username'} autofocus={true} />
        <Input value={userEmail} onChangeText={setUserEmail} placeholder='Email address' textContentType='emailAddress' />
        <Input
          value={userPass}
          onChangeText={setUserPass}
          placeholder='Password'
          secureTextEntry={securePassEntry}
          rightButton={showPasswordButton({ securePassEntry, setSecurePassEntry })}
        />
        <Button onPress={doRegister} outerStyle={{ marginHorizontal: 'auto', marginTop: 43 - 16 }}>
          <Text style={{ color: colors.button.default.text }}>Log in</Text>
        </Button>
        <View style={style.redirectText}>
          <Text>
            Have an account?
            <TouchableWithoutFeedback onPress={doLogin}>
              <Text style={{ color: colors.text.link }}> Log in</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
}
