import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
export default function Form() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [income,setIncome] = useState("");
    const handleSubmit = (event =>{
        // event.preventDefault(); เป็นคำสั่งที่ป้องกันไม่ให้ไฟล์ข้อมูลส่งไปยัง เซิร์ฟเวอร์
        alert(`บันทึกเสร็จสิ้น
        ชื่อ:${name}
        อีเมล์:${email}
        income:${income}
        `
        );
    })
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <form >
              <div>
                <label>Enter your name:</label>
                <input type="text" className="form-control" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div>
                <label>Enter your e-mail:</label>
                <input type="email" className="form-control"
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Enter Income:</label>
                <input type="number" className="form-control" 
                value={income}
                onChange={(e)=> setIncome(e.target.value)}
                />
              </div>
              <input
              onClick={handleSubmit}
                type="submit"
                className="form-control btn btn-outline-success mt-2 box-hover"
              />
              <input
                type="reset"
                className="form-control btn-outline-danger mt-2"
              />
            </form>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}
