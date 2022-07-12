import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container"> {/* esse DIV serve para controlar a largura */}</div>
            <SalesCard />
        </section>
      </main>

    </>
  )
}

export default App
