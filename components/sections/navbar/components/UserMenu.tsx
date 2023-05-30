import { useEffect, useState } from "react";
import { Menu, Button, Box, Text } from "@mantine/core";
import { IconSettings, IconTrash } from "@tabler/icons";
import { UserButton } from "./UserButton";
import { getCurrentUser, onLogout } from "@/firebase/auth/helpers";

const UserMenu = () => {
  const [opened, setOpened] = useState(false);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    let user: any = await getCurrentUser();
    setUser(user);
  };

  // Fetch user data 
  useEffect(() => {
    getUser();
  }, []);

  // Display to user info
  let userName = user ? `${user.FirstName} ${user.LastName}` : "Unknown User"
  let userEmail = user ? `${user.Email}` : ""
  let userImage = user ? `${user.ImageURL}` : "@/public/defaultUser.png"

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
            image={userImage}
            name={userName}
            email={userEmail}
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
