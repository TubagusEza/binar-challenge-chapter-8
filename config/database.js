const {
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = "bcr",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
  DATABASE_URL = "",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    use_env_variable: "postgres://ldfamrxzuiheav:7fd746bb41541e7af5bbc89a4a22819d0c5a59efc3e91195c81b9cd251c388b1@ec2-52-72-99-110.compute-1.amazonaws.com:5432/dbk6amreilfclm"
  }
}
