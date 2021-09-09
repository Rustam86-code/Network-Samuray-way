import React from 'react';
import style from './user.module.css';


const Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
          <span>
              <div>
              <img src={u.photoUrl} className={style.userPhoto}/>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                      :<button onClick={()=> {props.follow(u.id)}}>Follow</button>}
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