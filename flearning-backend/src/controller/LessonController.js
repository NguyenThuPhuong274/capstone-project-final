import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const LessonController = {
  insertLesson: async (req, res) => {
    const lesson = req.body;
    console.log("lesson is being inserted", lesson);
    let queryString = `INSERT INTO [dbo].[Lesson]
                            ([lesson_name]
                              ,[description]
                              ,[video_url]
                              ,[material_url]
                              ,[chapter_id])
                        VALUES
                            (
                              N'${lesson.lesson_name}',
                              N'${lesson.description}', 
                              N'${lesson.video_url}', 
                              N'${lesson.material_url}', 
                              '${lesson.chapter_id}')`;
    const data = await executeNonQuery(queryString);
    console.log(data);

    return res.json({ lesson: lesson, rowAffected: data });
  },
  updateLesson: async (req, res) => {
    const lesson = req.body;
    console.log(req.body);

    queryString = `UPDATE [dbo].[Lesson]
                 SET [lesson_name] =  N'${lesson.lesson_name}'
                    ,[description] =   N'${lesson.description}'
                    ,[video_url] =  N'${lesson.video_url}'
                    ,[material_url] =  N'${lesson.material_url}'
                 WHERE [lesson_id] =  ${lesson.lesson_id}`;
    const data = await executeNonQuery(queryString);

    return res.json({
      lesson_id: lesson.lesson_id,
      rowAffected: data,
    });
  },
  deleteLesson: async (req, res) => {
    const lesson = req.body;
    console.log(req.body);

    let queryString = `DELETE FROM [Lesson_Done] WHERE [lesson_id] = '${lesson.lesson_id}'`;
    let data = await executeNonQuery(queryString);

    queryString = `DELETE FROM [Lesson] WHERE [lesson_id] = '${lesson.lesson_id}'`;
    data = await executeNonQuery(queryString);

    console.log("rowAffected: ", data);
    return res.json({
      rowAffected: data,
    })
  },
  insertLessonDone: async (req, res) => {
    const lesson = req.body;
    console.log(req.body);

    let queryString = `INSERT INTO [dbo].[Lesson_Done]
                          ([lesson_id]
                          ,[email]
                          ,[chapter_id]
                          ,[course_id])
                      VALUES
                          ('${lesson.lesson_id}'
                          ,'${lesson.email}'
                          ,'${lesson.chapter_id}'
                          ,'${lesson.course_id}')`;
    let data = await executeNonQuery(queryString);


    return res.json({
      rowAffected: data,
    })
  }
};

export default LessonController;
