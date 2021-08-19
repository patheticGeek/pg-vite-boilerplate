import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Footer from '@components/Footer'
import Index from '@pages/Index'
import NotFound from '@pages/NotFound'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Some navbar component here */}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <Switch>
            <Route exact path="/" component={Index} />

            <Route path="/" component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
