import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const DashboardController = {
    getData: async (req, res) => {
        // get total course
        let queryString = `SELECT COUNT(*) AS [total]  FROM [Course]`;
        let data = await executeQuery(queryString);
        const totalCourse = data[0].total;

        // get total blog
        queryString = `SELECT COUNT(*) AS [total]  FROM [Blog]`;
        data = await executeQuery(queryString);
        const totalBlog = data[0].total;

        // get total user
        queryString = `SELECT COUNT(*) AS [total] FROM [Account] WHERE [email] != 'admin'`;
        data = await executeQuery(queryString);
        const totalUser = data[0].total;

        // get total user
        queryString = `SELECT SUM(amount) AS [total] FROM [Payment]`;
        data = await executeQuery(queryString);
        const totalAmount = data[0].total;

        // get top 10 lasted order
        queryString = `SELECT TOP(10) * FROM [Payment] ORDER BY [created_date] DESC`;
        data = await executeQuery(queryString);
        const topOrders = data;

        queryString = `SELECT C.course_name, SUM(P.amount) AS total_amount
                    FROM [Payment] AS P
                    JOIN [Course] AS C ON P.course_id = C.course_id
                    GROUP BY C.course_name;`;
        data = await executeQuery(queryString);
        const totalMoneyByCourse = data;
        
        const final = {
            total_blog: totalBlog,
            total_course: totalCourse,
            total_user: totalUser,
            total_amount: totalAmount,
            top_orders: topOrders,
            total_money_by_course: totalMoneyByCourse,
        }
        return res.json(final);

    },

};

export default DashboardController;
