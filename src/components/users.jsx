import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  function handleDelete(userID) {
    setUsers((prevState) => prevState.filter((item) => item._id !== userID));
  }
  const renderPhrase = (number) => {
    return users.length === number;
  };
  function renderTableBody() {
    return users.map(function (item) {
      return (
        <tr key={item._id}>
          <td>{item.name}</td>
          {item.qualities.map((item) => {
            console.log(item.color);
            return (
              <td className={`badge  m-2 bg-${item.color}`}>{item.name}</td>
            );
          })}
          <td>{item.profession.name}</td>
          <td>{item.completedMeetings}</td>
          <td>{item.rate + "/5"}</td>
          <td>
            {
              <button
                type="button"
                className="btn btn-danger position-relative"
                onClick={() => handleDelete(item._id)}
              >
                delete
              </button>
            }
          </td>
        </tr>
      );
    });
  }
  if (renderPhrase(12)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            12 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(11)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            11 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(10)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            10 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(9)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            9 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(8)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            8 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(7)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            7 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(6)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            6 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(5)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            5 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(4)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            4 человека тусанут с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(3)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            3 человека тусанут с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(2)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            2 человека тусанут с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  if (renderPhrase(1)) {
    return (
      <>
        <h3>
          <span className="badge rounded-pill bg-primary">
            1 человек тусанет с тобой сегодня
          </span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>{renderTableBody()}</tbody>
        </table>
      </>
    );
  }
  return (
    <>
      {" "}
      <h3>
        <span className="badge rounded-pill bg-danger">
          Никто с тобой не тусанет
        </span>
      </h3>
    </>
  );
};

export default Users;
