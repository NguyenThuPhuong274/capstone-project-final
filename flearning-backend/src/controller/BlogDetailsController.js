import DBProvider, { executeQuery, executeNonQuery } from "../dal/DBProvider";
const dbp = DBProvider();

const BlogDetailsController = {
    insertBlogDetails: async (req, res) => {
        const blogDetails = req.body;
        const queryString = `INSERT INTO [dbo].[Blog_Details]
                                    ([header]
                                    ,[decription]
                                    ,[blog_img_url]
                                    ,[blog_id])
                            VALUES
                                    ('${blogDetails.header}'
                                    ,'${blogDetails.decription}'
                                    ,'${blogDetails.blog_img_url}'
                                    ,'${blogDetails.blog_id}')`;

        const data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({ blogDetails: blogDetails, rowAffected: data });

    },
    updateBlogDetails: async (req, res) => {
        const blogDetails = req.body;
        const queryString = `UPDATE [dbo].[Blog_Details]
                                SET [header] = '${blogDetails.header}'
                                ,[decription] = '${blogDetails.decription}'
                                ,[blog_img_url] = '${blogDetails.blog_img_url}'
                                ,[blog_id] = '${blogDetails.blog_id}'
                            WHERE [blog_details_id] = '${blogDetails.blog_details_id}'`;
        const data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({ blogDetails: blogDetails, rowAffected: data });
    },
    deleteBlogDetails: async (req, res) => {
        const blogDetails = req.body;
        const queryString = `DELETE FROM [Blog_Details]
                            WHERE [blog_details_id] = '${blogDetails.blog_details_id}'`;
        const data = await executeNonQuery(queryString);
        console.log(data);

        return res.json({rowAffected: data });
    }
}

export default BlogDetailsController;