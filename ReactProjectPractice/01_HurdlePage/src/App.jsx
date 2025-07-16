import './App.css'
import Logo from './Componets/Logo'
import Page from './Componets/Page'
import SocialIcons from './Componets/SocialIcons'

function App() {
return (
  <div className='bg-purple-400 h-screen bg-[url(./images/bg-desktop.svg)] '>
<Logo />
<section>
  <Page />
</section>
  </div>
)
}

export default App
