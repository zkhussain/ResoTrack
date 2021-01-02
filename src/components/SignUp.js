import React from 'react';
import {Text, View, Image} from 'react-native'
import {Container, Form, Button, Item, Input, Label} from 'native-base'
import style from '../styles/Style.js'

const SignUp = () => {
  return (
    <Container style={style.containerStyle}>
      <View>
        <Text style={style.textSignUp}>Welcome to ResoTrack</Text>
      </View>
      <Form>
        <Item floatingLabel>
            <Label>Username</Label>
            <Input />
        </Item>
        <Item floatingLabel>
            <Label>Email</Label>
            <Input />
        </Item>
        <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true}/>
        </Item>
        <Item floatingLabel last>
            <Label>Confirm Password</Label>
            <Input secureTextEntry={true}/>
        </Item>
        <Button block style={style.buttonStyle}>
          <Text style={style.textStyle}>Sign Up</Text>
        </Button>
        <Text style={style.textStyleAccount}>
          Already have an account? Log In
        </Text>
      </Form>
    </Container>
  )
}

export default SignUp;
