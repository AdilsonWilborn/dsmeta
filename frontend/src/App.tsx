import NotificationButton from "./components/NotificationButton"

function App() {
  return (
    <>
      <h1>Olá mundo!</h1>
      <NotificationButton /> {/* Componente é usado para reproveitar uma parte e você pode chamar de qualquer lugar */}
      <NotificationButton />
    </>
  )
}

export default App
