import './App.css'
import JSXExample from "./01-basics/jsx/jsx-example"
import UserCardExample from './01-basics/component/component'
import StateExample from './01-basics/state/state'
import ConditionalListExample from './01-basics/conditional-list/ConditionalListExample'
import UseStateExamples from './02-hook/useState/UseStateExamples'
function App() {
  return (
    <div>
      <JSXExample /> 
      <UserCardExample /> 
      <StateExample />
      < ConditionalListExample />
      <UseStateExamples />
    </div>
  )
}

export default App
