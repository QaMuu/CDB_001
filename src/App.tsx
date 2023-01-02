function App() {
  return (
    <div className="container mx-auto w-[400px] px-[24px] py-[24px]">

      <header className="mt-[12px] bg-gradient-to-r from-[#6080B0] via-[#08DCF9] to-[#FF2775] pb-[4px]">
        <div className="bg-black px-[4px]">
          <h1 className="text-white">h1 title</h1>
        </div>
      </header>
      
      <main className="my-[36px]">
        <p className="text-white">body text</p>
      </main>
      
      <footer className="bg-gradient-to-r from-[#6080B0] via-[#08DCF9] to-[#FF2775] pt-[4px]">
        <div className="bg-black px-[4px]">
        <p className="text-white text-center"> - footer - </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
