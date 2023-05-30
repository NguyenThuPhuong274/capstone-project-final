import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();
import moment from "moment";

const PaymentController = {
    createPayment: async (req, res) => {
        const payment = req.body;
        console.log(payment);
        process.env.TZ = 'Asia/Ho_Chi_Minh';

        let date = payment.created_date;
        let createDate = moment(date).format('YYYYMMDDHHmmss');

        let ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

        let config = require('config');

        let tmnCode = config.get('vnp_TmnCode');
        let secretKey = config.get('vnp_HashSecret');
        let vnpUrl = config.get('vnp_Url');
        let returnUrl = config.get('vnp_ReturnUrl');
        let orderId = moment(date).format('DDHHmmss');
        let price = payment.price;
        let bankCode = req.body.bankCode;

        let locale = payment.language;
        if (locale === null || locale === '') {
            locale = 'vn';
        }
        let currCode = 'VND';
        let vnp_Params = {};
        vnp_Params['vnp_Version'] = '2.1.0';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        vnp_Params['vnp_Locale'] = locale;
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
        vnp_Params['vnp_OrderType'] = 'other';
        vnp_Params['vnp_Amount'] = price * 100;
        vnp_Params['vnp_ReturnUrl'] = returnUrl;
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_CreateDate'] = createDate;
        if (bankCode !== null && bankCode !== '') {
            vnp_Params['vnp_BankCode'] = bankCode;
        }


        vnp_Params = sortObject(vnp_Params);

        let querystring = require('qs');
        let signData = querystring.stringify(vnp_Params, { encode: false });
        let crypto = require("crypto");
        let hmac = crypto.createHmac("sha512", secretKey);
        let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
        vnp_Params['vnp_SecureHash'] = signed;
        vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

        res.json({ data: payment, url: vnpUrl });
    },
    insertPayment: async (req, res) => {
        const payment = req.body;
        console.log("insert payment: ", payment);

        let  querystring = `INSERT INTO [dbo].[Payment]
                                    ([email]
                                    ,[course_id]
                                    ,[course_name]
                                    ,[phone]
                                    ,[address]
                                    ,[name]
                                    ,[amount]
                                    ,[created_date])
                            VALUES
                                    ('${payment.email}'
                                    ,'${payment.course_id}'
                                    ,N'${payment.course_name}'
                                    ,N'${payment.phone}'
                                    ,N'${payment.address}'
                                    ,N'${payment.name}'
                                    ,'${payment.price}'
                                    ,'${payment.created_date}')`
        let data = await executeNonQuery(querystring);
        // console.log(data);
        res.json({ rowEffected: data });
    },
    getPaymentByUser: async (req, res) => {
        const payment = req.body;
        const querystring = `SELECT * FROM [Payment] WHERE [email] = '${payment.email}'`;
        const data = await executeQuery(querystring);
        res.json(data);
    },
    getAllPayments: async (req, res) => {
        const querystring = `SELECT * FROM [Payment]`;
        const data = await executeQuery(querystring);
        res.json(data);
    }
}

function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}

export default PaymentController;