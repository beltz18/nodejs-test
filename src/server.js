require("dotenv").config()
require("./controllers/servidor")()
const port = process.env.PORT

async function init() {
  await app().listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
}

init()