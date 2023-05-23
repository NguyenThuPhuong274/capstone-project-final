import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const SupportController = {
    getSupports: async (req, res) => {
        const queryString = "SELECT * FROM [Support]";
        const data = await executeQuery(queryString);
        console.log(data);
        return res.json(data);
    },
    insertSupport: async (req, res) => {
        const support = req.body;
        console.log("support is being inserted", support);
        let queryString = `INSERT INTO [dbo].[Support]
                            ([support_name]
                              ,[message])
                        VALUES
                            ('${support.support_name}',
                              '${support.message}')`;
        const data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({ support: support, rowAffected: data });
    },
    updateSupport: async (req, res) => {
        const support = req.body;
        console.log(req.body);

        const queryString = `UPDATE [dbo].[Support]
                 SET [support_name] = '${support.support_name}'
                    ,[message] =  '${support.message}'
                 WHERE [support_id] =  ${support.support_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            support_id: support.support_id,
            rowAffected: data,
        })
    },
    deleteSupport: async (req, res) => {
        const support = req.body;
        console.log(req.body);

        const queryString = `DELETE FROM [Support] WHERE [support_id] =  ${support.support_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            rowAffected: data,
        })
    }
};

export default SupportController;
