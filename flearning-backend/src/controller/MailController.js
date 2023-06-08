import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const dbp = DBProvider();

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nguyenthanhlam7010@gmail.com",
    pass: "nfbvmvjoyrqphqxg",
  },
});

const MailController = {
  sendMail: async (req, res) => {
    const details = req.body;
    const mailOptions = {
      from: "nguyenthanhlam7010@gmail.com",
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
    });
  },
  sendMailForgotPassword: async (req, res) => {
    const details = req.body;

    const queryString = `SELECT COUNT(*) AS [total] FROM [ACCOUNT] WHERE [email] = '${details.email}'`;
    const data = await executeQuery(queryString);
    if (data && data[0].total > 0) {
      const mailOptions = {
        from: "nguyenthanhlam7010@gmail.com",
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
  sendInvoice: async (req, res) => {
    const invoice = req.body;
    console.log(invoice);
  
    // Get the current date
    const currentDate = new Date().toLocaleDateString();
  
    const docDefinition = {
      content: [
        { text: "HÓA ĐƠN THANH TOÁN", style: "header", alignment: "center", margin: [0, 0, 0, 10] },
        { text: "Ngày tạo hóa đơn: " + currentDate, alignment: "right", margin: [0, 0, 0, 10] },
        { text: "Thông tin khóa học:", style: "subheader" },
        {
          table: {
            widths: ["*", "*"],
            body: [
              [
                { text: "Tên khóa học:", bold: true },
                { text: invoice.course_name },
              ],
              [
                { text: "Giá:", bold: true },
                { text: invoice.price },
              ],
              [
                { text: "Thời gian: ", bold: true },
                { text: `${invoice.duration} tháng` },
              ],
            ],
          },
          margin: [0, 0, 0, 10],
        },
        { text: "Thông tin cá nhân:", style: "subheader" },
        {
          table: {
            widths: ["*", "*"],
            body: [
              [
                { text: "Tên:", bold: true },
                { text: invoice.name },
              ],
              [
                { text: "Địa chỉ:", bold: true },
                { text: invoice.address },
              ],
              [
                { text: "Số điện thoại:", bold: true },
                { text: invoice.phone },
              ],
              [
                { text: "Email:", bold: true },
                { text: invoice.email },
              ],
            ],
          },
        },
        {
          text: "Nhà cung cấp khóa học: JLearning Website",
          alignment: "right",
          margin: [0, 20, 0, 0],
        },
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          decoration: "underline",
        },
        subheader: {
          fontSize: 18,
          bold: true,
          margin: [0, 15, 0, 5],
        },
      },
      defaultStyle: {
        fontSize: 12,
      },
    };
  
    const pdfDoc = pdfMake.createPdf(docDefinition);
  
    pdfDoc.getBuffer((buffer) => {
      const mailOptions = {
        from: "nguyenthanhlam7010@gmail.com",
        to: invoice.email,
        subject: "Thanh toán khóa học " + invoice.course_name + " thành công",
        attachments: [
          {
            filename: "invoice.pdf",
            content: buffer,
            contentType: "application/pdf",
          },
        ],
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
          return res.status(500).json("Error sending email");
        } else {
          console.log("Email sent:", info.response);
          return res.json("ok");
        }
      });
    });
  },
  
};

export default MailController;
