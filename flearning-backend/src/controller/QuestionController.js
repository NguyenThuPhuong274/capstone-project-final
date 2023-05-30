import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const QuestionController = {
    getQuestionByTestId: async (req, res) => {
        const test = req.body;
        const queryString = `SELECT * FROM [Question] WHERE [test_id] = ${test.id}`;
        const data = await executeQuery(queryString);
        // console.log(data);
        return res.json(data);
    },
    insertQuestion: async (req, res) => {
        const question = req.body;
        // console.log("question is being inserted", question);
        let queryString = `INSERT INTO [dbo].[Question]
                            ([description]
                              ,[answer_1]
                              ,[answer_2]
                              ,[answer_3]
                              ,[answer_4]
                              ,[correct_answer]
                              ,[explaination]
                              ,[test_id])
                        VALUES
                            (N'${question.description}'
                              ,N'${question.answer_1}'
                              ,N'${question.answer_2}'
                              ,N'${question.answer_3}'
                              ,N'${question.answer_4}' 
                              ,'${question.correct_answer}' 
                              ,N'${question.explaination}' 
                              ,'${question.test_id}')`;
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ question: question, rowAffected: data });
    },
    updateQuestion: async (req, res) => {
        const question = req.body;
        // console.log(req.body);

        const queryString = `UPDATE [dbo].[Question]
                 SET [description] = N'${question.description}'
                    ,[answer_1] = N'${question.answer_1}'
                    ,[answer_2] = N'${question.answer_2}'
                    ,[answer_3] = N'${question.answer_3}'
                    ,[answer_4] = N'${question.answer_4}'
                    ,[correct_answer] = '${question.correct_answer}'
                    ,[explaination] = N'${question.explaination}'
                    ,[test_id] = '${question.test_id}'
                 WHERE [question_id] =  ${question.question_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            question_id: question.question_id,
            rowAffected: data,
        })
    },
    deleteQuestion: async (req, res) => {
        const question = req.body;
        // console.log(req.body);

        const queryString = `DELETE FROM [Question] WHERE [question_id] =  ${question.question_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            rowAffected: data,
        })
    }
};

export default QuestionController;
