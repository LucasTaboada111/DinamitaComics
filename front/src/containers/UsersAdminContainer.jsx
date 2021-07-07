import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersForAdmin,setAdmin } from "../store/usersForAdmin";
import UsersForAdmin from "../components/UsersAdmin";


const UsersAdminContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersForAdmin)
  const userLogged= useSelector(state=>state.user)
  

  const handleClick = (id)=>{
    if(id == userLogged.id){
        alert("no podes revocarte los permisos a vos mismo")
    }
    else if (id !== userLogged.id){
        dispatch(setAdmin(id)).then(()=>{
          dispatch(getUsersForAdmin())
        })
    }
  }


  useEffect(() => {
    dispatch(getUsersForAdmin());
  }, []);


  






  return (
    <div>
      <UsersForAdmin users={users} handleClick={handleClick} userLogged={userLogged} />
    </div>
  );
};

export default UsersAdminContainer;
