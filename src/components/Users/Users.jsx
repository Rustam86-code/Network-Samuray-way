import React from 'react';


const Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
          <span>
              <div>
              <img src="https://iconarchive.com/show/free-space-icons-by-goodstuff-no-nonsense/rick-icon.html"/>
              </div>
              <div>
                  <button>Follow</button>
              </div>
          </span>
            <span>
          <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
            <span>
            <div>{u.country}</div>
            <div>{u.city}</div>
            </span>
            </div>)}
    </div>
}

export default Users;