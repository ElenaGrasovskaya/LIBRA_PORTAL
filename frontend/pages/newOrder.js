import React, { useState } from 'react';

function newOrder() {
  const [orderName, setOrderName] =useState("");
  return (
    <form>
      <label htmlFor="orderName" >Заказ
      <input type="text" id="orderName" name="orderName" placeholder='Название' value={orderName}/>
      </label>
      
    </form>
  );
}

export default newOrder;
