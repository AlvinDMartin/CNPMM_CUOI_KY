import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Phòng khám', desc: 'Phòng khám số', price: '1' },
  { name: 'Bác sĩ', desc: 'Tên bác sĩ', price: 'Phạm Văn Thành' },
  { name: 'Thời gian', desc: 'Thời gian khám bệnh', price: '8h00' },
  { name: 'Ngày tháng năm', desc: 'Ngày đến khám', price: '10/12/2020' },
];
const addresses = ['Thành phố Hồ Chí Minh'];
const payments = [
  { name: 'Tên diều dưỡng', detail: 'Nguyễn Lê Nguyên Anh' },
  { name: 'Bàn hướng dẫn', detail: 'Số 1' },
  { name: 'Số điện thoại', detail: '0345687954' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Thông tin đặt lịch
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Thanh toán" />
          <Typography variant="subtitle1" className={classes.total}>
            sau khi khám
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Thông tin bệnh nhân
          </Typography>
          <Typography gutterBottom>Nguyễn Văn A</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Thông tin liên hệ
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}