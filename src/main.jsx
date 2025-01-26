import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { LoadingProvider } from './contexts/LoadingContext'
import ErrorBoundary from './components/common/ErrorBoundary'
import { AuthProvider } from './contexts/AuthContext'
import { SkeletonProvider } from './contexts/SkeletonContext'
import { RequestProvider } from './contexts/RequestContext'
//import { AppLoadingProvider } from './contexts/AppLoadingContext'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <LoadingProvider>
          <AuthProvider>
            <RequestProvider>
              <SkeletonProvider>
               <App />
              </SkeletonProvider>
            </RequestProvider>
            
          </AuthProvider>
        </LoadingProvider>
      </Provider>
    </ErrorBoundary>  
  </BrowserRouter>
)
