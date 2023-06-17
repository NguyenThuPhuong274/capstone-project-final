import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();


const handleGetQuestion = async (test) => {
  const queryString = `SELECT * FROM [Question] WHERE [test_id] = '${test.test_id}'`;
  const questions = await executeQuery(queryString);
  test.questions = questions;

  return test;
}

const handleGetTest = async (chapter) => {
  const queryString = `SELECT * FROM [Test] WHERE [chapter_id] = '${chapter.chapter_id}'`;
  const tests = await executeQuery(queryString);

  let newTests = [];
  for (let i = 0; i < tests.length; i++) {
    let test = await handleGetQuestion(tests[i]).then((response) => {
      return response;
    });

    newTests.push(test);
  }

  chapter.tests = newTests;

  return chapter;
}

const handleGetLesson = async (chapter) => {
  const queryString = `SELECT * FROM [Lesson] WHERE [chapter_id] = '${chapter.chapter_id}'`;
  const lessons = await executeQuery(queryString);
  chapter.lessons = lessons;

  return chapter;
}

const handleGetCourse = async (course) => {
  const queryString = `SELECT * FROM [Chapter] WHERE [course_id] = '${course.course_id}'`;
  const chapters = await executeQuery(queryString);

  let newChapter = [];
  for (let i = 0; i < chapters.length; i++) {
    let chapter = await handleGetLesson(chapters[i]).then((response) => {
      return response;
    });

    chapter = await handleGetTest(chapter).then((response) => {
      return response;
    });
    newChapter.push(chapter);
  }

  course.chapters = newChapter;
  return course;
}

const CourseController = {
  getCourses: async (req, res) => {
    let queryString = `SELECT * FROM [Course]`;

    let courses = await executeQuery(queryString);
    let newCourses = [];

    for (let i = 0; i < courses.length; i++) {
      let course = await handleGetCourse(courses[i]).then((response) => {
        return response;
      });
      newCourses.push(course);
    }

    // console.log("courses", newCourses);
    return res.json(newCourses);
  },
  // getCourseCourseName: async (req, res) => {
  //   const course = req.body;
  //   let queryString = `SELECT * FROM [Course] WHERE course_name='${course.course_name}'`;

  //   const courses = await executeQuery(queryString);

  //   let returnCourse = await handleGetCourse(courses[0]).then((response) => {
  //     return response;
  //   });

  //   // console.log("course", returnCourse);
  //   return res.json(returnCourse);
  // },
  getUserCourses: async (req, res) => {
    const user = req.body;
    console.log("user: ", user);

    let queryString = `SELECT * FROM [Course] WHERE [course_id] in (SELECT [course_id] FROM [User_Course] WHERE [email] = '${user.email}') OR [price] = 0`;

    let courses = await executeQuery(queryString);
    // console.log("courses", courses);
    return res.json(courses);
  },
  getCourseById: async (req, res) => {
    const course = req.body;
    let queryString = `SELECT * FROM [Course] WHERE course_id=` + course.course_id;

    const courses = await executeQuery(queryString);

    let returnCourse = await handleGetCourse(courses[0]).then((response) => {
      return response;
    });

    // console.log("course", returnCourse);
    return res.json(returnCourse);
  },
  insertCourse: async (req, res) => {
    const course = req.body;
    // console.log("course is being inserted", course);
    const price = parseFloat(course.price.replace(/\./g, "").replace("₫", ""));
    // console.log(price);
    const duration = parseInt(course.duration);
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
                              N'${course.course_name}',
                              N'${course.description}', 
                              '${duration}', 
                              '${price}', 
                              '${course.status}', 
                              '${course.created_at}', 
                              '${course.avatar_url}')`;
    const data = await executeNonQuery(queryString);
    // console.log(data);

    return res.json({ course: course, rowAffected: data });
  },
  insertUserCourse: async (req, res) => {
    const userCourse = req.body;
    console.log(userCourse);
    const queryString = `INSERT INTO [dbo].[User_Course]
                            ([course_id]
                              ,[email]
                              ,[enrolled_date])
                        VALUES
                            ('${userCourse.course_id}',
                              '${userCourse.email}', 
                              '${userCourse.enrolled_date}')`;
    const data = await executeNonQuery(queryString);
    // console.log(data);

    return res.json({ rowAffected: data });
  },
  updateCourse: async (req, res) => {
    const course = req.body;
    // console.log(req.body);
    const price = parseFloat(course.price.replace(/\./g, "").replace("₫", ""));
    const duration = parseInt(course.duration);
    const queryString = `UPDATE [dbo].[Course]
                 SET [course_name] = N'${course.course_name}'
                    ,[description] =  N'${course.description}'
                    ,[course_avatar_url] = '${course.course_avatar_url}'
                    ,[duration] = '${duration}'
                    ,[price] = '${price}'
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
