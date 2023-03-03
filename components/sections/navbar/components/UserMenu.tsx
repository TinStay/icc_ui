import { useState } from "react";
import { Menu, Button, Box, Text } from "@mantine/core";
import { IconSettings, IconTrash } from "@tabler/icons";
import { UserButton } from "./UserButton";
import { onLogout } from "@/firebase/auth/helpers"; 

const UserMenu = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Menu
      shadow="md"
      radius="lg"
      width={300}
      opened={opened}
      onChange={setOpened}
    >
      <Menu.Target>
        <Box>
          {" "}
          <UserButton
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Ann Nullpointer"
            email="anullpointer@yahoo.com"
            isOpen={opened}
          />
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        {/* <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item> */}
        {/* <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item> */}
        {/* <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" color="dimmed">
              K
            </Text>
          }
        >
          Search
        </Menu.Item> */}

        <Menu.Divider />
        <Menu.Item
          color="red"
          icon={<IconTrash size={14} />}
          onClick={() => onLogout()}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
