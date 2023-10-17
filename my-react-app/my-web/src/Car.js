import React from "react";

function Car({brand}) {
  return (
    <>
      <h3>รถของฉันยี่ห้อ...{brand}</h3>
    </>
  );
}
// เพื่อให้ไฟล์อื่นสามารถเรียกใช้ component นี้ได้ต้องมีการกำหนดคำสั่งในการ export
//ด้านล่างเสมอ
export default Car;
