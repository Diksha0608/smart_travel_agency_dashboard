import React from 'react';
import { Header } from '../../../components';
import { GridComponent } from '@syncfusion/ej2-react-grids';

const AllUsers = () => {
  return (
    <main className="all-users">
      <Header
        title="manage users"
        description="filter , sort and access detailed users profile"      />
      <GridComponent>

      </GridComponent>
    </main>
  );
export default AllUsers;
