import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
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
        <Link href={`edit/${order.id}`}>
          <Order key={order.id}>
            <div>{order.name}</div>
            <div>{order.clientPrice}</div>
            {order.status === 'PROGRESS' ? (
              <FaIcons>
                <i className="fa fa-truck" aria-hidden="true" />
              </FaIcons>
            ) : (
              <FaIcons>
                <i className="fa fa-check" aria-hidden="true" />
              </FaIcons>
            )}
          </Order>
        </Link>
      ))}
      <AddNew>
        <Link href="/newOrder">
          <i className="fa fa-plus" aria-hidden="true" />
        </Link>
      </AddNew>
    </div>
  );
}

export default OrdersList;

const Order = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  & div {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem;
    margin: 0.2rem;
    background-color: lightgray;
  }
`;

const FaIcons = styled.div`
  position: relative;
  & i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const AddNew = styled.div`
  position: relative;
  width: 10rem;
  height: 4rem;
  margin-top: 0.2rem;
  margin-left: 0.1rem;
  background-color: #e8ff63;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
