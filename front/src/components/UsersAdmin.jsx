import React from "react"
import { OrderList } from "primereact/orderlist"
import { Button } from "primereact/button"
const UsersForAdmin = ({ users, handleClick }) => {
  console.log(users)
  const itemTemplate = item => {
    return (
      <div className="product-item">
        <div className="product-list-detail">
          <h5 className="p-mb-2">Name - {item.fullname} -</h5>
          <h6 className="p-mb-2">- Admin: {item.isAdmin ? "Yes" : "No"}</h6>
          <h6 className="p-mb-2">- Email: {item.email}</h6>
          <h6 className="p-mb-2">- Country: {item.country}</h6>
          <h6 className="p-mb-2">- Address: {item.address}</h6>
          <h6 className="p-mb-2">- Phone: {item.phone}</h6>
        </div>
        <div className="product-list-action">
          <span className="p-buttonset">
            <Button
              label="ToggleAdmin"
              icon="pi pi-pencil"
              className="p-button-outlined p-button-info"
              onClick={e => handleClick(item.id, e)}
            />
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="orderlist-demo">
        <div className="card">
          <OrderList
            value={users ? users : []}
            itemTemplate={itemTemplate}
            header="Users"></OrderList>
        </div>
      </div>
    </>
  )
}

export default UsersForAdmin
