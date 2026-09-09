import { Image, StyleSheet, View, Text, ScrollView } from "react-native";

import { Input } from "../components/input";
import { Button } from "../components/Button";

export default function Index() {
    return (
        <ScrollView>
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
            <Text style={styles.footerText}>Não tem uma conta? Cadastre-se aqui</Text>   
        </View>
    </ScrollView>
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
        color: "cinza",
    },
});
