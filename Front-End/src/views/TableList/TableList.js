import React, { useEffect, useState } from "react";
import _, { toLength } from 'lodash'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";


import List_diseasesApi from "api/List_diseasesApi.js";
import group_diseasesApi from "api/group_diseasesApi.js";
import SpecialistsApi from "api/SpecialistsApi.js"

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [Listdiseases, setList] = useState([]);
  const [GroupdiseasesList, setGroup] = useState([]);
  const [SpecialList, setSpecial] = useState([]);
  
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        let response = await List_diseasesApi.getAll();

        response = response.map(data => Object.keys(data).map((key) => data[key])).map(d => {
          let newD = [...d];
          newD = newD.map(k => {
            if (_.isObject(k)) {
              return Object.keys(k).map((keyData) => k[keyData])
            }
            return k
            
          })
          return newD;
          
        })

        var length = response.length;
        for(var i = 0; i<length; i++ ){
          response[i].splice(3,3)
          var temp = response[i]
          var temp3 = temp[3]
          var tlen = temp3.length
          for (var j = 0; j <tlen; j++)
          {
            if (j == 1){
              response[i].push(temp3[j])
            }
          }
          response[i].splice(3,1)
        }

        setList(response);
    
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }

    fetchProductList();
  }, []);

  useEffect(() => {
    const fetchGroupList = async () => {
      try {
        let response = await group_diseasesApi.getAll();

        response = response.map(data => Object.keys(data).map((key) => data[key])).map(d => {
          let newD = [...d];
          newD = newD.map(k => {
            if (_.isObject(k)) {
              return Object.keys(k).map((keyData) => k[keyData])
            }
            return k
          })
          return newD;
        })

        var length = response.length;
        for(var i = 0; i<length; i++ ){
          response[i].splice(2,3)
          
        }
        setGroup(response);

      } catch (error) {
        console.log('Failed to fetch Group list: ', error);
      }
    }

    fetchGroupList();
  }, []);

  useEffect(() => {
    const fetchSpecialList = async () => {
      try {
        let response = await SpecialistsApi.getAll();

        response = response.map(data => Object.keys(data).map((key) => data[key])).map(d => {
          let newD = [...d];
          newD = newD.map(k => {
            if (_.isObject(k)) {
              return Object.keys(k).map((keyData) => k[keyData])
            }
            return k
          })
          return newD;
        })

        var length = response.length;
        for(var i = 0; i<length; i++ ){
          response[i].splice(3,2)
          
        }
        setSpecial(response);

      } catch (error) {
        console.log('Failed to fetch Speciallist list: ', error);
      }
    }

    fetchSpecialList();
  }, []);


  return (
    <GridContainer>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>DANH SÁCH CÁC CHUYÊN KHOA</h4>
            <p className={classes.cardCategoryWhite}>
              Tất cả các chuyên khoa
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="success"
              tableHead={["ID Chuyên khoa", "Tên chuyên khoa", "Mô tả"]}
              tableData={SpecialList}

            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>DANH SÁCH CÁC NHÓM BỆNH</h4>
            <p className={classes.cardCategoryWhite}>
              Tất cả các nhóm bệnh
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Nhóm bệnh", "ID Chuyên khoa"]}
              tableData={GroupdiseasesList}

            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="warning">
            <h4 className={classes.cardTitleWhite}>
              DANH SÁCH CÁC BỆNH
            </h4>
            <p className={classes.cardCategoryWhite}>
              Tất cả các bệnh thuộc các nhóm bệnh
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["ID", "Tên bệnh", "Mô tả", "Thuộc nhóm bệnh"]}
              tableData={Listdiseases}
            />

          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
