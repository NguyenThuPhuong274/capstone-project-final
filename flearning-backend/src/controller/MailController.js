import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nguyenthuphuong274hd@gmail.com",
        pass: "xfwewcmaxitvmdck"
    }
})

const MailController = {
    sendMail: async (req, res) => {
        const details = req.body;
        const mailOptions = {
            from: "nguyenthuphuong274@gmail.com",
            to: details.email,
            subject: details.subject,
            html: `
                    <h3>Xin chào ${details.name},</h3>
                    <p>Mình xin giải đáp thắc mắc câu hỏi của bạn gửi cho JLearning: <span style="color: blue">"${details.question}"</span></p>
                    <p style="white-space: pre-line" >${details.answer}</p>
                `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent");
            }
        });

        const queryString = `UPDATE [dbo].[Contact]
                 SET [response_date] = '${details.response_date}'
                    ,[status] =  '${details.status}'
                    ,[response_message] =   N'${details.answer}'
                 WHERE [contact_id] =  ${details.contact_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            rowAffected: data,
        })
    },
    sendMailForgotPassword: async (req, res) => {
        const details = req.body;

        const queryString = `SELECT COUNT(*) AS [total] FROM [ACCOUNT] WHERE [email] = '${details.email}'`;
        const data = await executeQuery(queryString);
        if (data && data[0].total > 0) {
            const mailOptions = {
                from: "nguyenthuphuong274@gmail.com",
                to: details.email,
                subject: details.subject,
                html: `
                        <h3>Xin chào,</h3>
                        <p>Hãy truy cập vào đường link sau để thay đổi mật khẩu của bạn: 
                            <a href="${details.link}" >Đổi Mật Khẩu</a>
                        </p>
                       
                    `,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent");
                }
            });

            return res.json({ status: true, email: details.email });
        }
        return res.json({ status: false, email: details.email });

    },


};

export default MailController;
