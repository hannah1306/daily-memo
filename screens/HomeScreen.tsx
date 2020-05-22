import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export default function HomeScreen(){

  return (
    <S.ChatView>
      <S.ChatInput></S.ChatInput>
    </S.ChatView>
  )
}

const S: any = {};
S.ChatView = styled.View`
  flex: 1;
`;
S.ChatInput = styled.TextInput`
  border: 1px solid red;
`;