import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaView } from "react-native-safe-area-context";

const itensPerdidos = [

  {
    id: 1,
    title: "Mochila preta Adidas",
    local: "Quadra de esportes ADM",
    status: "Perdido",
    emoji: "🎒"
  },
  {
    id: 2,
    title: "Chaveiro com chaves ",
    local: "Biblioteca",
    status: "Encontrado",
    emoji: "🗝️"
  },
  {
    id: 3,
    title: "Fone de ouvido JBL",
    local: "Sala12 Meca",
    status: "Perdido",
    emoji: "🎧"
  }
];


export default function AchadosPerdidos() {

  <View style={styles.section}>
    <FlatList
      data={itensPerdidos}
      renderItem={(({ item }) => (

    <View style={styles.card}>


      <View style={{ flex: 1 }}>
        <Text style={styles.titulo}>{item.title}</Text>
        <Text style={styles.local}>{item.local}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <View
          style={[
            styles.status,
            item.status === "Perdido"
              ? styles.perdido
              : styles.encontrado,
          ]}
        >
          <Text
            style={{
              color: item.status === "Perdido" ? "#D9534F" : "#2E8B57",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {item.status}
          </Text>
        </View>
      </View>

    </View >
    ))}
      />
  </View>


  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>
        Achados & <Text style={{ color: "#E67E22" }}>Perdidos</Text>
      </Text>

      <Text style={styles.subtitulo}>
        SENAI - Ricardo Lerner · 12 itens ativos
      </Text>

      <View style={styles.filtros}>
        <TouchableOpacity style={styles.filtroAtivo}>
          <Text style={styles.textoFiltroAtivo}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filtro}>
          <Text style={styles.textoFiltro}>Perdidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filtro}>
          <Text style={styles.textoFiltro}>Encontrados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filtro}>
          <Text style={styles.textoFiltro}>Retirados</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.semana}>Esta semana</Text>

      
    </View>
  )
};

const styles = StyleSheet.create({
  section:{},
  container: {
    flex: 45,
    backgroundColor: "#F4EFEA",
    padding: 20,
  },
  tituloPagina: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#363636",
    marginVertical: 5,
  },
  filtros: {
    flexDirection: "row",
    marginVertical: 15,
  },
  filtroAtivo: {
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
  },
  textoFiltroAtivo: {
    color: "#FFF",
    fontWeight: "bold",
  },
  filtro: {
    backgroundColor: "#E5E0DB",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
  },
  textoFiltro: {
    color: "#555",
  },
  semana: {
    fontSize: 12,
    letterSpacing: 2,
    color: "#A08F85",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
  },
  local: {
    color: "#777",
    fontSize: 13,
  },
  status: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 5,
  },
  perdido: {
    backgroundColor: "#FDECEC",
  },
  encontrado: {
    backgroundColor: "#E6F4EA",
  },
  data: {
    fontSize: 10,
    color: "#999",
  },
});

