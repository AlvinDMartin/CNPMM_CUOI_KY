import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Paper from '@material-ui/core/Paper';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
//import Review from './Review';
import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { addCasesDoctors, addBookedCase, getBookedCases, getCasesDoctors, getCustomer, getDoctors, getCases, updateBookedCase } from "./../../actions/api";
import Swal from "sweetalert2"; //hiện thông báo tạo thành công hay không
import { Button, Col, Row, Modal, Form, Select, Input, DatePicker, Space, Table } from "antd";
//import moment from "moment";

const { Option } = Select
const formatDate = (date) => {
  //console.log(date.getDay());
  if (parseInt(date.getDay()) === 1) { return "Thứ hai" }
  if (parseInt(date.getDay()) === 2) { return "Thứ ba" }
  if (parseInt(date.getDay()) === 3) { return "Thứ tư" }
  if (parseInt(date.getDay()) === 4) { return "Thứ năm" }
  if (parseInt(date.getDay()) === 5) { return "Thứ sáu" }
  if (parseInt(date.getDay()) === 6) { return "Thứ bảy" }
  if (parseInt(date.getDay()) === 0) { return "Chủ nhật" }
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

//const steps = ['Chọn lịch'];


// ReactDOM.render(
//   <Space direction="vertical">
//     <DatePicker onChange={onChange} />
//   </Space>,
//   mountNode,
// );

// const { RangePicker } = DatePicker;

// function onChange(value, dateString) {
//   console.log('Selected Time: ', value);
//   console.log('Formatted Selected Time: ', dateString);
// }

// function onOk(value) {
//   console.log('onOk: ', value);
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <PaymentForm />;
//     // case 1:
//     //   return <Review />;
//     // default:
//     //   throw new Error('Unknown step');
//   }
// }


export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [listBookCase, setListBookCase] = useState([]);
  const [listCase, setListCase] = useState([]);
  const [listBooked, setListBooked] = useState([]);
  const [listCaseDoctor, setListCaseDoctor] = useState([]);
  const [listDoctor, setListDoctor] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isUpdate, setIsupdate] = useState(false);
  const [idBooking, setIdBook] = useState(null);

  const [dateRegister, setDateRegister] = useState(null);
  const [status, setStatus] = useState(null);

  const [form] = Form.useForm()




  useEffect(() => { //load api khi mới vào website
    getBookedCases().then(res => {
      setListBookCase([...res.data]) //copy data vào list
    });
    getCases().then(res => {
      setListCase([...res.data]) //copy data vào list
    });
    getDoctors().then(res => {
      setListDoctor([...res.data]) //copy data vào list
    });
    getBookedCases().then(res => {
      setListBooked([...res.data]) //copy data vào list
    });
    getCasesDoctors().then(res => {
      setListCaseDoctor([...res.data]) //copy data vào list
    });
    // getBookedCases().then(res => {
    //   setListBookCase([...res.data]) //copy data vào list
    // });



  }, [])
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCancel = () => {
    setVisible(false)
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  var data = "";
  const onChangeDate = (date, dateString) => {
    data = dateString;
  }

  var istatus = "";
  const onChangeStatus = (data) => {
    /* istatus = data;
    console.log(istatus); */
    istatus = data.target.value


  }

  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "idBooking"
    },
    {
      title: "Thứ",
      key: "created_date",
      //dataIndex: "created_date",
      render: (text, record) => record && record.detail_doctors_booking.dateRegister ? formatDate(new Date(record.detail_doctors_booking.dateRegister)) : ""
    },
    {
      title: "Ngày đăng kí",
      key: "dateRegister",
      render: (text, record) => record && record.detail_doctors_booking.dateRegister && record.detail_doctors_booking.dateRegister ? Date.parse(record.detail_doctors_booking.dateRegister) : ""
    },
    {
      title: "Ca",
      key: "idCase",
      render: (text, record) => record && record.detail_doctors_booking.detail_cases && record.detail_doctors_booking.detail_cases.nameCase ? record.detail_doctors_booking.detail_cases.nameCase : ""
    },
    {
      title: "Bác sĩ phụ trách",
      key: "idDoctor",
      render: (text, record) => record && record.detail_doctors_booking.detail_doctors && record.detail_doctors_booking.detail_doctors.fullName ? record.detail_doctors_booking.detail_doctors.fullName : ""
    },
    {
      title: "Tên khách hàng",
      key: "idCustomer",
      render: (text, record) => record && record.detail_doctors_customer && record.detail_doctors_customer.fullName ? record.detail_doctors_customer.fullName : ""
    },
    // {
    //   title: "Chi tiết",
    //   key: "action",
    //   render: (text, record) => <Button type="primary" onClick={() => onUpdate(record)}>Xem</Button>
    // }

  ]

  // const onUpdate = record => {
  //   setIdBook(record.idBooking);
  //   alert(record.idBooking);
  //   form.setFieldsValue({ ...record });
  //   setVisible(true);
  // }



  const onFinish = (values) => {
    console.log(values);

    if (data == "") return alert("Xin hãy chọn ngày");
    if (values.idCase == "") return alert("Xin chọn  lịch khám");
    if (values.idDoctor == "") return alert("Xin chọn  bác sĩ");
    if (istatus == "") return alert("Xin hãy nhập ghi chú");

    var dataJson = {
      'dateRegister': data,
      'cases_idCase': values.idCase,
      'doctors_idDoctor': values.idDoctor,
      'status': istatus
    }
    var dataJS = {
      'cases_doctors_idCase_doctor': data,
      'customers_idCustomer': values.idCase,
    }

    console.log("data for APi");
    console.log(dataJson);
    // updateBookedCase({
    //   ...values,
    //   idBooking
    // }).then(res => {
    //   Swal.fire({
    //     position: "center",
    //     title: "Thành công",
    //     icon: "success",
    //   }).then(() => { //thêm thành công thì load lại data bên ngoài
    //     setVisible(false); //tắt form 
    //     getBookedCases().then(res => { //load lại
    //       setListBookCase([...res.data]) //copy data vào list
    //     });
    //   })
    // }).catch(() => { //không thành công thì báo lỗi
    //   Swal.fire({
    //     position: "center",
    //     title: "Thêm không thành công",
    //     icon: "error",
    //   })
    // })

    addCasesDoctors(dataJson).then(res => {
      Swal.fire({
        position: "center",
        title: "Thành công",
        icon: "success",
      }).then(() => { //thêm thành công thì load lại data bên ngoài
        setVisible(false); //tắt cái form đi
        getCasesDoctors().then(res => { //load lại nè
          setListCaseDoctor([...res.data]) //copy data vào list
        });
        getBookedCases().then(res => { //load lại nè
          setListBooked([...res.data]) //copy data vào list
        });
      })
    }).catch(() => { //không thành công thì báo lỗi
      Swal.fire({
        position: "center",
        title: "Thêm không thành công",
        icon: "error",
      })
    })
    // addBookedCase(dataJson).then(res => {
    //   Swal.fire({
    //     position: "center",
    //     title: "Thành công",
    //     icon: "success",
    //   }).then(() => { //thêm thành công thì load lại data bên ngoài
    //     setVisible(false); //tắt cái form đi
    //     getCasesDoctors().then(res => { //load lại nè
    //       setListCaseDoctor([...res.data]) //copy data vào list
    //     });
    //     getBookedCases().then(res => { //load lại nè
    //       setListBooked([...res.data]) //copy data vào list
    //     });
    //   })
    // }).catch(() => { //không thành công thì báo lỗi
    //   Swal.fire({
    //     position: "center",
    //     title: "Thêm không thành công",
    //     icon: "error",
    //   })
    // })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Row
        gutter={[16, 16]}
      //style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}
      >
        <Col md={12}>
          <label style={{ fontWeight: "bold" }}>Danh sách bệnh</label>
        </Col>
        <Col md={12} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            className="mr-0"
            onClick={() => { setVisible(true); }} //mở form // dùng chung form nên cần bật tắt để hiểu đang xài biến gì
          >
            Thêm lịch khám
        </Button>
        </Col>
        <Col md={24}>
          <Table columns={columns} dataSource={listBookCase} />
        </Col>

        <Modal
          title="Thông tin lịch khám"
          visible={visible}
          onOk={() => form.submit()}
          onCancel={handleCancel}
        //confirmLoading={loading}
        >

          <Form form={form} {...layout} name="basic" onFinish={onFinish}  >
            <Form.Item
              label="Ngày khám bệnh"


            /* rules={[{ required: true }]} */
            > <Space direction="vertical">
                <DatePicker onChange={onChangeDate} />
              </Space>,
            </Form.Item>
            <Form.Item
              label="Ca"
              name="idCase"
            /* rules={[{ required: true }]} */
            >
              <Select
                allowClear
                showSearch
                style={{ width: "100%" }}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {listCase.map((ls, index) => (
                  <Option value={ls.idCase} key={index}>
                    {ls.nameCase}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Bác sĩ phụ trách"
              name="idDoctor"
            /* rules={[{ required: true }]} */
            >
              <Select
                allowClear
                showSearch
                style={{ width: "100%" }}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {listDoctor.map((ls, index) => (
                  <Option value={ls.idDoctor} key={index}>
                    {ls.fullName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Ghi chú"
              name="status"
            /* rules={[{ required: true }]} */

            > <Input.TextArea onChange={onChangeStatus} />
            </Form.Item>
          </Form>
        </Modal>
      </Row>

      {/* <Modal
        title="Thông tin lịch khám"
        visible={visible}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      //confirmLoading={loading}
      >
        <Form form={form} {...layout} name="basic" onFinish={onFinish}>
          <Form.Item
            label="Ngày đăng kí"
            name="dateRegister"
            rules={[{ required: true }]}
          > <Input />
          </Form.Item>
          <Form.Item
            label="Ca"
            name="idCase"
            rules={[{ required: true }]}
          >
            <Select
              allowClear
              showSearch
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {listCase.map((ls, index) => (
                <Option value={ls.idCase} key={index}>
                  {ls.nameCase}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Bác sĩ phụ trách"
            name="idDoctor"
            rules={[{ required: true }]}
          > <Input />
          </Form.Item>
          <Form.Item
            label="Tên khách hàng"
            name="idCustomer"
            rules={[{ required: true }]}
          > <Input />
          </Form.Item>
        </Form>
      </Modal> */}


      {/* <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            ĐẶT LỊCH KHÁM
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  ĐẶT LỊCH THÀNH CÔNG.
                </Typography>
                <Typography >
                  Vui lòng đến bệnh viện trước 30 phút theo thời gian bạn đã đăng ký. Mọi thắc mắc xin liên hệ ban quản lý bệnh viện Đạt Anh qua hôm thu góp ý: bienviendatanh@gmail.com
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Trở về
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Đặt lịch' : 'Tiếp theo'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </main> */}
    </React.Fragment>
  );
}