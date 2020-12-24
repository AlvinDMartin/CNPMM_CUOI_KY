import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import img1 from "assets/img/trangchu_image/Bacsi1.jpg"
import img2 from "assets/img/trangchu_image/covid1.jpg"
import img3 from "assets/img/trangchu_image/food1.jpg"

import img4 from "assets/img/trangchu_image/khamdalieu.png"
import img5 from "assets/img/trangchu_image/khamdaday.jpg"
import img6 from "assets/img/trangchu_image/khamtongquat.png"
import img7 from "assets/img/trangchu_image/khamtimmach.jpg"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
                <img className={classes.cardresize1} src={img1} alt="..." />
            </CardHeader> 
            <CardBody>
              <h4 className={classes.cardTitle}>ĐỘI NGŨ BÁC SĨ - CHUYÊN KHOA TẠI BỆNH VIỆN ĐẠT ANH</h4>
            </CardBody>

            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>

          </Card>
        </GridItem>
      </GridContainer>
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>DANH SÁCH BÁC SĨ TƯ VẤN PHÒNG TRÁNH COVID-19</h4>
              <img className={classes.cardresize2} src={img2} alt="..." />
              <p className={classes.cardCategoryWhite}>
                Ngày 10 tháng 11 năm 2020
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Họ và tên", "Khoa", "Kinh nghiệm"]}
                tableData={[
                  ["1", "TS. BS. Nguyễn Văn Sĩ", "Tim mạch", "Hơn 12 năm kinh nghiệm, Giảng viên tại Đại Học Y Dược TP.HCM"],
                  ["2", "ThS. BS. Nguyễn Duy Khải", "Nhi Khoa", "Nhiều năm kinh nghiệm, làm việc tại bệnh viện Nhi Đồng TP.HCM"],
                  ["3", "ThS. BS. CKI. Mã Tùng Phát", "Nội tiết", "Hơn 10 năm kinh nghiệm, làm việc tại bênh viện Chợ Rẫy và Bệnh viện Đại Học Y Dược TP.HCM"],
                  ["4", "ThS. BS. Trương Thị Ái Hòa", "phụ Khoa", "Hơn 7 năm kinh nghiệm, làm việc tại Bệnh viện Từ Dũ"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>DANH SÁCH THỰC PHẨM CHỨC NĂNG TỐT CHO SỨC KHỎE</h4>
              <img className={classes.cardresize2} src={img3} alt="..." />
              <p className={classes.cardCategoryWhite}>
                Cập nhật, 10 tháng 11 năm 2020
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Tên sản phẩm", "Giá", "Chi tiết"]}
                tableData={[
                  ["1", "Kẹo ngậm thảo dược Eugica", "10.000đ", "Làm dịu cơn ho, giảm đau rát họng"],
                  ["2", "Bột sủi thanh nhiệt Sensa Cools", "23.000đ", "Thanh nhiệt cơ thể, không lo bị nóng"],
                  ["3", "Siro Bách Bộ chai 125ml", "44.000đ", "Bổ phế trừ đờm, hỗ trợ điều trị ho"],
                  ["4", "Viên uống Tràng phục linh xanh", "135.000đ", "Hỗ trợ và điều trị, bảo vệ niêm mạc đại tràng và nâng cao sức đề kháng đường ruột"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>



{/*       thong tin bac si chuyen nghiep */}

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Khám da liễu</p>
              <img className={classes.cardresize3} src={img4} alt="..." />
              <h3 className={classes.cardTitle}>
                600.000 <small>đồng</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Khám dạ dày</p>
              <img className={classes.cardresize3} src={img5} alt="..." />
              <h3 className={classes.cardTitle}>
                500.000 <small>đồng</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Khám tổng quát</p>
              <img className={classes.cardresize3} src={img6} alt="..." />
              <h3 className={classes.cardTitle}>
                800.000 <small>đồng</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Khám bệnh tim mạch</p>
              <img className={classes.cardresize3} src={img7} alt="..." />
              <h3 className={classes.cardTitle}>
                700.000 <small>đồng</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
