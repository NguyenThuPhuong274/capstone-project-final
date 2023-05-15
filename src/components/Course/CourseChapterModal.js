import { Dialog, DialogTitle, DialogContent, Container, Button, Stack, SvgIcon } from "@mui/material";
import AppInput from "../AppInput/AppInput";
import React from "react";
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';

const CourseChapterModal = ({
    isOpenModal,
    handleCloseModal
}) => {


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
        <Dialog open={isOpenModal} >
            <DialogTitle sx={{ p: 2 }} >THÊM MỚI CHƯƠNG</DialogTitle>
            <DialogContent sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', p: 0, pb: 2, width: 600 }} dividers>
                <Container sx={{ p: 0 }} className='mt-5' maxWidth="lg">
                    <Stack direction={"column"} spacing={2}>
                        <AppInput
                            value={values}
                            title={'chapterTitle'}
                            handleChangeValue={handleChangeValue}
                            placeholder={"Nhập tên chương"} />
                        <AppInput
                            value={values}
                            title={'description'}
                            handleChangeValue={handleChangeValue}
                            placeholder={"Nhập mô tả"} />
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
                </Container>
            </DialogContent>

        </Dialog>
    </>
}

export default CourseChapterModal;