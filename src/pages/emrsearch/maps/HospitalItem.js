/*global kakao*/

import React,{useEffect} from 'react';
import { Button } from '@material-ui/core';
import {useState } from "react";
import KeywordMap from "./KeywordMap";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Map from "./Map";


const HospitalItem = ({data}) => {

    const [open, setOpen] = useState(false);
  
    const handlePos=(e)=>{
       setOpen(true);
    }

    //모달창 열기
    const handleClickOpen = (e) => {
        setOpen(true);
    }
    //모달창 닫기
    const handleClickClose = (e) => {
        setOpen(false);
    }


    return (
        <>

        <div>
            
            병원명: {data.name} <br/>위치 : {data.address} {data.xpos} {data.ypos}  
            {data.ypos}
            <button onClick={()=>handlePos()}>지도</button> 
            <hr/>
        </div>
        {/* 모달창 start */}
            <Dialog
                   open={open}
                  onClose={handleClickClose}
                  fullWidth
                  maxWidth="sm"
                >
        
                  <DialogTitle>병원위치</DialogTitle>
                      <DialogContent>
                        
                        <KeywordMap hx={data.xpos} hy={data.ypos}/>
                        {/* <Map/> */}
                      </DialogContent>
                      <DialogActions>
                          <Button variant="outlined" color="primary" onClick={handleClickClose}>닫기</Button>
                      </DialogActions>

              </Dialog>
            {/* 모달창 end */}


        </>
    );
};

export default HospitalItem;