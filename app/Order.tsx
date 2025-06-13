import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function OrderScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Order Screen</Text>
            <Link href="/" style={styles.link}>Go to Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
    text: { fontSize: 24, color: '#fff' },
    link: { marginTop: 20, fontSize: 16, color: '#2e92ff' }
});