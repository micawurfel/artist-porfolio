import { createContext, useContext, useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import { ApiService } from '../services/ApiService'

export const WorkContext = createContext({})

export const useWorkContext = () => useContext(WorkContext)


export default function WorkContextProvider({children}) {

  const apiService = new ApiService()

  const [works, setWorks] = useState([])
  // const [art, setArt] = useState({})

  async function getWorks(){
      const response = await apiService.getWorks()
      setWorks(response.works)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <WorkContext.Provider value={{works, getWorks, scrollToTop}}>
        {children}
    </WorkContext.Provider>
  )
}
