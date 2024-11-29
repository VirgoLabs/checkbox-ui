import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import CheckBox, { CheckBoxStatusProps } from "@/components/CheckBox";
import { useState } from "react";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [status_, setStatus_] = useState<CheckBoxStatusProps>('checked')

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.tint,
        dark: Colors.dark.tint,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-ui-lab-logo.png")}
          style={[styles.reactLogo, {
            tintColor: colors.text,
          }]}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to UI Lab!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Checkbox Component usage */}
      <CheckBox
        status={status_}
        onPress={(status) => setStatus_(status)}
        label="Expo React Native"
        checkedLabel="React Native Checked!🎉🥳"
        indeterminateLabel="Expo Checked!🎉🥳"
      />

      <ThemedText type="title">Usecases of the Checkbox</ThemedText>
      <ThemedText type="small">
        Change Light/Dark theme to change checkbox by theme
      </ThemedText>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          status &nbsp;
          <ThemedText type="light" style={{ color: "red" }}>
            required
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">"checked" | "unchecked" | "indeterminate"</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="Basic CheckBox"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          onPress &nbsp;
          <ThemedText type="light" style={{ color: "red" }}>
            required
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">(status: CheckBoxStatusProps) =&gt; void</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          indeterminate
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          indeterminate
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          label
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          disabled
        </ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          disabled
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          checkedLabel
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          checkedLabel="Checked 🥳"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          indeterminateLabel
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          indeterminateLabel="Check All 🥺"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          labelPosition
        </ThemedText>
        <ThemedText type="default">"left" | "right"</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          labelPosition="left"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          checkedColor
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          checkedColor="green"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          indeterminateColor
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          indeterminateColor="hotpink"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          uncheckedColor
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          uncheckedColor="#456456"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          borderColor & uncheckedBorderColor
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          borderColor="seagreen"
          uncheckedBorderColor="pink"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          checkedIcon
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          checkedIcon="add-outline"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          indeterminateIcon
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          indeterminateIcon="apps"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          uncheckedIcon
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          uncheckedIcon="airplane"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          size
        </ThemedText>
        <ThemedText type="default">number</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          size={28}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          shape
        </ThemedText>
        <ThemedText type="default">"circle" | "square"</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          shape={"circle"}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          isError
        </ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          isError
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">
          errorColor
        </ThemedText>
        <ThemedText type="default">string</ThemedText>
        <CheckBox
          status={status_}
          onPress={status => setStatus_(status)}
          label="CheckBox"
          isError
          errorColor={'orange'}
        />
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
