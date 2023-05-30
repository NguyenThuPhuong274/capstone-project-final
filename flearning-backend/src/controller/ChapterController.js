import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const LessonController = {

    insertChapter: async (req, res) => {
        const chapter = req.body;
        // console.log("chapter is being inserted", chapter);
        let queryString = `INSERT INTO [dbo].[Chapter]
                            ([chapter_name]
                              ,[description]
                              ,[course_id])
                        VALUES
                            (
                              N'${chapter.chapter_name}',
                              N'${chapter.description}', 
                              '${chapter.course_id}')`;
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ chapter: chapter, rowAffected: data });
    },
    updateChapter: async (req, res) => {
        const chapter = req.body;
        // console.log(req.body);

        const queryString = `UPDATE [dbo].[Chapter]
                 SET [chapter_name] =  N'${chapter.chapter_name}'
                    ,[description] =   N'${chapter.description}'
                 WHERE [chapter_id] =  ${chapter.chapter_id}`;
        const data = await executeNonQuery(queryString);

        return res.json({
            chapter_id: chapter.chapter_id,
            rowAffected: data,
        })
    },
    deleteChapter: async (req, res) => {
        const chapter = req.body;
        // console.log(req.body);

        let queryString = `DELETE FROM [Lesson_Done] WHERE [chapter_id] = '${chapter.chapter_id}'`;
        let data = await executeNonQuery(queryString);

        queryString = `DELETE FROM [Lesson] WHERE [chapter_id] = '${chapter.chapter_id}'`;
        data = await executeNonQuery(queryString);

        queryString = `SELECT * FROM [Test] WHERE [chapter_id] = '${chapter.chapter_id}'`;
        const test = await executeQuery(queryString);

        if (test.length > 0) {
            queryString = `DELETE FROM [Question] WHERE [test_id] = '${test[0].test_id}'`;
            data = await executeNonQuery(queryString);
        }

        queryString = `DELETE FROM [Test] WHERE [chapter_id] = '${chapter.chapter_id}'`;
        data = await executeNonQuery(queryString);

        queryString = `DELETE FROM [Chapter] WHERE [chapter_id] = '${chapter.chapter_id}'`;
        data = await executeNonQuery(queryString);

        return res.json({
            rowAffected: data,
        })
    }
};

export default LessonController;
