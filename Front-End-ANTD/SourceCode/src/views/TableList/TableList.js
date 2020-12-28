import React, { useEffect, useState } from "react"
import { getDiseases, getGroupDiseases, addDiseases, updateDiseases } from "./../../actions/api"
import Swal from "sweetalert2"; //hiện thông báo tạo thành công hay không
import { Button, Col, Row, Modal, Form, Select, Input, DatePicker, Table } from "antd";
const { Option } = Select

export default function TableList() {
  const [listDiseases, setListDiseases] = useState([]);
  const [listGroupDiseases, setListGroupDiseases] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isUpdate, setIsupdate] = useState(false);
  const [idDisease, setIdDisease] = useState(null);
  const [form] = Form.useForm()
  useEffect(() => { //load api khi với vào website
    getDiseases().then(res => {
      setListDiseases([...res.data]) //copy data vào list
    });
    getGroupDiseases().then(res => {
      setListGroupDiseases([...res.data])
    });
  }, [])
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "idDisease"
    },
    {
      title: "Tên bệnh",
      key: "name",
      dataIndex: "name"
    },
    {
      title: "Mô tả",
      key: "description",
      dataIndex: "description"
    },
    {
      title: "Nhóm bệnh",
      key: "detail_group_diseases",
      render: (text, record) => record && record.detail_group_diseases && record.detail_group_diseases.nameGroup ? record.detail_group_diseases.nameGroup : ""
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => <Button type="primary" onClick={() => onUpdate(record)}>Sửa</Button>
    }

  ]
  const onUpdate = record => { 
    setIsupdate(true);
    setIdDisease(record.idDisease);
    form.setFieldsValue({...record});
    setVisible(true);

  }
  const handleCancel = () => {
    setVisible(false)
  }
  const onFinish = (values) => {
    if(!isUpdate){
      addDiseases(values).then(res => {
        Swal.fire({
          position: "center",
          title: "Thành công",
          icon: "success",
        }).then(() => { //thêm thành công thì load lại data bên ngoài
          setVisible(false); //tắt cái form đi
          getDiseases().then(res => { //load lại nè
            setListDiseases([...res.data]) //copy data vào list
          });
        })
      }).catch(() => { //không thành công thì báo lỗi
        Swal.fire({
          position: "center",
          title: "Thêm không thành công",
          icon: "error",
        })
      })
    }
    else {
      updateDiseases({
        ...values,
        idDisease //dòng 56
      }).then(res => {
        Swal.fire({
          position: "center",
          title: "Thành công",
          icon: "success",
        }).then(() => { //thêm thành công thì load lại data bên ngoài
          setVisible(false); //tắt cái form đi
          getDiseases().then(res => { //load lại nè
            setListDiseases([...res.data]) //copy data vào list
          });
        })
      }).catch(() => { //không thành công thì báo lỗi
        Swal.fire({
          position: "center",
          title: "Thêm không thành công",
          icon: "error",
        })
      })
    
    }
   
  }

  return (
    <React.Fragment>
      <Row
        gutter={[16, 16]}
        style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}
      >
        <Col md={12}>
          <label style={{ fontWeight: "bold" }}>Danh sách bệnh</label>
        </Col>
        <Col md={12} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            className="mr-0"
            onClick={() => { setVisible(true); setIsupdate(false);form.resetFields() }} //mở form // dùng chung form nên cần bật tắt để hiểu đang xài biến gì
          >
            Tạo bệnh mới
        </Button>
        </Col>
        <Col md={24}>
          <Table columns={columns} dataSource={listDiseases} />
        </Col>

        <Modal
          title="Thêm khuyến mãi"
          visible={visible}
          onOk={() => form.submit()}
          onCancel={handleCancel}
        //confirmLoading={loading}
        >
          <Form form={form} {...layout} name="basic" onFinish={onFinish}>
            <Form.Item
              label="Tên bệnh"
              name="name"
              rules={[{ required: true, message: "Vui lòng không để trống!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mô tả"
              name="description"
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Nhóm bệnh"
              name="group_diseases_idGroup"
              rules={[{ required: true, message: "Vui lòng không để trống!" }]}
            >
              <Select
                allowClear
                showSearch
                style={{ width: "100%" }}
                placeholder="Vui lòng chọn loại bệnh"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {listGroupDiseases.map((ls, index) => (
                  <Option value={ls.idGroup} key={index}>
                    {ls.nameGroup}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </Row>
    </React.Fragment>

  );
}
