import { Image, StyleSheet, View, Text } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/img1.jpg")}
                style={styles.ilustration}
            />

            <Text style={styles.title}>Entra ai mano,</Text>
            <Text style={styles.subtitle}> Usa o email e senha.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 0,
    },
    ilustration: {
        width: "100%",
        height: 400,
        resizeMode: "contain",
        marginTop: 50,
    },
    title: {
        fontSize: 32,
        textAlign: "center",
        fontWeight: "900",
        color: "#black"
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "900",
        color: "#black"
    }
});
