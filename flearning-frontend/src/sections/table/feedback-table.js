import { format } from 'date-fns';
import React from 'react';
import {
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Chip,
  Typography
} from '@mui/material';
import { Scrollbar } from '../../components/ScrollBar';

export const FeedbackTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

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
                  Email
                </TableCell>
                <TableCell>
                  Khóa học
                </TableCell>
                <TableCell>
                  Sao
                </TableCell>
                <TableCell>
                  Nội dung
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((feedback) => {


                return (
                  <TableRow
                    hover
                    key={feedback?.feedback_id}
                  >

                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >

                        <Typography sx={{width: 150}} variant="subtitle2">
                          {feedback?.name}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      {feedback?.email}
                    </TableCell>

                    <TableCell sx={{width: 150}}>
                      {feedback?.course_name}
                    </TableCell>
                    <TableCell>
                      {feedback?.star}
                    </TableCell>
                    <TableCell>
                     <p style={{ whiteSpace: 'nowrap' }} className='overflow-auto w-[420px] '>
                     {feedback?.message}
                     </p>
                    </TableCell>


                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>

    </Card>

    <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
      <TablePagination
        component="div"
        count={count}
        onPageChange={(event, number) => onPageChange(number)}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        labelDisplayedRows={({ from, to, count }) => `Hiện thị từ ${from}-${to} trong tổng số ${count} bản ghi`}
        boundaryCount={4}
        labelRowsPerPage={"Số bản ghi"}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  </>
  );
};

