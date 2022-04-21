import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ALL_ORDERS_LIST = gql`
  query ALL_ORDERS_LIST {
    allOrders {
      id
      name
      clientPrice
      expence
      personalExpence
      status
      dateCreated
    }
  }
`;

function Calculations() {
  const { data, error, loading, refetch } = useQuery(ALL_ORDERS_LIST);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    if (loading || error || !data) return <p>...грууузимся</p>;
    setProjectList([...data.allOrders]);
    console.log('projectList', projectList);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('projectList', projectList);

  if (projectList)
    return (
      <div>
        <OrdersTableHeader>
          <div>№</div>
          <div>Название</div>
          <div>Цена</div>
          <div>Затраты</div>
          <div>Личные затраты</div>
          <div>Дата создания</div>
          <div>
            <i className="fa fa-check" aria-hidden="true" />
          </div>
        </OrdersTableHeader>
        {projectList.map((project, index) => (
          <OrdersTable key={project.id}>
            <div>{index + 1}</div>
            <Link href={`edit/${project.id}`}>{project.name}</Link>
            <div>{project.clientPrice}</div>
            <div>{project.expence}</div>
            <div>{project.personalExpence}</div>
            <div>
              {new Date(project.dateCreated).getDate()}.
              {new Date(project.dateCreated).getMonth()}.
              {new Date(project.dateCreated).getFullYear()}
            </div>
            <div>
              {project.status === 'PROGRESS' ? (
                <i className="fa fa-truck" aria-hidden="true" />
              ) : (
                <i className="fa fa-check" aria-hidden="true" />
              )}
            </div>
          </OrdersTable>
        ))}

        <ResultsTableHeader>
          <div />
          <div />
          <div>
            {data.allOrders.reduce(
              (acc, order) => Number(acc + order.clientPrice),
              0
            )}
          </div>
          <div>
            {data.allOrders.reduce(
              (acc, order) => Number(acc + order.expence),
              0
            )}
          </div>
          <div>
            {data.allOrders.reduce(
              (acc, order) => Number(acc + order.personalExpence),
              0
            )}
          </div>
          <div />
          <div />
        </ResultsTableHeader>
      </div>
    );
}

export default Calculations;

const OrdersTable = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: 5% 30% 15% 15% 15% 20% 5%;
  & div,
  & a {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0.2rem;
    margin: 0.1rem;
    background-color: lightgray;
    font-size: 1rem;
  }
`;

const OrdersTableHeader = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: 5% 30% 15% 15% 15% 20% 5%;
  & div {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0.2rem;
    margin: 0.1rem;
    background-color: lightblue;
    font-size: 1rem;
    font-weight: bold;
  }
`;
const ResultsTableHeader = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: 5% 30% 15% 15% 15% 20% 5%;
  & div {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0.2rem;
    margin: 0.1rem;
    background-color: lightcoral;
    font-size: 1rem;
    font-weight: bold;
  }
`;
