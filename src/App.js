import React, {Fragment} from 'react'
import './App.scss'
import Header from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'
import Carousel from './components/Carousel'
import Item from './components/Item'
import Footer from './components/Footer'
import useInitialState from './hooks/useInitialState'

function App(){
  const video = useInitialState()
  return(
    <Fragment>
      <Header/>

      <Search/>

      {
        video.mylist !== undefined && 
        video.mylist.length> 0 && 
        <Categories title="Mi lista">
        <Carousel>

        </Carousel>
      </Categories>
      }
      

      <Categories title="Trends">
        <Carousel>
          {
            video.trends !== undefined &&
               video.trends.map(item => {
                return <Item key={item.id} data={item}/>
               }
            )
          }
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {
            video.trends !== undefined &&
               video.originals.map(item => {
                return <Item key={item.id} data={item}/>
               }
            )
          }
        </Carousel>
      </Categories>

      <Footer/>

    </Fragment>
  )
}

export default App