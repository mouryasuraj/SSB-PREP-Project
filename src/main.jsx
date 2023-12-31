import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './componets/Layout'
import Home from './componets/Home/Home'
import About from './componets/About'
import ContactUs from './componets/ContactUs'
import WordAssociation from './componets/Home/Psychology/WordAssociationTest/WordAssociation'
import ShowWords from './componets/Home/Psychology/WordAssociationTest/ShowWords'
import WordSet from './componets/Home/Psychology/WordAssociationTest/WordSet'
import Instruction from './componets/Home/Psychology/WordAssociationTest/Instruction'
import StartTest from './componets/Home/Psychology/WordAssociationTest/StartTest'
import { Provider } from 'react-redux'
import { store } from './App/store'

const set = [];
const len = 10;

for (let i = 1; i <= len; i++) {
  set.push(`set_${i<10 ? `0${i}` : i}/`)
}




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='word-association-test/' element={<WordAssociation />} >
        <Route path='' element={<WordSet />} />
        {
          set.map((set) => (
            <Route path={set} key={set} element={<ShowWords />} >
              <Route path='' element={<Instruction />} />
              <Route path='start-test/:id' element={<StartTest />} />
            </Route>
          ))
        }
      </Route>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
