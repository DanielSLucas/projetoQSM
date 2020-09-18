import React, { useEffect, useRef } from 'react';

import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import {
  Container,
  TextInput,
  Line,
  DashedLineContainer,
  LittleLine,
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  dashed?: boolean;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, dashed = false, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        (inputValueRef.current.value = ''), inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container style={{ borderStyle: 'dotted' }}>
      <TextInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />

      {!dashed ? (
        <Line />
      ) : (
        <DashedLineContainer>
          <LittleLine />
          <LittleLine />
          <LittleLine />
          <LittleLine />
          <LittleLine />
          <LittleLine />
          <LittleLine />
        </DashedLineContainer>
      )}
    </Container>
  );
};

export default Input;
