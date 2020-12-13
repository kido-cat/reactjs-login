import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import SignUp from '../dangKy/index';
import DangNhap from '../dangNhap/index'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dangNhapForm, setdangNhapForm] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const openDangNhapForm =() => {
    setdangNhapForm(true);
  };

  const closeDangNhapForm =() => {
    setdangNhapForm(false);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <PetsIcon className={classes.menuButton}/>
          <Typography variant="h6" className={classes.title}>
            Kido-cat
          </Typography>
          <Button color="inherit" onClick={openDangNhapForm} >Đăng nhập</Button>
          <Button color="inherit" onClick={handleClickOpen}>Đăng ký</Button>
        </Toolbar>
      </AppBar>
      <Dialog disableBackdropClick open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <SignUp />
        </DialogContent>
      </Dialog>
      <Dialog disableBackdropClick  open={dangNhapForm} onClose={closeDangNhapForm} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DangNhap />
        </DialogContent>
      </Dialog>
    </div>
  );
}