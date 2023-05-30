import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider"; 
const dbp = DBProvider();


const BlogCategoryController = {
    getBlogCategorys: async (req, res) => {
        let queryString = 'SELECT * FROM [Blog_Category]'

        const data = await executeQuery(queryString);
        // console.log(data);
        return res.json(data);
    },
    insertBlogCategory: async (req, res) => {
        const blogCategory = req.body;
        let queryString = `INSERT INTO [dbo].[Blog_Category]
                                ([name])
                        VALUES
                                ('${blogCategory.name}')`;
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ rowAffected: data });
    },
    updateBlogCategory: async (req, res) => {
        const blogCategory = req.body;
        const queryString = `UPDATE [dbo].[Blog_Category]
                                SET [name] = '${blogCategory.name}'
                            WHERE [blog_category_id] = '${blogCategory.blog_category_id}'`
        const data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ blogCategory: blogCategory, rowAffected: data });
    },
    deleteBlogCategory: async (req, res) => {
        const blogCategory = req.body;


        let queryString = `DELETE FROM [Blog_Details]
                          WHERE [blog_category_id] = '${blogCategory.blog_category_id}'`
        let data = await executeNonQuery(queryString);

        queryString = `DELETE FROM [Blog]
                          WHERE [blog_category_id] = '${blogCategory.blog_category_id}'`
        data = await executeNonQuery(queryString);

        queryString = `DELETE FROM [Blog_Category]
                            WHERE [blog_category_id] = '${blogCategory.blog_category_id}'`
        data = await executeNonQuery(queryString);
        // console.log(data);

        return res.json({ blogCategory: blogCategory, rowAffected: data });
    }
}

export default BlogCategoryController;