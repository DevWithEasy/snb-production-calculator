import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Header from '../components/Header';
import store, { persistor } from '../features/store';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <div className='relative'>
    <Header/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <Component {...pageProps} />
       </PersistGate>
    </Provider>
    <Toaster/>
  </div>
}
export default MyApp
