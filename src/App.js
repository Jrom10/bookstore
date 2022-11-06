import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/Create';
import Index from './components/Index';
import View from './components/View';
import Store from './store/Store'

function App() {
  return (
      <Store>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="create" element={<Create />} />
                <Route path="view/:bookId" element={<View />} />
              </Routes>
          </BrowserRouter>
      </Store>
  )
}




export default App;
