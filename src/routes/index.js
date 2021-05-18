import Header from '../templates/Header'
import Home from '../pages/Home'
import Chracters from '../pages/Characters'
import Error from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
  '/': Home,
  '/:id': Chracters,
  '/contact': 'Contact'
}

const router = async()=>{
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()

  const hash = getHash()
  const route = await resolveRoutes(hash)
  const render = routes[route] ? routes[route] : Error

  content.innerHTML = await render()

}

export default router