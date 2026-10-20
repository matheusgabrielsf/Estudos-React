import { Image, StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Link } from "expo-router";


import { Input } from "../components/input";
import { Button } from "../components/Button";

export default function Index() {
    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height" })}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
            <Image
                source={require("../assets/img1.jpg")}
                style={styles.ilustration}
            />

            <Text style={styles.title}>Entra ai mano,</Text>
            <Text style={styles.subtitle}> Usa o email e senha.</Text>


             <View style={styles.form}>
                 <Input placeholder="Email" keyboardType="email-address"/>
                  <Input placeholder="Senha" secureTextEntry />
                    <Button label="Entrar" />
            </View>
            <Text style={styles.footerText}>Não tem uma conta? {" "}
                <Link href="/signup" style={styles.footerLink}>
                Cadastre-se aqui.
                </Link>
            </Text>   
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
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
        color: "#black",
    },

    form: {
        marginTop: 24,
        gap: 12,
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860",
    },
    footerLink: {
        color: "#032ad7",
        fontWeight: 700,
    },
});
