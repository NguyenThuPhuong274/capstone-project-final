import AppCheckBox from "../../../components/AppInput/AppCheckBox";
import AppInput from "../../../components/AppInput/AppInput";
import CourseChapter from "../../../components/Course/CourseChapter";
import CourseChapterModal from "../../../components/Course/CourseChapterModal";
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';

import { Button, Stack, SvgIcon } from "@mui/material";
import React from "react";

const AdminCourseDetailsPage = () => {
    const [values, setValues] = React.useState({
        title: '',
        level: '',
        description: '',
        duration: 0,
        price: 0,
        status: false,
    });

    const [isAddChapter, setIsAddChapter] = React.useState(false);
    const [isAddLesson, setIsAddLesson] = React.useState(false);

    const handleChangeValue = (key, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [key]: value
        }));
    };


    const handleCloseAddModal = () => {
        setIsAddChapter(false);
    }
    return <div className="ml-72 mr-4 flex flex-row justify-between  mt-[40px] ">
        <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} className="relative ml-2 mr-4 p-4 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <Stack direction={"column"} spacing={2}>
                <div >
                    <Button variant="contained" className='bg-primary' onClick={() => setIsAddChapter(true)}>
                    <SvgIcon sx={{mr: 1}}>
                            <PlusIcon />
                        </SvgIcon> Thêm mới chương
                    </Button>
                </div>
                <CourseChapter />
            </Stack>

            <CourseChapterModal isOpenModal={isAddChapter} handleCloseModal={handleCloseAddModal} />
        </div>
        <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} className="relative  w-[500px] h-[620px] flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt="img-blur-shadow"
                />
            </div>
            <div className="p-4">
                <Stack spacing={2} direction={"column"}>
                    <AppInput value={values} title={"title"} handleChangeValue={handleChangeValue} placeholder={"Tên khóa học"} />
                    <AppInput value={values} title={"duration"} handleChangeValue={handleChangeValue} placeholder={"Thời gian học (tháng)"} />
                    <AppInput value={values} title={"price"} handleChangeValue={handleChangeValue} placeholder={"Giá (vnd)"} />
                    <AppInput value={values} title={"desciption"} handleChangeValue={handleChangeValue} placeholder={"Mô tả"} />
                    <AppCheckBox />

                </Stack>

            </div>
            <div className="p-6 pt-0">
                <Button variant="contained" className='bg-primary'>
                   <SvgIcon className="mr-2">
                    <HandThumbUpIcon />
                   </SvgIcon> Lưu
                </Button>
            </div>
        </div>
    </div>
}

export default AdminCourseDetailsPage;