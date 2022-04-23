/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
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
  mutation CREATE_NEW_ITEM(
    $id: ID!
    $name: String
    $price: Int
    $status: String
  ) {
    createItem(
      data: {
        name: $name
        price: $price
        status: $status
        order: { connect: { id: $id } }
      }
    ) {
      name
      price
      order {
        id
      }
    }
  }
`;

const CREATE_NEW_ITEMS = gql`
  mutation CREATE_NEW_ITEMS($items: [ItemsCreateInput]) {
    createItems(data: $items) {
      name
      price
      order {
        id
      }
    }
  }
`;

const UPDATE_ITEM = gql`
  mutation UPDATE_ITEM($id: ID!, $name: String, $price: Int, $status: String) {
    updateItem(id: $id, data: { name: $name, price: $price, status: $status }) {
      id
      name
      price
    }
  }
`;

const UPDATE_ORDER = gql`
  mutation UPDATE_ORDER(
    $id: ID!
    $name: String
    $clientPrice: Int
    $clientPrepay: Int
    $clientDept: Int
    $expence: Int
    $interest: Int
    $personalExpence: Int
    $status: String
  ) {
    updateOrder(
      id: $id
      data: {
        name: $name
        clientPrice: $clientPrice
        clientPrepay: $clientPrepay
        clientDept: $clientDept
        expence: $expence
        interest: $interest
        personalExpence: $personalExpence
        status: $status
      }
    ) {
      id
      name
      clientPrice
      clientPrepay
      clientDept
      expence
      interest
      personalExpence
      status
    }
  }
`;

const DELETE_ITEMS = gql`
  mutation DELETE_ITEMS($ids: [ID!]) {
    deleteItems(ids: $ids) {
      id
    }
  }
`;

function EditProject() {
  const router = useRouter();
  const projectId = router.query.id || '';
  const [projectData, setProjectData] = useState({});
  const [projectItems, setProjectItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    name: '',
    price: 0,
    id: '',
  });
  const [currentItemsIds, setCurrentItemsIds] = useState([]);
  const [newItemsToSave, setNewItemsToSave] = useState([
    { data: { name: 'Test' } },
  ]);

  const calculateExpenceSergey = () => {
    if (projectItems) {
      return projectItems.reduce((acc, item) => {
        if (item.status === 'SERG') {
          return Number(acc + item.price);
        }
        return acc;
      }, 0);
    }
  };

  const calculateExpence = () => {
    if (projectItems) {
      return projectItems.reduce((acc, item) => Number(acc + item.price), 0);
    }
  };

  const newItemsId = 0;

  console.log(projectId);

  const { data, error, loading, refetch } = useQuery(ORDER_DETAILS, {
    variables: { id: projectId },
  });

  const [
    createItems,
    { data: itemsData, error: itemsError, loading: itemsLoading },
  ] = useMutation(CREATE_NEW_ITEMS, {
    variables: { items: newItemsToSave },
  });

  const [
    deleteItems,
    {
      data: itemDeleteData,
      error: itemDeleteError,
      loading: itemDeleteLoading,
    },
  ] = useMutation(DELETE_ITEMS, {
    variables: { ids: currentItemsIds },
  });

  const [
    updateOrder,
    {
      data: orderUpdateData,
      error: orderUpdateError,
      loading: orderUpdateLoading,
    },
  ] = useMutation(UPDATE_ORDER, {
    variables: {
      id: projectId,
      name: projectData.name,
      clientPrice: Number(projectData.clientPrice),
      clientPrepay: Number(projectData.clientPrepay),
      clientDept: Number(projectData.clientPrice - projectData.clientPrepay),
      expence: calculateExpence(),
      interest: Number(projectData.interest),
      personalExpence: calculateExpenceSergey(),
      status: projectData.status,
    },
  });

  const submitNewOrder = async (e) => {
    e.preventDefault();
    let itemsDelete = false;
    let itemsCreate = false;
    let orderUpdate = false;
    if (data.Order.items) {
      try {
        itemsDelete = await deleteItems();
        console.log('itemsDelete', itemsDelete);
      } catch (error) {
        console.log(error);
      }
    }

    setNewItemsToSave(
      projectItems.map((item) => ({
        data: {
          name: item.name,
          price: item.price,
          status: item.status,
          order: { connect: { id: projectId } },
        },
      }))
    );
    console.log('newItemsToSave', newItemsToSave);
    setProjectData({ ...projectData, expence: calculateExpence() });

    if (itemsDelete)
      try {
        itemsCreate = await createItems();
        console.log('itemsUpdate', itemsCreate);
      } catch (error) {
        console.log(error);
      }

    if (itemsCreate)
      try {
        orderUpdate = await updateOrder();
        console.log('orderUpdate', orderUpdate);
      } catch (error) {
        console.log(error);
      }

    if (orderUpdate) refetch();
  };

  useEffect(() => {
    if (loading) return <p>...грууузимся</p>;
    if (error) return null;
    if (!data) return null;
    setProjectData({
      ...data.Order,
      expence: calculateExpence(),
    });
    setProjectItems(data.Order.items);
    setCurrentItemsIds(data.Order.items.map((item) => item.id));
  }, []);

  if (loading) return <p>...грууузимся</p>;
  if (error) return null;
  if (!data) return null;

  console.log('state', projectData);

  return (
    <FormContainer>
      <FormBlock>
        <label htmlFor="orderName">Заказ</label>
        <input
          type="text"
          id="orderName"
          value={projectData.name}
          onChange={(e) => {
            console.log(e.target.value);
            setProjectData({ ...projectData, name: e.target.value });
          }}
        />

        <ProjectStatusButton
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (projectData.status === 'DONE') {
              setProjectData({ ...projectData, status: 'PROGRESS' });
            } else setProjectData({ ...projectData, status: 'DONE' });
            console.log('projectData', projectData);
          }}
        >
          {projectData.status === 'PROGRESS' ? (
            <FaIcons>
              <i className="fa fa-cogs" aria-hidden="true" />
            </FaIcons>
          ) : (
            <FaIcons>
              <i className="fa fa-check" aria-hidden="true" />
            </FaIcons>
          )}
        </ProjectStatusButton>
      </FormBlock>
      <FormBlock>
        <label htmlFor="orderClientPrice">Стоимость</label>
        <input
          type="number"
          id="orderClientPrice"
          placeholder={projectData.clientPrice}
          value={projectData.clientPrice}
          onChange={(e) => {
            console.log(e.target.value);
            setProjectData({
              ...projectData,
              clientPrice: e.target.value,
              clientDept: Number(e.target.value - projectData.clientPrepay),
            });
          }}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderClientPrepay">Аванс</label>
        <input
          type="number"
          id="orderClientPrepay"
          placeholder={projectData.clientPrepay}
          value={projectData.clientPrepay}
          onChange={(e) => {
            console.log(e.target.value);
            setProjectData({
              ...projectData,
              clientPrepay: e.target.value,
              clientDept: Number(projectData.clientPrice - e.target.value),
            });
          }}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderСlientDept">Клиент должен</label>
        <input
          type="number"
          id="orderСlientDept"
          placeholder={projectData.clientPrice - projectData.clientPrepay}
          value={projectData.clientDept}
          onChange={(e) => {
            setProjectData({
              ...projectData,
              clientDept: Number(
                projectData.clientPrice - projectData.clientPrepay
              ),
            });
          }}
        />
      </FormBlock>

      {projectItems &&
        projectItems.map((item, index) => (
          <ItemsBlock>
            <label htmlFor={item.id}>{index + 1}</label>
            <input
              type="text"
              id={item.id}
              placeholder={item.name}
              onChange={(e) =>
                setProjectItems(
                  projectItems.map((el, i) => {
                    if (el.id === item.id) {
                      return { ...el, name: e.target.value };
                    }
                    return el;
                  })
                )
              }
            />

            <input
              type="number"
              id={item.id}
              placeholder={item.price}
              onChange={(e) => {
                setProjectItems(
                  projectItems.map((el, i) => {
                    if (el.id === item.id) {
                      return { ...el, price: Number(e.target.value) };
                    }
                    return el;
                  })
                );
                setProjectData({
                  ...projectData,
                  expence: calculateExpence(),
                  personalExpence: calculateExpenceSergey(),
                });
              }}
            />

            <StatusButton
              type="button"
              id={item.id}
              onClick={(e) => {
                e.preventDefault();
                if (item.status === 'MAX') {
                  setProjectItems(
                    projectItems.map((el, i) => {
                      if (el.id === item.id) {
                        return { ...el, status: 'SERG' };
                      }
                      return el;
                    })
                  );
                } else
                  setProjectItems(
                    projectItems.map((el, i) => {
                      if (el.id === item.id) {
                        return { ...el, status: 'MAX' };
                      }
                      return el;
                    })
                  );
                console.log('projectItems', projectItems);
                console.log('calculateExpenceSergey', calculateExpenceSergey());
                setProjectData({
                  ...projectData,
                  personalExpence: calculateExpenceSergey(),
                });
              }}
            >
              {item.status}
            </StatusButton>

            <StyledButtonCross
              onClick={async (e) => {
                e.preventDefault();
                setCurrentItem({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                });

                setProjectItems(projectItems.filter((i) => i !== item));
              }}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </StyledButtonCross>
          </ItemsBlock>
        ))}
      <FormBlock>
        <AddItemButton
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            setProjectItems([
              ...projectItems,
              {
                id: Math.floor(Math.random() * 100),
                name: '',
                price: 0,
                status: 'MAX',
              },
            ]);
            console.log(projectItems);
          }}
        >
          <FaIcons>
            <i className="fa fa-plus" aria-hidden="true" />
          </FaIcons>
        </AddItemButton>
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderExpence">Затраты</label>
        <input
          type="number"
          id="orderExpence"
          placeholder={calculateExpence()}
          value={calculateExpence()}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderEarning">Остаток</label>
        <input
          type="number"
          id="orderEarning"
          placeholder={+projectData.clientPrice - calculateExpence()}
          value={+projectData.clientPrice - calculateExpence()}
        />
      </FormBlock>

      <FormBlock>
        <label htmlFor="orderPersonalExpences">Личные Затраты Сергей</label>
        <input
          type="number"
          id="orderPersonalExpences"
          placeholder={projectData.personalExpence}
          value={calculateExpenceSergey()}
        />
      </FormBlock>

      <AddOrderButton type="submit" onClick={(e) => submitNewOrder(e)}>
        <FaIcons>
          <i className="fa fa-floppy-o" aria-hidden="true" />
        </FaIcons>
      </AddOrderButton>
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

const AddOrderButton = styled.button`
  border: none;
  width: 20.4rem;
  background-color: lightblue;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0.2rem;
  height: 4rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButtonCross = styled.button`
  border: none;
  background-color: lightcoral;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0.2rem;
`;

const StatusButton = styled.button`
  border: none;
  width: 4rem;
  background-color: lightgreen;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0.2rem;
`;
const AddItemButton = styled.button`
  border: none;
  width: 10rem;
  background-color: lightblue;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0;
  margin: 0.2rem;
`;

const ProjectStatusButton = styled.button`
  border: none;

  background-color: lightgreen;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0;
  margin: 0.2rem;
`;
