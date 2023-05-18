import { format } from 'date-fns';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';

import {
  Avatar,
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  SvgIcon,
  Chip,
  Typography
} from '@mui/material';
import { Scrollbar } from '../../components/ScrollBar';
import { getInitials } from '../../utils/get-initials';
import { useNavigate } from 'react-router-dom';
import {ROUTE_CONSTANTS} from "../../constants/route.constants";
export const CoursesTable = (props) => {

  const navigate = useNavigate();
  const {
    items = [],
  } = props;

const handleEditCourse = (id) => {
  navigate(ROUTE_CONSTANTS.ADMIN_COURSE_DETAILS);
}


  return (<>
    <Card sx={{ height: 450, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}   >
      <Scrollbar>
        <Box sx={{ minWidth: 800, maxHeight: 450 }}>
          <Table stickyHeader >
            <TableHead>
              <TableRow>

                <TableCell>
                  Tên
                </TableCell>
                <TableCell>
                  Cấp độ
                </TableCell>
                <TableCell>
                  Thời gian
                </TableCell>
                <TableCell>
                  Giá
                </TableCell>
                <TableCell>
                  Số bài học
                </TableCell>
                <TableCell>
                  Ngày tạo
                </TableCell>
                <TableCell>
                  Trạng thái
                </TableCell>
                <TableCell>
                  Hành động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((course) => {
                const createdAt = format(course.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={course.id}
                  >

                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar src={course.avatar}>
                          {getInitials(course.title)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {course.title}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Chip color={'primary'} label={"N" + course.level} variant="outlined" />

                    </TableCell>
                    <TableCell>
                      {course.duration} tháng
                    </TableCell>
                    <TableCell>
                      {course.price.toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </TableCell>
                    <TableCell>
                      {course.lessons}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      <Chip color={course.status ? 'secondary' : 'error'} label={course.status ? 'Công khai' : 'Khóa'} />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleEditCourse(course.id)} variant="contained" className='bg-primary' size='small'>
                        <SvgIcon>
                          <PencilIcon />
                        </SvgIcon>
                      </Button>


                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>


  </>
  );
};


