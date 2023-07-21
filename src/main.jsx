import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CryptoContext from './CryptoContext.jsx'
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CryptoContext>
        <App />
    </CryptoContext>
)