// src/components/Admin/UserAuthenticationManagement/index.js

import React, { useState } from 'react';
import { Container, Sidebar, SidebarButton, Content, Title } from '../UIComponents';
import UserList from './UserList';
import RoleManagement from './RoleManagement';
import AuthLogs from './AuthLogs';
import SecuritySettings from './SecuritySettings';
import UserProfile from './UserProfile';
import Permissions from './Permissions';

const UserAuthenticationManagement = () => {
  const [activePage, setActivePage] = useState("userList");

  return (
    <Container>
      <Sidebar>
        <Title>User Authentication Management</Title>
        <SidebarButton onClick={() => setActivePage("userList")}>User List</SidebarButton>
        <SidebarButton onClick={() => setActivePage("roleManagement")}>Role Management</SidebarButton>
        <SidebarButton onClick={() => setActivePage("authLogs")}>Authentication Logs</SidebarButton>
        <SidebarButton onClick={() => setActivePage("securitySettings")}>Security Settings</SidebarButton>
        <SidebarButton onClick={() => setActivePage("userProfile")}>User Profile</SidebarButton>
        <SidebarButton onClick={() => setActivePage("permissions")}>Permissions Management</SidebarButton>
      </Sidebar>

      <Content>
        {activePage === "userList" && <UserList />}
        {activePage === "roleManagement" && <RoleManagement />}
        {activePage === "authLogs" && <AuthLogs />}
        {activePage === "securitySettings" && <SecuritySettings />}
        {activePage === "userProfile" && <UserProfile />}
        {activePage === "permissions" && <Permissions />}
      </Content>
    </Container>
  );
};

export default UserAuthenticationManagement;
