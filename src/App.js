import React, {Fragment} from 'react'
import './App.scss'
import Header from './components/Header'
import Search from './components/Search'

function App(){
  return(
    <Fragment>
      <Header/>
      <Search/>
    </Fragment>
  )
}

export default App