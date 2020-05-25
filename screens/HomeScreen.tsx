import React from 'react';
import styled from 'styled-components/native';

export default function HomeScreen(){

  const _createMemo = () => {
    console.log(1);
  }
  
  return (
    <S.ChatView>
      <S.MemoBox>
        <S.MemoInput></S.MemoInput>
        <S.MemoButton title="입력" onPress={_createMemo}></S.MemoButton>
      </S.MemoBox>
    </S.ChatView>
  )
}

const S: any = {};
S.ChatView = styled.View`
  flex: 1;
`;
S.MemoBox = styled.View`
  flex-direction: row;
`;
S.MemoInput = styled.TextInput`
  border: 1px solid red;
`;
S.MemoButton = styled.Button`

`;