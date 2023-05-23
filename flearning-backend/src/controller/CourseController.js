import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const CourseController = {
  getCourses: async (req, res) => {
    let queryString = `SELECT * FROM [Course]`;

    let courses = await executeQuery(queryString);

    const handleGetLesson = async (chapter) => {
      queryString = `SELECT * FROM [Lesson] WHERE [chapter_id] = '${chapter.chapter_id}'`;
      const lessons = await executeQuery(queryString);
      chapter.lessons = lessons;

      return chapter;
    }

    const handleGetCourse = async (course) => {
      queryString = `SELECT * FROM [Chapter] WHERE [course_id] = '${course.course_id}'`;
      const chapters = await executeQuery(queryString);

      let newChapter = [];
      for (let i = 0; i < chapters.length; i++) {
        let chapter = await handleGetLesson(chapters[i]).then((response) => {
          return response;
        });
        newChapter.push(chapter);
      }

      course.chapters = newChapter;
      return course;
    }

    let newCourses = [];

    for (let i = 0; i < courses.length; i++) {
      let course = await handleGetCourse(courses[i]).then((response) => {
        return response;
      });
      newCourses.push(course);
    }

    console.log("courses", newCourses);
    return res.json(newCourses);
  },
  getCourseById: async (req, res) => {
    const course = req.body;
    let queryString = `SELECT * FROM [Course] WHERE course_id=` + course.course_id;

    const courses = await executeQuery(queryString);

    const handleGetLesson = async (chapter) => {
      queryString = `SELECT * FROM [Lesson] WHERE [chapter_id] = '${chapter.chapter_id}'`;
      const lessons = await executeQuery(queryString);
      chapter.lessons = lessons;

      return chapter;
    }

    const handleGetCourse = async (course) => {
      queryString = `SELECT * FROM [Chapter] WHERE [course_id] = '${course.course_id}'`;
      const chapters = await executeQuery(queryString);

      let newChapter = [];
      for (let i = 0; i < chapters.length; i++) {
        let chapter = await handleGetLesson(chapters[i]).then((response) => {
          return response;
        });
        newChapter.push(chapter);
      }

      course.chapters = newChapter;
      return course;
    }

    let returnCourse = await handleGetCourse(courses[0]).then((response) => {
      return response;
    });

    console.log("course", returnCourse);
    return res.json(returnCourse);
  },
  insertCourse: async (req, res) => {
    const course = req.body;
    console.log("course is being inserted", course);
    let queryString = `INSERT INTO [dbo].[Course]
                            ([course_name]
                              ,[description]
                              ,[duration]
                              ,[price]
                              ,[status]
                              ,[created_at]
                              ,[course_avatar_url])
                        VALUES
                            (
                              '${course.course_name}',
                              '${course.description}', 
                              '${course.duration}', 
                              '${course.price}', 
                              '${course.status}', 
                              '${course.created_at}', 
                              '${course.avatar_url}')`;
    const data = await executeNonQuery(queryString);
    console.log(data);

    return res.json({ course: course, rowAffected: data });
  },
  updateCourse: async (req, res) => {
    const course = req.body;
    console.log(req.body);

    const queryString = `UPDATE [dbo].[Course]
                 SET [course_name] = '${course.course_name}'
                    ,[description] =  '${course.description}'
                    ,[course_avatar_url] = '${course.course_avatar_url}'
                    ,[duration] = '${course.duration}'
                    ,[price] = '${course.price}'
                    ,[status] = '${course.status}'
                 WHERE [course_id] =  ${course.course_id}`;
    const data = await executeNonQuery(queryString);

    return res.json({
      courseId: course.course_id,
      rowAffected: data,
    });
  },
};

export default CourseController;
