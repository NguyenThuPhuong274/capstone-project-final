import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";

const FeedbackController = {
    getFeedbacks: async (req, res) => {
        const queryString = "SELECT * FROM [Feedback]";
        const data = await executeQuery(queryString);
        // console.log(data);
        return res.json(data);
    },
    getFeedbackById: async (req, res) => {
        const feedback = req.body;
        const queryString = `SELECT * FROM [Feedback] WHERE [course_id] = '${feedback.course_id}' AND [email] = '${feedback.email}'`;
        const data = await executeQuery(queryString);
        // console.log("feedback: ", data[0]);
        return res.json(data[0]);
    },
    insertFeedback: async (req, res) => {
        const feedback = req.body;
        console.log("feedback is being inserted", feedback);
        let queryString = `INSERT INTO [dbo].[Feedback]
                            ([message]
                              ,[email]
                              ,[name]
                              ,[course_name]
                              ,[course_id]
                              ,[user_avatar_url]
                              ,[star])
                        VALUES
                            (
                              N'${feedback.message}',
                               '${feedback.email}', 
                              N'${feedback.name}', 
                              N'${feedback.course_name}', 
                              '${feedback.course_id}', 
                              '${feedback.user_avatar_url}', 
                               '${feedback.star}')`;
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ feedback: feedback, rowAffected: data });
    },
    updateFeedback: async (req, res) => {
        const feedback = req.body;
        // console.log(req.body);

        const queryString = `UPDATE [dbo].[Feedback]
                 SET [message] =  N'${feedback.message}'
                    ,[star] =  '${feedback.star}'
                 WHERE [feedback_id] =  ${feedback.feedback_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            feedback_id: feedback.feedback_id,
            rowAffected: data,
        })
    },
};

export default FeedbackController;
