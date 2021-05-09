import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from '../src/components/Layout'
import { MainPage } from '../src/components/pages/Main'
import { theme } from '../src/components/theme'

const App = () => {
  return < ChakraProvider theme={theme} >
    <Layout>
      <MainPage />
    </Layout >
  </ChakraProvider >
}
ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
  ,
  document.getElementById('root')
)
