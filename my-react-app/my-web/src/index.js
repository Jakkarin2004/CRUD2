import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Car';
import Form from './Form';
import Color from './Color';
import { useState } from 'react';


//const [ชื่อตัวแปร,ชื่อฟังก์ชันที่เปลี่ยนค่าตัวแปร] = useState('กำหนดชนิดและค่าเริ่มต้น');
// ตัวแปร root จะชี้ไปยัง <div id="root"></div> ที่อยู่ในไฟลื index.html ในโฟลเดอร์ public
const root = ReactDOM.createRoot(document.getElementById('root'));
const myelement=(
  <table style={{
    border:"1px solid"
  }}>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>jakkarin</td>
    </tr>
    <tr>
      <td>MueangSong</td>
    </tr>
  </table>
);

const cars = [
  {id:1,brand:'Ford'},
  {id:2,brand:'BMW'},
  {id:3,brand:'Audi'},
  {id:4,brand:'Toyota'},
  {id:5,brand:'XB'}
];  
const x = (
  <div>
    <select>
      <option></option>
      <option>cat</option>
      <option>dog</option>
      <option>{<Car/>}</option>
    </select>
  </div>
)
const add = <h1> ผลลัพท์ของ 5 + 5 = เท่ากับ {5+5}</h1>
//ในบางกรณี element ไม่มีแท็กปิด ต้องใส่ /> เพื่อบอกว่ามี closed tag
const xElement = <input type='text'/>

function Myname(){
  return <div>jakkarin</div>
}
function Hello(){
  const [color,setColor] = useState(['red','green','blue']);//การประกาศตัวแปร useState 
  return (
  <>
  <h1>รถยี่ห้อต่างๆของฉัน</h1>
  <ul>
        {color.map((col)=>(<li style={{color:col}}>{col}</li>))}
  </ul>
  <ul>
    {cars.map((car)=> <Car key={car.id} brand={car.brand} />)}
  </ul>
  </>
  );
}
root.render(
  <>
  <Color/>
<Hello/>
<Form/>
</>
);

document.getElementById('root').innerHTML = '<h1>Hello</h1>'
// root.render จะเป็นคำสั่งให้แสดง component ที่มีชื่อว่า <App/>
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <App /> */}
//   </React.StrictMode>
// );

/*
  react เป็น JavaScript library สำหรับการสร้าง ui 
  react ถูกนำมาใช้ในการสร้าง Single-pagev Application
  React สามารถทำให้สร้าง UI component ที่สามารถนำมาใช้งานได้ใหม่ (reuseTable)
 */

  /*
  React Render HTML เป้าหมายของ React คือการแสดงผลที่หลากหลาย(render) ของ HTML บน web page
  โดยการ render HTML บน web page จะเรียกใช้งานฟังก์ชัน createRoot() และมี method คือ render()

  ตัว createRoot() จะมีการเชื่อมโยงกับ argument ของ HTML element โดยมีวัตถุประสงค์ในการชี้ไปยังตำแหน่ง
  ของการแสดงผลในไฟล์ HTML 

  rander() เป็น Method ที่ใช้ในการแสดงผล Ract Component ที่ควรจะถูกแสดงผลว่ามี component อtไรบ้าง

  React JSX 
  JSX มาจาก javascript XHM 
  JSX สามารถเขียน HTML ใน React ได้
  JSX ทำให้สามารถเขียนหรือเพิ่ม HTML ใน React ได้ง่ายขึ้น

  ในการเขียน JSX เราสามารถเขียน HTML element ภายใต้ DOM โดยไม่ต้องใช้ฟังก์ชัน
  - createElement() หรือ appendChild() method
  โดย JSX จะทำการแปลง HTML tage ไปเป็น react elements ให้แทน  

  หลักการ One Top Level Element 
   ในการเขียน HTMl code จะต้องคลอบด้วย element นอกสุดเพียง element  เดียว

   attribute class 
   ในการกำหนด attribute class ใน jsx จะใช้ className แทน เช่น

   <h1 className="myclass"> hello </h1>

   condition - if statements
   ในการใช้เงื่อไข (if) เราจะไม่ใช้ if ใน JSX ซึ่งเราสามารถใช้ได้ 2 กรณี คือ
   1 เขียน if statements ภายนอก JSX code
   ตย.

    const x=5;
    let tet = "goodbye";
    if (x<10){
      text = "hello";
    }
    const myElement = <h1>{text}</h1>;
  2 ใช้ ternary expression แทน 
  ตย.
    const x=5;
    const myElement = <h1>{(x)>10?"Hello";"Goodbye"}</h1>;

  React Component
    Component จะเหมือนกับ Function ซึ่งส่งค่ากลับ (return) HTML Elements
  โดย component จะมีความเป็นอิสละ(independent) และสามารถนำกลับมาใช้งานใหม่ได้ (reusetable)
  เราสามารถเขียน component ได้ 2 แบบคือ class component และ function component
  ในการสร้าง React Component ชื่อของ component จะต้องเริ่มต้นด้วยตัวอักษรตัวใหญ่ (uper case letter)

  Component in Components คือ Component ซ้อน Component

  Component in Files 
   โดยปกติในการเขียน code ซึ่งทำให้สามารถนำกลับมาใช้ได้ใหม่ ควรมีการเขียนแยกออกเป็นไฟล์
   โดยการเขียนไฟลื react component เราจะใช้นามสกุล .js
   ต้องมีตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่
   และเมื่อมีการเรียกใช้งานต้องทำการ import ไฟล์ก่อนการใช้งาน

  */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
