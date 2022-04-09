import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { link } from 'react-dom';
import styled from 'styled-components';

const ALL_ORDERS_LIST = gql`
  query ALL_ORDERS_LIST {
    allOrders {
      id
      name
      clientPrice
      expence
      status
    }
  }
`;

function OrdersList() {
  const { data, error, loading } = useQuery(ALL_ORDERS_LIST);

  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.allOrders.map((order) => (
        <Order key={order.id}>
          <div>{order.name}</div>
          <div>{order.clientPrice}</div>
          {() => {
            if (order.status === 'PROGRESS')
              return (
                <div>
                  <p>&#9745;</p>
                </div>
              );
            return (
              <div>
                <p>&#10060;</p>
              </div>
            );
          }}
        </Order>
      ))}
    </div>
  );
}

export default OrdersList;

const Order = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  & div {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem;
    margin: 0.2rem;
    background-color: lightgray;
  }
`;
