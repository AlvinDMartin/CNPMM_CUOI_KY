import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import React, { useEffect, useState } from "react"
import { getBookedCases, getCasesDoctors, getCustomer, getDoctors, getCases, updateBookedCase } from "./../../actions/api"
import Swal from "sweetalert2"; //hiện thông báo tạo thành công hay không
import { Button, Col, Row, Modal, Form, Select, Input, DatePicker, Table } from "antd";
import moment from "moment";

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

const steps = ['Thông tin bệnh nhân', 'Chọn lịch', 'Kiểm tra thông tin đặt lịch'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [listBookCase, setListBookCase] = useState([]);
  const [listCase, setListCase] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isUpdate, setIsupdate] = useState(false);
  const [idBooking, setIdBook] = useState(null);
  const [form] = Form.useForm()
  useEffect(() => { //load api khi mới vào website
    getBookedCases().then(res => {
      setListBookCase([...res.data]) //copy data vào list
    });
    getCases().then(res => {
      setListCase([...res.data]) //copy data vào list
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
  const onFinish = (values) => {

    updateBookedCase({
      ...values,
      idBooking
    }).then(res => {
      setVisible(false);
      getBookedCases().then(res => {
        setListBookCase([...res.data])
      });
    })
  }
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
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
      render: (text, record) => record && record.detail_doctors_booking.dateRegister && record.detail_doctors_booking.dateRegister ? (record.detail_doctors_booking.dateRegister) : ""
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
    {
      title: "Chi tiết",
      key: "action",
      render: (text, record) => <Button type="primary" onClick={() => onUpdate(record)}>Xem</Button>
    }

  ]
  const onUpdate = record => {
    //setIsupdate(true);
    setIdBook(record.idBooking);
    form.setFieldsValue({ ...record });
    setVisible(true);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Row
        gutter={[16, 16]}
      //style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}
      >
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
          <Form form={form} {...layout} name="basic" onFinish={onFinish}>
            <Form.Item
              label="Thứ"
              name="created_date"
              rules={[{ required: true }]}
            > <Input />
            </Form.Item>
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
        </Modal>
      </Row>

      <main className={classes.layout}>
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
      </main>
    </React.Fragment>
  );
}