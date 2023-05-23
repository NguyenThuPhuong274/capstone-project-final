import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();


const BlogController = {
    getBlogs: async (req, res) => {
        let queryString = 'SELECT * FROM [Blog]'

        const data = await executeNonQuery(queryString);

        const handleGetBlogDetails = async (blog) => {
            queryString = `SELECT * FROM [Blog_Details] WHERE [blog_id] = '${blog.blog_id}'`;
            const blogDetails = await executeQuery(queryString);
            blog.blog_details = blogDetails;

            return blog;
        }

        let blogs = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i] !== 0) {
                let blog = await handleGetBlogDetails(data[i]).then((response) => {
                    console.log(" data.length: ", data.length);
                    return response;
                });
                blogs.push(blog);
            }
        }

        console.log(blogs);

        return res.json(blogs);
    },
    insertBlog: async (req, res) => {
        const blog = req.body;
        console.log("blog is being inserted", blog);
        let queryString = `INSERT INTO [dbo].[Blog]
                                ([blog_avatar_url]
                                ,[blog_category_id]
                                ,[created_date]
                                ,[blog_name]
                                ,[blog_description]
                                ,[status])
                        VALUES
                                ('${blog.blog_avatar_url}', 
                                    '${blog.blog_category_id}', 
                                    '${blog.created_date}', 
                                    '${blog.blog_name}', 
                                    '${blog.blog_description}', 
                                    '${blog.status}')`;
        const data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({ blog: blog, rowAffected: data });
    },
    updateBlog: async (req, res) => {
        const blog = req.body;
        const queryString = `UPDATE [dbo].[Blog]
                                SET [blog_avatar_url] = '${blog.blog_avatar_url}'
                                ,[blog_category_id] = '${blog.blog_category_id}'
                                ,[created_date] = '${blog.created_date}'
                                ,[blog_name] = '${blog.blog_name}'
                                ,[blog_description] = '${blog.blog_description}'
                                ,[status] =  '${blog.status}'
                            WHERE [blog_id] = '${blog.blog_id}'`
        const data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({ blog: blog, rowAffected: data });
    },
    deleteBlog: async (req, res) => {
        const blog = req.body;

        let queryString = `DELETE FROM [Blog_Details]
                          WHERE [blog_id] = '${blog.blog_id}'`
        let data = await executeNonQuery(queryString);

        queryString = `DELETE FROM [Blog]
                            WHERE [blog_id] = '${blog.blog_id}'`
        data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({ blog: blog, rowAffected: data });
    }
}

export default BlogController;