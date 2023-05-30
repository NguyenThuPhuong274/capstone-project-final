import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const TestController = {
    getTests: async (req, res) => {
        let queryString = `SELECT t.[test_id]
                        ,t.[test_name]
                        ,t.[chapter_id]
                        ,t.[course_id]
                        ,t.[duration]
                        ,t.[description]
                        ,c.[course_name]
                        ,ch.[chapter_name]
                    FROM [Test] t
                    JOIN [Course] c ON t.course_id = c.course_id
                    JOIN [Chapter] ch ON ch.chapter_id = t.chapter_id
                    WHERE t.[test_id] IN (SELECT [test_id] FROM [Test]);
         `;
        const tests = await executeQuery(queryString);
        // console.log(tests);
        const handleGetQuestions = async (test) => {
            queryString = `SELECT * FROM [Question] WHERE [test_id] = '${test.test_id}'`;
            const questions = await executeQuery(queryString);

            test.questions = questions;
            return test;
        }

        let newTests = [];

        for (let i = 0; i < tests.length; i++) {
            let test = await handleGetQuestions(tests[i]).then((response) => {
                return response;
            });
            newTests.push(test);
        }

        // console.log(newTests);
        return res.json(newTests);
    },
    getTestById: async (req, res) => {
        const test = req.body;
        let queryString = `SELECT t.[test_id]
                        ,t.[test_name]
                        ,t.[chapter_id]
                        ,t.[course_id]
                        ,t.[duration]
                        ,t.[description]
                        ,c.[course_name]
                        ,ch.[chapter_name]
                    FROM [Test] t
                    JOIN [Course] c ON t.course_id = c.course_id
                    JOIN [Chapter] ch ON ch.chapter_id = t.chapter_id
                    WHERE t.[test_id] = '${test.test_id}';
         `;
        const tests = await executeQuery(queryString);
        const handleGetQuestions = async (test) => {
            queryString = `SELECT * FROM [Question] WHERE [test_id] = '${test.test_id}'`;
            const questions = await executeQuery(queryString);

            test.questions = questions;
            return test;
        }

        let newTests = [];

        for (let i = 0; i < tests.length; i++) {
            let test = await handleGetQuestions(tests[i]).then((response) => {
                return response;
            });
            newTests.push(test);
        }

        // console.log(newTests[0]);
        return res.json(newTests[0]);
    },
    insertTest: async (req, res) => {
        const test = req.body;
        // console.log("test is being inserted", test);
        let queryString = `INSERT INTO [dbo].[Test]
                            ([test_name]
                              ,[chapter_id]
                              ,[course_id]
                              ,[description]
                              ,[duration])
                        VALUES
                            (N'${test.test_name}'
                              ,'${test.chapter_id}'
                              ,'${test.course_id}'
                              ,N'${test.description}'
                              ,'${test.duration}'  )`;
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ test: test, rowAffected: data });
    },
    insertTestDone: async (req, res) => {
        const test = req.body;
        // console.log("test is being inserted", test);
        let queryString = `INSERT INTO [dbo].[Test_Done]
                            ([test_id]
                              ,[email]
                              ,[course_id])
                        VALUES
                            ('${test.test_id}'
                              ,'${test.email}'
                              ,'${test.course_id}')`;
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ test: test, rowAffected: data });
    },
    updateTest: async (req, res) => {
        const test = req.body;
        // console.log(req.body);

        const queryString = `UPDATE [dbo].[Test]
                 SET [test_name] = N'${test.test_name}'
                    ,[chapter_id] = '${test.chapter_id}'
                    ,[course_id] = '${test.course_id}'
                    ,[description] = N'${test.description}'
                    ,[duration] = '${test.duration}'
                 WHERE [test_id] =  ${test.test_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            test_id: test.test_id,
            rowAffected: data,
        })
    },
    deleteTest: async (req, res) => {
        const test = req.body;
        // console.log(req.body);

        let queryString = `DELETE FROM [Question] WHERE [test_id] =  ${test.test_id}`;

        let data = executeNonQuery(queryString);

        queryString = `DELETE FROM [Test] WHERE [test_id] =  ${test.test_id}`;
        data = await executeNonQuery(queryString);

        return res.json({
            rowAffected: data,
        })
    },
    getTestsDone: async (req, res) => {
        const user = req.body;

        // console.log(user);
        const queryString = `SELECT [test_id] FROM [dbo].[Test_Done]
                                    WHERE [email] = '${user.email}'
                                    AND [course_id] = '${user.course_id}'`;
        const data = await executeQuery(queryString);
        let ids = [];
        for (let i = 0; i < data.length; i++) {
            ids.push(data[i].test_id);
        }
        // console.log("test id: ", ids);

        return res.json(ids);
    }
};

export default TestController;
