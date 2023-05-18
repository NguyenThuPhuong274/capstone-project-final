import { Dialog, DialogTitle, DialogContent, Container, Button, Stack, SvgIcon, Divider, Card, CardContent } from "@mui/material";
import AppInput from "../AppInput/AppInput";
import React from "react";
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';
import FileUploader from "../FileUploader";
import VideoDefault from "../../assets/images/video/video-default.png";

const CourseLessonModal = ({
    isOpenModal,
    handleCloseModal
}) => {

    const [videoUrl, setVideoUrl] = React.useState('');
    const [currentFile, setCurrentFile] = React.useState(null);

    const [values, setValues] = React.useState({
        chapterTitle: '',
        description: '',
    });

    const handleChangeValue = (key, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [key]: value
        }));
    };



    return <>
        <Dialog open={isOpenModal} maxWidth="md" fullWidth >
            <DialogTitle sx={{ p: 2 }} >THÊM MỚI BÀI HỌC</DialogTitle>
            <DialogContent sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', p: 3 }} dividers>
                <Stack direction={"row"} spacing={3} >
                    <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} className="relative  flex w-[1000px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4  -mt-2 h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            {currentFile !== null ? <img
                                src={VideoDefault}
                                alt="img-blur-shadow"

                            /> : <video controls>
                                <source src={currentFile?.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>}
                        </div>
                        <Divider className='h-4' />
                        <FileUploader

                            setCurrentFile={setCurrentFile}
                            firebaseFolderName={"course/videos"} setPreviewUrl={setVideoUrl} />
                    </div>
                    <Card className="w-[1200px]" sx={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} >
                        <CardContent>
                        <Stack direction={"column"} spacing={2}>
                            <AppInput
                                value={values}
                                title={'chapterTitle'}
                                handleChangeValue={handleChangeValue}
                                placeholder={"Nhập tên chương"} />
                            <AppInput
                                value={values}
                                title={'chapterTitle'}
                                handleChangeValue={handleChangeValue}
                                placeholder={"Nhập link tài liệu"} />
                            <AppInput
                            height={"h-[180px]"}
                                value={values}
                                title={'description'}
                                handleChangeValue={handleChangeValue}
                                placeholder={"Nhập mô tả"} />
                        </Stack>
                        </CardContent>

                    </Card>

                </Stack>
                <div className='flex justify-end mt-5'>
                    <div className="flex justify-between w-[215px]">
                        <Button className="w-[100px]" variant="contained" color="error" onClick={handleCloseModal}>
                            <SvgIcon className="mr-2">
                                <XMarkIcon />
                            </SvgIcon>  Hủy
                        </Button>
                        <Button variant="contained" color="primary" className=' w-[100px]'>
                            <SvgIcon className="mr-2">
                                <HandThumbUpIcon />
                            </SvgIcon>  Lưu
                        </Button>
                    </div>
                </div>
            </DialogContent>

        </Dialog>
    </>
}

export default CourseLessonModal;