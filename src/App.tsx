import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizPage from "./QuizPage";
import PickPage from "./PickPage";
import WritePage from "./WritePage";
import GuestBooks from "./GuestBooks";
import {QueryClient, QueryClientProvider} from "react-query";


function App() {

  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/pick" element={<PickPage />}/>
        <Route path="/write" element={<WritePage />} />
        <Route path="/all" element={<GuestBooks/>} />
      </Routes>
    </BrowserRouter>
      </QueryClientProvider>
  );
}



export default App;
