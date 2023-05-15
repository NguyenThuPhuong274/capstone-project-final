import { useCallback, useMemo, useState } from 'react';
import { subDays, subHours } from 'date-fns';
import {
  Box, Button, CardContent, Card, Container, Stack, Dialog, DialogTitle
  , DialogContent, Divider,CardHeader
} from '@mui/material';
import { useSelection } from '../../../hooks/use-selection';
import { applyPagination } from '../../../utils/apply-pagination';
import { ContactTable } from '../../../sections/contact/contact-table';
import { ContactTopBar } from '../../../sections/contact/contact-topbar';
import AppInput from '../../../components/AppInput/AppInput';


const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: 'lasldhjaslkdhkashdkjashdkashdkjashd',
    status: false,
    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: true,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: true,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e86809283e28b96d2d38537',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: true,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: true,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: false,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    status: false,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: false,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e8877da9a65442b11551975',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: false,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    name: 'Nguyễn Thành Lâm',
    email: 'lam@gamil.com',
    message: '',
    status: false,

    sentAt: subDays(subHours(now, 7), 1).getTime(),
  }
];

const useCourses = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCourseIds = (contacts) => {
  return useMemo(
    () => {
      return contacts.map((contacts) => contacts.id);
    },
    [contacts]
  );
};



const AdminContactPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const contacts = useCourses(page, rowsPerPage);
  const coursesIds = useCourseIds(contacts);
  const coursesSelection = useSelection(coursesIds);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [currentContact, setCurrentContact] = useState();

  const [requestMessage, setRequestMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleChangeValue = (value) => {
    setResponseMessage(value);
  }

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

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
            <ContactTopBar setIsOpenModal={setIsOpenModal} />

            <ContactTable
              count={data.length}
              items={contacts}
              onDeselectAll={coursesSelection.handleDeselectAll}
              onDeselectOne={coursesSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={coursesSelection.handleSelectAll}
              onSelectOne={coursesSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={coursesSelection.selected}
              setIsOpenModal={setIsOpenModal}
              isOpenModal={isOpenModal}
              setCurrentContact={setCurrentContact}
            />
          </Stack>
        </Container>
      </Box>


      <Dialog maxWidth open={isOpenModal}  onClose={handleCloseModal}>
        <DialogTitle >HỌC VIÊN "{currentContact?.name}"</DialogTitle>
        <DialogContent sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', p: 0, pb: 2, width: 1000 }} dividers>
        <Container sx={{p: 0}} className='mt-10' maxWidth="lg">
              <Stack spacing={3}>

                <Card sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', p: 0 }} >

                  <CardContent  >
                    <CardHeader title="Thông điệp"  sx={{ p: 0, pb: 2}} />

                   <span>
                    {currentContact?.message}
                   </span>
                  </CardContent>
                  <Divider />
                </Card>
                <Card sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }} >

                  <CardContent  >
                    <CardHeader title="Phản hồi" sx={{ p: 0, pb: 2}} />

                    <AppInput value={responseMessage} handleChangeValue={handleChangeValue} placeholder={"Phản hồi của bạn"} />
                  </CardContent>
                  <Divider />
                </Card>
                <div className='w-full flex justify-end'>
                  <Button variant="contained" title='Hủy' className='bg-cteal mr-3' onClick={handleCloseModal}>
                    Hủy
                  </Button>
                  <Button variant="contained" title={currentContact?.email != null? 'Gửi phản hồi tới ' + currentContact?.email : 'Gửi phản hồi'} className='bg-primary'>
                    Gửi
                  </Button>
                </div>
              </Stack>
            </Container>
        </DialogContent>

      </Dialog>
    </>
  );
};


export default AdminContactPage;
