import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
import jwt from "jsonwebtoken";
const dbp = DBProvider();

const UserController = {
  getUser: async (req, res) => {
    let user = req.body;
    console.log("user detail", user);
    const queryString = `SELECT * FROM [Account] WHERE [email] = '${user.email}' AND [password] = '${user.password}'`;
    const data = await executeQuery(queryString);
    console.log("user return", data);
    if (data.length > 0) {
      user = data[0];

      const accessToken = jwt.sign(user, "secretKey", {
        expiresIn: "20m",
      });
      console.log(user);
      return res.json({ user: user, accessToken: accessToken });
    } else {
      return res.json({ message: "Tài khoản hoặc mật khẩu không chính xác" });
   }
  },
  getUsers: async (req, res) => {
    const queryString = `SELECT * FROM [User]`;
    const data = await executeQuery(queryString);

    const users = data;
    // console.log(data);
    return res.json({ users });
  },
  insertUser: async (req, res) => {
    const user = req.body;
    const queryString = `INSERT INTO [dbo].[User]
                          ([username]
                          ,[password]
                          ,[role_id])
                          VALUES ('${user.username}', 
                                  '${user.password}',
                                  '${user.phone}', 
                                  '1')`;
    const data = await executeNonQuery(queryString);

    console.log(data);

    return res.json({ user: user, rowAffected: data });
  },
  updateUserInfo: async (req, res) => {
    const user = req.body;
    console.log("user is being updated", user);
    const queryString = `UPDATE [dbo].[Account]
                          SET [phone] = '${user.phone}'
                            ,[name] = N'${user.name}'
                            ,[gender] = '${user.gender}'
                            ,[year_of_birth] = '${user.yearOfBirth}'
                            ,[address] = N'${user.address}'
                            ,[avatar_url] = '${user.avatar_url}'
                        WHERE [email] = '${user.email}'`;
    const data = await executeNonQuery(queryString);

    console.log(data);

    return res.json({ user: user, rowAffected: data });
  },
  getUserByUsername: async (req, res) => {
    const username = req.body.username;
    console.log("get user info of", username);
    const queryString = `SELECT * FROM [User] WHERE username = '${username}'`;

    const data = await executeQuery(queryString);
    return res.json({ data: data[0] });
  },
};

export default UserController;
