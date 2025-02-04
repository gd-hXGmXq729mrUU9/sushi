import React, { useState } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import Text from 'components/base/Text';
import useStyles from './style';
import { TextInputProps } from './props';

const TextInput = (props: TextInputProps) => {
  const {
    containerStyle = {},
    style = {},
    theme,
    label = '',
    value = '',
    placeholder = '',
    onChangeText,
    keyboardType,
    onBlur,
  } = props;
  const { styles, colors } = useStyles(theme);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text variant="label" style={styles.label}>
        {label}
      </Text>

      <View
        style={[
          styles.inputContainer,
          isSelected ? styles.inputContainerActive : {},
        ]}>
        <RNTextInput
          style={[styles.input, style]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => {
            setIsSelected(true);
          }}
          onBlur={() => {
            if (onBlur) {
              onBlur();
            }
            setIsSelected(false);
          }}
          placeholder={placeholder}
          placeholderTextColor={colors.PLACE_HOLDER}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default TextInput;
