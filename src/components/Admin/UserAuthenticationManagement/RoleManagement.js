// src/components/Admin/UserAuthenticationManagement/RoleManagement.js

import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const RoleManagement = () => {
  const [roles, setRoles] = useState(["Admin", "Editor", "Viewer"]);
  const [newRole, setNewRole] = useState("");

  const addRole = () => {
    setRoles([...roles, newRole]);
    setNewRole("");
  };

  const deleteRole = (roleToDelete) => {
    setRoles(roles.filter((role) => role !== roleToDelete));
  };

  return (
    <div>
      <h3>Role Management</h3>
      <TextField
        label="New Role"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ marginBottom: "1rem" }}
      />
      <Button variant="contained" color="primary" onClick={addRole}>Add Role</Button>
      <List>
        {roles.map((role) => (
          <ListItem key={role}>
            <ListItemText primary={role} />
            <IconButton edge="end" color="secondary" onClick={() => deleteRole(role)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RoleManagement;
