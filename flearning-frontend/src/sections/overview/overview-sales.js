import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  Stack,
} from "@mui/material";
import React from "react";
import AppSelect from "../../components/AppInput/AppSelect";
import BarChart from "../../components/BarChart";

export const OverviewSales = ({ sales }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [data, setData] = React.useState(
    sales.filter((x) => x.year === currentYear)
  );
  const [values, setValues] = React.useState({
    search_date: currentYear,
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  React.useEffect(() => {
    setData(sales.filter((x) => x.year === values.search_date));
  }, [values.search_date]);

  // Get current date

  // Array to store month options
  const yearOptions = [];

  // Loop to generate options for the last 12 months
  for (let i = currentYear; i >= currentYear - 5; i--) {
    yearOptions.push({ search_date: i });
  }

  console.log(values.search_date);

  return (
    <Card
      className="w-full"
      sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
    >
      <CardHeader
        title={
          <>
            <Stack
              direction={"row"}
              spacing={2}
              className={"flex flex-col items-center"}
            >
              <h4>Doanh thu theo khóa học</h4>
              <div className="w-[160px]">
                {yearOptions.length > 0 ? (
                  <>
                    <AppSelect
                      value={values.search_date}
                      data={yearOptions}
                      display={"search_date"}
                      title={"search_date"}
                      placeholder={"Chọn năm"}
                      handleChangeValue={handleChangeValue}
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>{" "}
            </Stack>
          </>
        }
      />
      <CardContent>
        <BarChart data={data} />
      </CardContent>
      <Divider />
    </Card>
  );
};
