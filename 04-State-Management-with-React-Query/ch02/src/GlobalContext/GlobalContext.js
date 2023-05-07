import { useState, createContext, useEffect } from 'react'

export const GlobalContext = createContext()

const theme = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const GlobalStore = () => {
  const [selectedTheme, setSelectedTheme] = useState(theme.LIGHT)
  const [secondaryTheme, setSecondaryTheme] = useState(theme.LIGHT)
  const [data, setData] = useState(null)
  const [isLoadingData, setIsLoadingData] = useState(false)

  const toggleSecondaryTheme = () => {
    setSecondaryTheme((currentTheme) => (currentTheme === theme.LIGHT ? theme.DARK : theme.LIGHT))
  }

  const toggleTheme = () => {
    setSelectedTheme((currentTheme) => (currentTheme === theme.LIGHT ? theme.DARK : theme.LIGHT))
  }

  const fetchData = async (name = 'ditto') => {
    setIsLoadingData(true)
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const responseData = await response.json()
      setIsLoadingData(false)
      setData(responseData)
    } catch (e) {
      console.log(e)
      setIsLoadingData(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    selectedTheme,
    toggleTheme,
    data,
    isLoadingData,
    fetchData,
    secondaryTheme,
    toggleSecondaryTheme,
  }
}

const GlobalProvider = (children) => {
  return <GlobalContext.Provider value={GlobalStore()} {...children} />
}

export default GlobalProvider
