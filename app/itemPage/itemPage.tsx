import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function itemPage(){
    return(
        <View>
            <Text>Página do Item</Text>
            <Link href={"/"}>
                <Text>Voltar para a página anterior</Text>
            </Link>
        </View>
    )
}