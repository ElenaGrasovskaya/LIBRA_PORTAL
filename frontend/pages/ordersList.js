import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

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

const DELETE_ORDER = gql`
  mutation DELETE_ORDER($id: ID!) {
    deleteOrder(id: $id) {
      id
    }
  }
`;

const CREATE_NEW_ORDER = gql`
  mutation CREATE_NEW_ORDER($date: String) {
    createOrder(
      data: {
        name: "Новый заказ"
        description: ""
        clientPrice: 0
        clientPrepay: 0
        clientDept: 0
        expence: 0
        interest: 0
        personalExpence: 0
        status: "PROGRESS"
        dateCreated: $date
      }
    ) {
      name
      description
      clientPrice
      clientPrepay
      clientDept
      expence
      interest
      personalExpence
      status
      dateCreated
    }
  }
`;

function OrdersList() {
  const currentDate = new Date();

  const [selectedOrderId, setSelectedOrderId] = useState({ id: '' });
  const { data, error, loading, refetch } = useQuery(ALL_ORDERS_LIST);
  const [
    createOrder,
    { data: orderData, error: orderError, loading: orderLoading },
  ] = useMutation(CREATE_NEW_ORDER, { variables: { date: currentDate } });

  const [
    deleteOrder,
    {
      data: deleteOrderData,
      error: deleteOrderError,
      loading: deleteOrderLoading,
    },
  ] = useMutation(DELETE_ORDER, {
    variables: { id: selectedOrderId.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.allOrders.map((order) => (
        <Order key={order.id}>
          <div>
            <Link href={`edit/${order.id}`}>{order.name}</Link>
          </div>
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
          <StyledButtonCross
            type="button"
            onClick={async (e) => {
              setSelectedOrderId({ id: order.id });
              if (selectedOrderId.id === order.id) {
                console.log('selectedOrderId', selectedOrderId.id);
                e.preventDefault();
                try {
                  const res = await deleteOrder();
                } catch (error) {
                  console.log(error);
                  refetch();
                }
                refetch();
              }
            }}
          >
            {' '}
            <i className="fa fa-times" aria-hidden="true" />
          </StyledButtonCross>
        </Order>
      ))}
      <Order>
        <AddNew
          onClick={async (e) => {
            e.preventDefault();

            try {
              const res = await createOrder();
            } catch (error) {
              console.log(error);
              refetch();
            }
            refetch();
          }}
        >
          <i className="fa fa-plus" aria-hidden="true" />
        </AddNew>
      </Order>
    </div>
  );
}

export default OrdersList;

const Order = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: 4fr 1fr 1fr 0.3fr;
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

const AddNew = styled.button`
  position: relative;
  border: none;
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
const StyledButtonCross = styled.button`
  border: none;
  background-color: lightcoral;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0.2rem;
`;
