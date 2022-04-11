/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const ORDER_DETAILS = gql`
  query ORDER_DETAILS($id: ID!) {
    Order(where: { id: $id }) {
      name
      status
      clientPrice
      clientPrepay
      clientDept
      expence
      personalExpence
      interest
      dateCreated
      items {
        name
        price
        status
        id
      }
    }
  }
`;

function EditProject() {
  const router = useRouter();
  const projectId = router.query.id || '';

  console.log(projectId);
  const { data, error, loading } = useQuery(ORDER_DETAILS, {
    variables: { id: projectId },
  });
  if (loading) return <p>...грууузимся</p>;
  if (error) return null;
  const currentOrder = data.Order;

  console.log(data);
  return (
    <FormContainer>
      <FormBlock>
        <label htmlFor="orderName">Заказ</label>
        <input type="text" id="orderName" value={currentOrder.name} />

        {currentOrder.status === 'PROGRESS' ? (
          <FaIcons>
            <i className="fa fa-truck" aria-hidden="true" />
          </FaIcons>
        ) : (
          <FaIcons>
            <i className="fa fa-check" aria-hidden="true" />
          </FaIcons>
        )}
      </FormBlock>
      <FormBlock>
        <label htmlFor="orderClientPrice">Стоимость</label>
        <input
          type="text"
          id="orderClientPrice"
          value={currentOrder.clientPrice}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderClientPrepay">Аванс</label>
        <input
          type="text"
          id="orderClientPrepay"
          value={currentOrder.clientPrepay}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderСlientDept">Клиент должен</label>
        <input
          type="text"
          id="orderClientDept"
          value={currentOrder.clientDept}
        />
      </FormBlock>

      {currentOrder.items.map((item, index) => (
        <ItemsBlock>
          <label htmlFor={item.name + index}>{index + 1}</label>
          <input type="text" id={item.name + index} value={item.name} />

          <input type="text" id={item.price + index} value={item.price} />
        </ItemsBlock>
      ))}

      <FormBlock>
        <label htmlFor="orderExpence">Затраты</label>
        <input type="text" id="orderExpence" value={currentOrder.expence} />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderEarning">Остаток</label>
        <input
          type="text"
          id="orderEarning"
          value={currentOrder.clientPrice - currentOrder.expence}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderPersonalExpences">Личные Затраты</label>
        <input
          type="text"
          id="orderPersonalExpences"
          value={currentOrder.personalExpence}
        />
      </FormBlock>
    </FormContainer>
  );
}

export default EditProject;

const FaIcons = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  & i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: row;
  & label {
    width: 10rem;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0.5rem;
    margin: 0.2rem;
    background-color: lightgray;
  }
  & input {
    width: 10rem;
    margin: 0.2rem;
    background-color: #e8ffc0;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const ItemsBlock = styled.div`
  display: flex;
  flex-direction: row;
  & label {
    width: 2rem;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0.5rem;
    margin: 0.2rem;
    background-color: lightgreen;
  }
  & input:first-of-type {
    width: 7.6rem;
    margin: 0.2rem;
    background-color: #d6ffe5;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  & input:last-of-type {
    width: 10rem;
    margin: 0.2rem;
    background-color: #e8ffc0;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
