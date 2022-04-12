/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
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

const CREATE_NEW_ITEM = gql`
  mutation CREATE_NEW_ITEM($id: ID!) {
    createItem(data: { name: "", price: 0, order: { connect: { id: $id } } }) {
      name
      price
      dateCreated
      order {
        id
      }
    }
  }
`;

const DELETE_ITEM = gql`
  mutation DELETE_ITEM($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

function EditProject() {
  const router = useRouter();
  const projectId = router.query.id || '';
  const [currentItemId, setCurrentItemId] = useState('');

  console.log(projectId);
  const { data, error, loading } = useQuery(ORDER_DETAILS, {
    variables: { id: projectId },
  });

  const [
    createItem,
    { data: itemData, error: itemError, loading: itemLoading },
  ] = useMutation(CREATE_NEW_ITEM, {
    variables: { id: projectId },
  });

  const [
    deleteItem,
    {
      data: itemDeleteData,
      error: itemDeleteError,
      loading: itemDeleteLoading,
    },
  ] = useMutation(DELETE_ITEM, {
    variables: { id: currentItemId },
  });

  if (loading) return <p>...грууузимся</p>;
  if (error) return null;
  const currentOrder = data.Order;

  console.log(itemDeleteError);

  return (
    <FormContainer>
      <FormBlock>
        <label htmlFor="orderName">Заказ</label>
        <input type="text" id="orderName" placeholder={currentOrder.name} />

        {currentOrder.status === 'PROGRESS' ? (
          <FaIcons>
            <i className="fa fa-cogs" aria-hidden="true" />
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
          placeholder={currentOrder.clientPrice}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderClientPrepay">Аванс</label>
        <input
          type="text"
          id="orderClientPrepay"
          placeholder={currentOrder.clientPrepay}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderСlientDept">Клиент должен</label>
        <input
          type="text"
          id="orderClientDept"
          placeholder={currentOrder.clientDept}
        />
      </FormBlock>

      {currentOrder.items.map((item, index) => (
        <ItemsBlock>
          <label htmlFor={item.name + index}>{index + 1}</label>
          <input type="text" id={item.name + index} placeholder={item.name} />

          <input type="text" id={item.price + index} placeholder={item.price} />
          <StyledButtonCheck>
            <i className="fa fa-check" aria-hidden="true" />
          </StyledButtonCheck>
          <StyledButtonCross onClick={() => setCurrentItemId(item.id)}>
            <i className="fa fa-times" aria-hidden="true" />
          </StyledButtonCross>
        </ItemsBlock>
      ))}
      <FormBlock>
        <AddItenButton
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            const res = await createItem();
            console.log('res', res);
          }}
        >
          <FaIcons>
            <i className="fa fa-plus" aria-hidden="true" />
          </FaIcons>
        </AddItenButton>
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderExpence">Затраты</label>
        <input
          type="text"
          id="orderExpence"
          placeholder={currentOrder.expence}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderEarning">Остаток</label>
        <input
          type="text"
          id="orderEarning"
          placeholder={currentOrder.clientPrice - currentOrder.expence}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderPersonalExpences">Личные Затраты</label>
        <input
          type="text"
          id="orderPersonalExpences"
          placeholder={currentOrder.personalExpence}
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

const StyledButtonCheck = styled.button`
  border: none;
  background-color: lightgreen;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0.2rem;
`;

const StyledButtonCross = styled.button`
  border: none;
  background-color: lightcoral;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0.2rem;
`;

const AddItenButton = styled.button`
  border: none;
  width: 10rem;
  background-color: lightblue;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0.2rem;
`;
