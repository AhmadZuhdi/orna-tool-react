import './App.css'
import {useState, useEffect} from 'react'

export default function App() {

  const [text, setText] = useState("")
  const [materials, setMaterials] = useState([])

  const checkIsMaterial = /\(\d+\)/g
  
  const process = () => {
    const filteredMaterial = text.split(",")
      .filter(item => item.match(checkIsMaterial))
      .map(item => item.replace(")", "").split("("))

    setMaterials(filteredMaterial)
  }
  
  return (
    <main>
      <textarea value={text} onChange={e => setText(e.target.value)}>
        
      </textarea>
      <button onClick={process}>process</button>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <trd>Count</trd>
          </tr>
        </thead>
        <tbody>
          {materials.map(material => (
            <tr>
              <td>{material[0]}</td>
              <td>{material[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
