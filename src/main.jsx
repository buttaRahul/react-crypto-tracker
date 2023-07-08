import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CryptoContext from './CryptoContext.jsx'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CryptoContext>
        <App />
    </CryptoContext>
)
