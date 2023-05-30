import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

import {
  Modal,
  Table,
  Text,
  Button,
  Box,
  ActionIcon,
  Menu,
} from "@mantine/core";
// import { useSelectableList } from "@mantine/hooks";
import { IconSettings, IconTrash } from "@tabler/icons";
import { Subscription } from "@/types";
import { IconDotsVertical, IconListDetails } from "@tabler/icons";
import { SubscriptionAction } from "@/constants";

interface Props {
  data: Subscription[];
}

const SubscriptionsTable = ({ data }: Props) => {
  const [activeSubscription, setActiveSubscription] =
    useState<Subscription | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const openDataModal = (action) => {
    open();
    switch (action) {
      case SubscriptionAction.VIEW:
        break;
      case SubscriptionAction.EDIT:
        break;
      case SubscriptionAction.DELETE:
        break;

      default:
        break;
    }
  };

  const handleAddSubscription = () => {
    // TODO: Implement add subscription functionality
  };

  const handleEditSubscriptions = () => {
    // TODO: Implement edit subscriptions functionality
  };

  return (
    <Box sx={{ maxWidth: "90%", margin: "2rem auto" }}>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box>
          <Button
            variant="outline"
            onClick={handleAddSubscription}
            sx={{ marginRight: "10px" }}
          >
            Add Subscription
          </Button>
        </Box>
      </Box>
      <Table
        style={{ marginTop: "16px" }}
        // highlightOnHover
        // striped
        // shadow="md"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Type</th>
            <th>Monthly Hours</th>
            <th>Cleaning Frequency</th>
            <th>All Cleaning Types</th>
            <th>Default Cleaning Types</th>
            <th>Default Priority</th>
            <th>Notes</th>
            <th>Cleaners</th>
            <th>Managers</th>
            <th>Users</th>
            <th>Activation Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ position: "relative" }}>
          {data.map((subscription) => (
            <tr
              key={subscription.ID}
              style={{
                // backgroundColor: selected.includes(subscription.ID)
                //   ? "#F8F8F8"
                //   : undefined,
                cursor: "pointer",
              }}
              //   {...handlers}
              data-value={subscription.ID}
            >
              {/* <td>
                <input
                  type="checkbox"
                //   checked={selected.includes(subscription.ID)}
                  onChange={() => {}}
                  style={{ cursor: "pointer" }}
                />
              </td> */}
              <td>
                <Text>{subscription.ID.toString()}</Text>
              </td>
              <td>
                <Text>
                  {subscription.Address.Street}, {subscription.Address.City}
                </Text>
              </td>
              <td>
                <Text>{subscription.SubscriptionType}</Text>
              </td>
              <td>
                <Text>{subscription.MonthlyHours}</Text>
              </td>
              <td>
                <Text>{subscription.CleaningFrequency}</Text>
              </td>
              <td>
                <Text>{subscription.AllCleaningTypes.join(", ")}</Text>
              </td>
              <td>
                <Text>{subscription.DefaultCleaningTypes.join(", ")}</Text>
              </td>
              <td>
                <Text>{subscription.DefaultPriority}</Text>
              </td>
              <td>
                <Text>{subscription.Notes}</Text>
              </td>
              <td>
                <Text>{subscription.Cleaners.length}</Text>
              </td>
              <td>
                <Text>{subscription.Managers.length}</Text>
              </td>
              <td>
                <Text>{subscription.Users.join(", ")}</Text>
              </td>
              <td>
                <Text>{subscription.ActivationCode}</Text>
              </td>
              <td>
                <Menu shadow="md" width={200} position="bottom">
                  {/* Open row menu */}
                  <Menu.Target>
                    <ActionIcon size="lg">
                      <IconDotsVertical />
                    </ActionIcon>
                  </Menu.Target>
                  {/* Menu options */}
                  <Menu.Dropdown
                    onClick={() => setActiveSubscription(subscription)}
                  >
                    <Menu.Label>Actions</Menu.Label>
                    <Menu.Item
                      icon={<IconListDetails size={14} />}
                      onClick={() => openDataModal(SubscriptionAction.VIEW)}
                    >
                      View details
                    </Menu.Item>
                    <Menu.Item
                      icon={<IconSettings size={14} />}
                      onClick={() => openDataModal(SubscriptionAction.EDIT)}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    {/* <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
                      Transfer my data
                    </Menu.Item> */}
                    <Menu.Item
                      color="red"
                      icon={<IconTrash size={14} />}
                      onClick={() => openDataModal(SubscriptionAction.DELETE)}
                    >
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Subscription action modal */}
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>
    </Box>
  );
};

export default SubscriptionsTable;
