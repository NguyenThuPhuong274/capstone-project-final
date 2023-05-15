import { useCallback, useMemo, useState } from 'react';
import { subDays, subHours } from 'date-fns';
import {
  Box, Button, Container, Stack, Dialog, DialogTitle, Grid
  , DialogContent, Card, CardContent
} from '@mui/material';
import { useSelection } from '../../../hooks/use-selection';
import { applyPagination } from '../../../utils/apply-pagination';
import { CoursesTable } from '../../../sections/course/courses-table';
import { CourseTopBar } from '../../../sections/course/course-topbar';
import { CourseAvatar } from "../../../components/Course/CourseAvatar";
import { CourseProfileDetails } from "../../../components/Course/CourseProfileDetails";
import Pagination from "../../../components/Pagination";
import React from "react";

const now = new Date();



const AdminBlog = ({data}) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [courses, setCourses] = React.useState(data);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, onPageChange] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);

  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(startIndex + rowsPerPage);
  const [values, setValues] = React.useState({ searchTerm: "" });

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
    if (courses.length % rowsPerPage != 0) totalPage += 1;
    setTotalPage(totalPage);
    onPageChange(1);
  }, [courses])

  React.useEffect(() => {

    setCourses(data?.filter((course) => course?.title.includes(values.searchTerm)));
  }, [values.searchTerm]);

  const handleChangeValue = (title, value) => {
    setValues({
      [title]: value,
      ...value
    });
  }

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
            {courses.length > 0 ? <>
              <CoursesTable
                count={data.length}
                items={courses.slice(startIndex, endIndex)}
              /></> : 
              
              <Card className='bg-white'>
                <CardContent>
                  Không tìm thấy tin tức
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
                <Pagination  totalPages={totalPage} currentPage={currentPage} onPageChange={onPageChange} />
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
                    <CourseAvatar />
                  </Grid>
                  <Grid
                    xs={12}
                    md={6}
                    lg={8}
                  >
                    <CourseProfileDetails />
                  </Grid>
                </Grid>
              </div>
              <div className='w-full flex justify-end'>
                <div className='w-[320px] flex justify-between'>
                  <Button color='error' variant="contained" className=' w-[150px]' onClick={handleCloseModal}>
                    Hủy
                  </Button>
                  <Button color='primary' variant="contained" className='w-[150px] ml-3'>
                    Lưu
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


export default AdminBlog;
