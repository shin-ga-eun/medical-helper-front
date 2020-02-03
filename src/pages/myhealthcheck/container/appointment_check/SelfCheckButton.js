import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

//버튼 어떻게 구현되는건지 물어보기
//처방입력시 서버에 전송되는 데이터 물어보기

class SelfCheckButton extends Component {
    state = {

        open: false, //처방입력 모달창 오픈 유무
    }

    //모달창 열기
    handleClickOpen = (e) => {
        this.setState({
            open: true,
        })
    }
    //모달창 닫기
    handleClickClose = (e) => {
        this.setState({
            open: false,
        })
    }
    //모달창 완료 버튼 클릭 시 서버로 데이터 전송
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Here is handleFormSubmit in SelfCheckButton");
    }

    render() {
        return (
            <div>
                {/* 예약시간전 */}
                <Button variant="contained" color="secondary"> 
                    진료예약
                </Button>
            
                {/* 예약시간후 */}
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    처방입력
                </Button>

                {/* 처방입력후 */}
                <Button variant="outlined" color="primary">
                    처방내역
                </Button>


                {/* 모달창 start */}
                <Dialog
                  open={this.state.open}
                //   onClose={this.handleClickClose}
                  fullWidth
                  maxWidth="sm"
                >
                  <DialogTitle>처방입력</DialogTitle>
                  <form onSubmit={this.handleFormSubmit}>
                      <DialogContent>

                          <TextField
                              style={{ marginBottom: 15 }}
                              variant="outlined"
                              autoFocus
                              fullWidth
                              // helperText="작품명"
                              label="의사명"
                              type="text"
                            //   name="artName"
                            //   value={this.state.artName}
                            //   onChange={this.handleValueChange}
                          /><br />

                          <TextField
                              variant="outlined"
                              label="약"
                            //   type="number"
                            //   name="price"
                            //   onChange={this.handleValueChange}
                            //   helperText="대여가 (1일기준)"
                              
                          />

                          <TextField
                              style={{ marginBottom: 15 }}
                              fullWidth
                              label="설명"
                              rows="6"
                              multiline
                              margin="normal"
                              variant="filled"
                            //   name="explanation"
                            //   value={this.state.explanation}
                            //   onChange={this.handleValueChange}
                          /><br />
                      </DialogContent>

                      <DialogActions>
                          <Button variant="outlined" color="primary" onClick={this.handleClickClose}>취소</Button>
                          <Button type="submit" variant="contained" color="secondary" onClick={this.handleClickClose}>완료</Button>
                      </DialogActions>

                  </form>
              </Dialog>

            </div>
        );
    }
}

export default SelfCheckButton;