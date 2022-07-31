import { Route, Routes } from 'react-router-dom'

import routes from '@config/routes'

const Component = function () {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  )
}

export default Component
