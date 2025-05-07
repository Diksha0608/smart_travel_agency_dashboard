import React from 'react';
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (

    <div className="admin-layout" >AdminLayout
    <aside className="w-fill max-w-[270px] hiddenlg:block ">Sidebar</aside>
      <aside className="children">
        <Outlet/>

      </aside>

    </div>
  );
};
export default AdminLayout;
