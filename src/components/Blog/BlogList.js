
import SingleBlog from "../../components/Blog/SingleBlog";
import Pagination from "../Pagination";
import {
    Button, Stack, SvgIcon
} from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';
import EyeIcon from '@heroicons/react/24/solid/EyeIcon';
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppInput from "../AppInput/AppInput";
import Carousel from 'react-material-ui-carousel'

const BlogList = ({ blogData, enableActionAdd }) => {
    const [data, setBlogData] = React.useState(blogData);
    const navigate = useNavigate();
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [searchTerm, setSearchTearm] = React.useState("");
    const handleAction = (id) => {
        navigate("/");
    }

    const handleChangeValue = (value) => {
        setSearchTearm(value);
    }

    const [currentPage, onPageChange] = React.useState(1);

    const [totalPage, setTotalPage] = React.useState(0);


    React.useEffect(() => {
        let totalPage = Math.floor(data.length / 3);
        if (data.length % 3 != 0) totalPage += 1;
        setTotalPage(totalPage);
    }, [data])

    React.useEffect(() => {
        setBlogData(blogData?.filter((blog) => blog?.title.includes(searchTerm)));
    }, [searchTerm]);


    return <>
        <div className="p-2 pt-3 pb-0">
            <Stack direction="row" justifyContent="space-between">
                <div className="w-96">
                    <AppInput placeholder={"Tìm kiếm tin tức"} title={""} handleChangeValue={handleChangeValue} value={searchTerm} />
                </div>
                <div className={`${enableActionAdd == true? "block" : "hidden"}`} >
                    <Button
                        onClick={() => setIsOpenModal(true)}
                        className='bg-primary'
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <PlusIcon />
                            </SvgIcon>
                        )}
                        variant="contained"
                    >
                        Thêm mới tin tức
                    </Button>
                </div>
            </Stack>
        </div>
        <section className="pt-[10px] pb-[10px]">
            <div className="container p-0 pt-2">
                <div className="flex flex-wrap">
                    <Carousel
                        indicators={totalPage > 1 ? true : false}
                        index={currentPage - 1}
                        swipe
                        autoPlay={false}
                        onChange={(index) => onPageChange(index + 1)}
                        navButtonsAlwaysVisible={totalPage > 1 ? true : false}
                        navButtonsAlwaysInvisible={totalPage > 1 ? false : true}
                        animation="slide"
                        className="w-full" >

                        {data.map((blog) => (
                            <div
                                key={blog.id}
                                className="w-full px-2 md:w-2/3 lg:w-1/2 xl:w-1/3"
                            >
                                <SingleBlog
                                    actionTitle={`${enableActionAdd == true? "Chỉnh sửa" : "Xem thông tin"}`}
                                    blog={blog}
                                    icon={enableActionAdd == true ? <PencilIcon /> : <EyeIcon />}
                                    handleAction={handleAction}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div
                    className="wow fadeInUp flex flex-wrap"
                    data-wow-delay=".15s"
                >
                    <Pagination totalPages={totalPage} currentPage={currentPage} onPageChange={onPageChange} />
                </div>
            </div>
        </section></>
}

export default BlogList;