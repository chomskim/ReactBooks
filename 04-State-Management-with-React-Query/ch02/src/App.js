import { useContext } from 'react'
import { GlobalContext } from './GlobalContext/GlobalContext'

// const NotState = ({ aList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) => {
//   const filteredList = aList.filter((item) => item % 2 === 0);
//   const value = "a constant value";

//   return filteredList.map((item) => <div key={item}>{item}</div>);
// };

const AppWithGlobalContext = () => {
  const { selectedTheme, toggleTheme, data, isLoadingData, fetchData } = useContext(GlobalContext)

  console.log(data)
  return (
    <div className='App'>
      <div>selectedTheme: {selectedTheme}</div>
      <div>Is Loading: {String(isLoadingData)}</div>
      <div>
        <button onClick={toggleTheme}>Theme</button>
        <button onClick={() => fetchData('pikachu')}>Pikachu</button>
      </div>
    </div>
  )
}

export default AppWithGlobalContext
