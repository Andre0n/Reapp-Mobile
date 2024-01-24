import React from 'react';
import { TextInput, InputModeOptions } from 'react-native';

import Colors from '../../constants/Colors';

type InputProps = {
  placeholder?: string;
  maxLength?: number;
  inputMode?: InputModeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

function Input({
  placeholder,
  maxLength,
  inputMode,
  value,
  onChangeText,
  secureTextEntry,
}: InputProps) {
  return (
    <TextInput
      className="boder-1 min-h-14 w-full rounded border border-text_secondary 
                    bg-input_background px-2 py-4 font-_regular 
                    text-base text-text_gray"
      placeholder={placeholder}
      placeholderTextColor={Colors.text_gray}
      maxLength={maxLength}
      inputMode={inputMode}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default Input;
