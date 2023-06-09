import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const ContactController = {
    getContacts: async (req, res) => {
        const queryString = "SELECT * FROM [Contact] ORDER BY [request_date] DESC";
        const data = await executeQuery(queryString);
        // console.log("contacts: ", data);
        return res.json(data);
    },
    insertContact: async (req, res) => {
        const contact = req.body;
        console.log("contact is being inserted", contact);
        let queryString = `INSERT INTO [dbo].[Contact]
                                ([email]
                                ,[name]
                                ,[request_date]
                                ,[status]
                                ,[request_message])
                             VALUES ('${contact.email}', 
                                    N'${contact.name}', 
                                    '${contact.request_date}', 
                                    0, 
                                    N'${contact.request_message}')`;
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ contact: contact, rowAffected: data });
    },
    updateContact: async (req, res) => {
       
    }
};

export default ContactController;
