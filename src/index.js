const app = require('./app')

init = () => {
  const ListenPort = process.env.PORT || 3000
  app.listen(ListenPort)
  console.log('App listen on port',ListenPort)
}

init()
require('./database')