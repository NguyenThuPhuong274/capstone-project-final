var sql = require("mssql");
var config = {
  user: "sa",
  password: "123",
  server: "THU-PHUONG27",
  database: "flearning",
  port: 1433,
  options: {
    encrypt: false,
    useUTC: true,
    enableArithAbort: true,
    charset: 'UTF-8'
  },
};
var database = new sql.ConnectionPool(config);

const DBProvider = () => {
  connect();
};

const connect = () => {
  database
    .connect()
    .then(function () {
      console.log("connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export async function executeQuery(queryString) {
  try {
    let data = await database.request().query(queryString);
    return data.recordset;
  } catch (error) {
    console.log(error);
  }
}

export async function executeNonQuery(queryString) {
  try {
    let data = await database.request().query(queryString);
    return data.rowsAffected;
  } catch (error) {
    console.log(error);
  }
}

export default DBProvider;
