import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({ style, ...rest }: TextInputProps) {
    return <TextInput style={[styles.input, style]} {...rest} />;
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12,
    },
});