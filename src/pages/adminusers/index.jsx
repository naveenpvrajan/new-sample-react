import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

const pageSize = 10;
const AdminUsers = () => {
  const [adminusers, setadminusers] = useState();
  const [paginatedPosts, setpaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      console.log(res.data);
      setadminusers(res.data);
      setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
    });
  }, []);

  const pageCount = adminusers ? Math.ceil(adminusers.length / pageSize) : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const pagination = pageNo => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPosts = _(adminusers).slice(startIndex).take(pageSize).value();
    setpaginatedPosts(paginatedPosts);
  };

  return (
    <div>
      {!paginatedPosts ? (
        'No Data'
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPosts.map((admin, index) => (
              <tr key={index}>
                <td>{admin.id}</td>
                <td>{admin.userId}</td>
                <td>{admin.title}</td>
                <td>
                  <p className={admin.completed ? 'btn btn-success' : 'btn btn-danger'}>
                    {admin.completed ? 'Completed' : 'Pending'}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map(page => (
            <li className={page === currentPage ? 'page-item active' : 'page-item'}>
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminUsers;
