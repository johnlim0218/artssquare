const { DATABASE } = require('./env.config');

module.exports = [
   {
      ...DATABASE,
      entities: ["server/models/**/entities/*.entity.{js,ts}"],
      synchronize: true,
      charset: "utf8mb4_general_ci"
   }
]