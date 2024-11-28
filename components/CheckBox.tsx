import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  Animated
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export type CheckBoxStatusProps = "checked" | "unchecked" | "indeterminate";

interface CheckBoxProps {
  status: CheckBoxStatusProps;
  onPress: (status: CheckBoxStatusProps) => void;
  disabled?: boolean;
  label?: string;
  checkedLabel?: string;
  indeterminateLabel?: string;
  labelPosition?: "left" | "right";
  checkboxStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  checkedColor?: string;
  indeterminateColor?: string;
  uncheckedColor?: string;
  borderColor?: string;
  uncheckedBorderColor?: string;
  checkedIcon?: keyof typeof Ionicons.glyphMap;
  uncheckedIcon?: keyof typeof Ionicons.glyphMap;
  indeterminateIcon?: keyof typeof Ionicons.glyphMap;
  size?: number;
  shape?: "circle" | "square";
  isError?: boolean;
  errorColor?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  status,
  onPress,
  disabled = false,
  label,
  checkedLabel,
  indeterminateLabel,
  labelPosition = "right",
  checkboxStyle,
  labelStyle,
  checkedColor,
  indeterminateColor,
  uncheckedColor,
  borderColor,
  uncheckedBorderColor,
  checkedIcon,
  uncheckedIcon,
  indeterminateIcon,
  size = 24,
  shape = "square",
  isError = false,
  errorColor = "#FF5252",
}) => {

  const platform = Platform.OS;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  checkedColor = checkedColor || colors.tint;
  indeterminateColor = indeterminateColor || colors.tint;
  uncheckedColor = uncheckedColor || colors.tabIconDefault;

  const scale = React.useRef(new Animated.Value(1)).current;

  // Animation on press
  const animatePress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const icon =
    status === "indeterminate"
      ? <Ionicons name={indeterminateIcon || "remove"} size={size * 0.7} color={platform === "ios" ? indeterminateColor : colors.text} />
      : status === "checked"
        ? <Ionicons name={checkedIcon || "checkmark"} size={size * 0.8} color={platform === "ios" ? checkedColor : colors.text} />
        : uncheckedIcon && <Ionicons name={uncheckedIcon} size={size * 0.8} color={platform === "ios" ? uncheckedColor : colors.background} /> || null;

  const checkboxStyles = [
    styles.checkbox,
    {
      width: size,
      height: size,
      borderRadius: shape === "circle" ? size : (size * 0.2),
      borderWidth: 2,
      borderColor: isError ? errorColor : status === "indeterminate" ? borderColor || indeterminateColor : status !== "unchecked" ? borderColor || checkedColor : uncheckedBorderColor || uncheckedColor,
      backgroundColor: status === "checked" || status === "indeterminate" ? (isError ? errorColor : (status === "indeterminate" ? indeterminateColor : checkedColor)) : (uncheckedIcon ? colors.tabIconDefault : "transparent"),
      justifyContent: "center" as ViewStyle["justifyContent"],
      alignItems: "center" as ViewStyle["alignItems"],
    },
    checkboxStyle || {},
  ];

  const labelStyles = [
    styles.label,
    {
      color: disabled ? "#BDBDBD" : colors.text
    },
    labelStyle,
  ];

  // Handle status toggle
  const handlePress = () => {
    if (!disabled) {
      animatePress();
      const newStatus =
        status === "unchecked"
          ? "indeterminate"
          : status === "checked"
            ? "unchecked"
            : "checked";
      onPress(newStatus);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={disabled ? 0.5 : 1}
      disabled={disabled}
      onPress={handlePress}
    >
      {label && labelPosition === "left" && (
        <Text style={labelStyles}>{(status === "checked" && checkedLabel) ? checkedLabel : (status === "indeterminate" && indeterminateLabel) ? indeterminateLabel : label}</Text>
      )}
      <Animated.View style={[checkboxStyles, { transform: [{ scale }], opacity: disabled ? 0.5 : 1 }]}>{icon}</Animated.View>
      {label && labelPosition === "right" && (
        <Text style={labelStyles}>{(status === "checked" && checkedLabel) ? checkedLabel : (status === "indeterminate" && indeterminateLabel) ? indeterminateLabel : label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginHorizontal: 8,
  },
  label: {
    fontSize: 16,
  },
});

export default CheckBox;
