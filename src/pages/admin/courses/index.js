import { useState } from 'react';
import { subDays, subHours } from 'date-fns';
import {
  Box, Button, Container, Stack, Dialog, DialogTitle, Grid
  , DialogContent, Card, CardContent, Divider, SvgIcon
} from '@mui/material';
import { CoursesTable } from '../../../sections/course/courses-table';
import { CourseTopBar } from '../../../sections/course/course-topbar';
import { CourseProfileDetails } from "../../../components/Course/CourseProfileDetails";
import Pagination from "../../../components/Pagination";
import React from "react";
import FileUploader from '../../../components/FileUploader';
import CourseImageDefault from "../../../assets/images/course/course-default.png";
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';

const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    title: 'Khóa học N1',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 1,
    status: true,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    title: 'Khóa học N2',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 2,
    duration: 6,
    status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    title: 'Khóa học N3',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 3,
    duration: 6, status: false,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e86809283e28b96d2d38537',
    title: 'Khóa học N4',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 4,
    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    title: 'Khóa học N4 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 5,
    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    title: 'Khóa học N2 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    duration: 6, status: true,

    level: 2,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    title: 'Khóa học N1 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    duration: 6, status: true,

    level: 2,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    title: 'Khóa học N6 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 3,
    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e8877da9a65442b11551975',
    title: 'Khóa học N6',
    description: 'Mô tả khóa học ',
    lessons: 12,
    level: 4,

    duration: 6, status: true,

    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    title: 'Khóa học N3 nâng cao',
    description: 'Mô tả khóa học ',
    lessons: 12,
    duration: 6, status: true,

    level: 4,
    price: 1230000,
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  }
];


const AdminCoursesPage = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [courses, setCourses] = React.useState(data);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, onPageChange] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);

  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(startIndex + rowsPerPage);
  const [searchTerm, setSearchTerm] = React.useState("");

  const [currentFile, setCurrentFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [values, setValues] = useState({
    title: '',
    description: '',
    duration: 0,
    price: 0,
    status: false,
  });

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  React.useEffect(() => {
    let startIndex = (currentPage - 1) * rowsPerPage;
    let endIndex = startIndex + rowsPerPage;
    if (endIndex >= courses.length) endIndex = courses.length;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }, [currentPage]);


  React.useEffect(() => {
    let totalPage = Math.floor(courses.length / rowsPerPage);
    if (courses.length % rowsPerPage !== 0) totalPage += 1;
    setTotalPage(totalPage);
    onPageChange(1);
  }, [courses])

  React.useEffect(() => {
    setCourses(data?.filter((course) => course?.title.includes(searchTerm)));
  }, [searchTerm]);

  // React.useEffect(() => {
  //   alert(currentFile?.url);
  // }, [currentFile]);


  const handleChangeSearchTerm = (title, value) => {
    setSearchTerm(value)
  }



  const handleChangeValue = (key, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [key]: value
    }));
  };


  return (
    <>

      <Box
        className='ml-72'
        component="main"
        sx={{
          flexGrow: 1,
          py: 0
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              className='w-full'
              direction="row"
              justifyContent="space-between"
              spacing={1}
            >



            </Stack>
            <CourseTopBar values={{searchTerm: searchTerm}} handleChangeValue={handleChangeSearchTerm} setIsOpenModal={setIsOpenModal} />

            {courses.length > 0 ? <>
              <CoursesTable
                count={data.length}
                items={courses.slice(startIndex, endIndex)}
              /></> :

              <Card className='bg-white'>
                <CardContent>
                  Không tìm thấy khóa học
                </CardContent>
              </Card>
            }
          </Stack>
          <Card className={`${courses.length > 0 ? "block" : "hidden"}`} sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", mt: 2 }}>
            <CardContent className='p-0' >
              <Stack direction={"row"} className='flex items-center justify-between' spacing={2}>
                <div className='h-[25px]'>
                  Hiện thị từ <strong>{startIndex + 1}</strong> đến <strong>{endIndex > courses.length ? courses.length : endIndex}</strong> trong tổng số <strong>{courses.length}</strong> khóa học
                </div>
                <div className='w-[300px] h-[25px]'>
                  <Pagination totalPages={totalPage} currentPage={currentPage} onPageChange={onPageChange} />
                </div>
              </Stack>
            </CardContent>
          </Card>
        </Container>

      </Box>



      <Dialog maxWidth open={isOpenModal} onClose={handleCloseModal}>
        <DialogTitle >THÊM MỚI KHÓA HỌC</DialogTitle>
        <DialogContent sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }} dividers>
          <Container className='mt-10' maxWidth="lg" sx={{ height: 400 }}>
            <Stack spacing={3}>

              <div>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} className="relative  flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <div className="relative mx-4  -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img
                          src={previewUrl == null ? CourseImageDefault : previewUrl}
                          alt="img-blur-shadow"

                        />
                      </div>
                      <Divider className='h-4' />
                      <FileUploader

                        setCurrentFile={setCurrentFile}
                        firebaseFolderName={"course/images"} setPreviewUrl={setPreviewUrl} />
                    </div>

                  </Grid>
                  <Grid
                    xs={12}
                    md={6}
                    lg={8}
                  >
                    <CourseProfileDetails handleChangeValue={handleChangeValue} values={values} />
                  </Grid>
                </Grid>
              </div>
              <div className='w-full flex justify-end'>
                <div className='w-[320px] flex justify-between'>
                  <Button color='error' variant="contained" className=' w-[150px]' onClick={handleCloseModal}>

                    <SvgIcon className='mr-2'>
                      <XMarkIcon />
                    </SvgIcon> Hủy
                  </Button>
                  <Button color='primary' variant="contained" className='w-[150px] ml-3'>
                    <SvgIcon className='mr-2'>
                      <HandThumbUpIcon />
                    </SvgIcon> Lưu
                  </Button>
                </div>
              </div>
            </Stack>
          </Container>
        </DialogContent>

      </Dialog>
    </>
  );
};


export default AdminCoursesPage;
