//? Estilos colocados em um arquivo de TypeScript
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 16
  },
  text_color: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  title_color: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  input: {
    flex: 1,
    height: 56, 
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24
  },
  form: {
    width: "100%",
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  formUpdate: {
    width: "100%",
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 42
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center"
}
})