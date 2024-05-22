import Container from "./components/layout/Container";
import { useTheme } from "./hooks/useTheme";

function App() {
  // change Theme
  const { mode } = useTheme();
  return (
    <div className={`h-screen ${mode === "dark" ? "bg-gray-800" : "bg-white"}`}>
      <Container />
    </div>
  );
}

export default App;
