import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import customersApi from "api/customersApi.js";
import { useForm } from "react-hook-form";

import avatar from "assets/img/faces/dat.png";
import { TrainRounded } from "@material-ui/icons";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const {register, handleSubmit } = useForm();
  const infor = {
    fullName: '',
    phone:'',
    address:'',
    note:'',
    accounts_username:''
  }

  const fetchcustomer = async(datacustomer) =>{
    try{
      let response = await customersApi.post(datacustomer);
    }
    catch(error){
      console.log(error);
    }
  }

  const onSubmit = () => {
    console.log(infor)
    fetchcustomer(infor);
  }

  const handeChange = (data, type) => {
    switch(type) {
      case 1:
        infor.fullName = data.target.value;
        break;
      case 2:
        infor.phone = data.target.value
        break;
      case 3:
        infor.address = data.target.value
        break;
      case 4:
        infor.note = data.target.value
          break;
      case 5:
        infor.accounts_username = data.target.value
          break;
      default:
    }
    
  }

  return (
    
    <div>
      <GridContainer>

        <GridItem xs={12} sm={12} md={8}>
        <form className={classes.form} >
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>THÊM THÔNG TIN CHO TÀI khoản CỦA BẠN</h4>
              <p className={classes.cardCategoryWhite}>Điền thông tin chỉnh sửa cần thiết</p>
            </CardHeader>

            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Họ và Tên"
                    id="ten"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (data) => {
                        handeChange(data, 1)
                      }
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Số điện thoại"
                    id="sdt"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (data) => {
                        handeChange(data, 2)
                      }
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Địa chỉ"
                    id="diachi"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (data) => {
                        handeChange(data, 3)
                      }
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>THÔNG TIN KHÁC</InputLabel>
                  <CustomInput
                    labelText="Điền thông tin bệnh của bạn (nếu có)"
                    id="thongtinbenh"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    inputProps={{
                      onChange: (data) => {
                        handeChange(data, 4)
                      }
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Tên tài khoản"
                    id="diachi"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: (data) => {
                        handeChange(data, 5)
                      }
                    }}
                  />
                </GridItem>
              </GridContainer>

            </CardBody>            
            <CardFooter>
              <Button 
              href=""
              color="primary"
              onClick={onSubmit}
              >Lưu thông tin
              
              </Button>
            </CardFooter>
          </Card>
          </form>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>GIÁM ĐỐC BỆNH VIỆN ĐẠT ANH</h6>
              <h4 className={classes.cardTitle}>HỒ QUỐC ĐẠT</h4>
              <p className={classes.description}>
              Sức khỏe là thứ mà ta không nhìn thấy được, là yếu tố sống còn của mỗi con người; Hãy nâng niu quý trọng sức khỏe, đừng để khi mất rồi mới thấy hối tiếc.
              </p>
              <Button color="primary" round href="https://www.facebook.com/alvinDmartin.Pro99">

                Follow Facebook
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
     
    </div>
  );
}
