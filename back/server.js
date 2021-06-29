const express = require("express");
const app = express();
/* const {User ,Comic,Category,Cart,CartDetail,Review,Payment} = require("./models"); */
const db = require("./config");
const PORT = process.env.PORT || 3001





db.sync({ force: true })
  .then(({ config }) => {
    console.log(`Successful database connection to => ${config.database}`)
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`))
  })
  .catch(err => {
    console.log("DB sync failed", err)
  })