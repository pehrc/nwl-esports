import { Text, View, ViewProps } from "react-native";

import { styles } from "./styles";

interface IHeading extends ViewProps {
  title: string;
  subtitle: string;
}

export const Heading = ({ title, subtitle, ...rest }: IHeading) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
