import { createRoot } from 'react-dom/client';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, Suspense } from 'react';
import AdoptedPetContext from "./Components/AdoptedPetContext";

const Details = lazy(() => import("./Components/Details"));
const SearchParams = lazy(() => import("./Components/SearchParams"));

const queryClient = new QueryClient ({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <Suspense
            fallback={
            <div className='loading-pane'>
              <h2 className='loader'>🌸</h2>
            </div>}>

            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={ <Details /> } />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Suspense>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
