import { useState } from "react";
import {
  createStyles,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Space,
} from "@mantine/core";
import SelectableBox from "./SelectableBox";
import { IconBuilding, IconHome, IconDoor, IconDoorEnter, IconKey, IconDots } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  box: {
    cursor: "pointer",
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 70, // Adjust the height to match your wireframe
    borderWidth: 1,
    borderColor: theme.colors.gray[4],
    borderRadius: theme.radius.md,
    backgroundColor: theme.white,
    "&:hover": {
      backgroundColor: theme.colors.gray[1],
    },
  },
  boxSelected: {
    borderColor: theme.colors.blue[6],
    backgroundColor: theme.colors.blue[0],
    color: theme.colors.blue[6],
  },
  input: {
    borderColor: theme.colors.gray[4],
  },
  textArea: {
    minHeight: 100, // Adjust to match your wireframe
    borderColor: theme.colors.gray[4],
  },
  group: {
    marginBottom: theme.spacing.md,
  },
}));

const propertyTypes = [
  { value: "house", icon: <IconHome size={24} />, label: "House" },
  {
    value: "apartment",
    icon: <IconBuilding size={24} />,
    label: "Apartment",
  },
  {
    value: "studio",
    icon: <IconDoor size={24} />,
    label: "Studio",
  },
];

const accessTypes = [
  {
    value: "open-the-door",
    icon: <IconDoorEnter size={24} />,
    label: "Someone will be there to open",
  },
  {
    value: "pick-up-key",
    icon: <IconKey size={24} />,
    label: "Pick up key from somewhere",
  },
  {
    value: "other",
    icon: <IconDots size={24} />,
    label: "Other",
  },
];

// Step 2: Property Details
const PropertyDetailsStep = ({
  selectedPropertyType,
  onPropertyTypeChange,
  selectedAccess,
  onAccessTypeChange,
}) => {
  const { classes } = useStyles();

  return (
    <>
      {/* Select Property Type */}
      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {propertyTypes.map((propertyType) => (
          <SelectableBox
            key={propertyType.value}
            icon={propertyType.icon}
            label={propertyType.label}
            value={propertyType.value}
            selectedValue={selectedPropertyType}
            onChange={onPropertyTypeChange}
          />
        ))}
      </SimpleGrid>
      <Space h="2rem" />

      {/* Address Details */}
      <Group className={classes.group} grow>
        <TextInput
          classNames={{ input: classes.input }}
          label="Zip Code"
          placeholder="Enter your zip code"
          required
        />
        <TextInput
          classNames={{ input: classes.input }}
          label="Street Number"
          placeholder="Enter your street number"
          required
        />
      </Group>
      <Space h="2rem" />

      {/* Access Types */}
      <SimpleGrid
        cols={3}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {accessTypes.map((accessType) => (
          <SelectableBox
            key={accessType.value}
            icon={accessType.icon}
            label={accessType.label}
            value={accessType.value}
            selectedValue={selectedAccess}
            onChange={onAccessTypeChange}
          />
        ))}
      </SimpleGrid>
      <Space h="2rem" />

      <Textarea
        classNames={{ input: classes.textArea }}
        label="Notes to cleaners / Specific requests"
        placeholder="Enter any notes or specific requests"
      />

      
    </>
  );
};

export default PropertyDetailsStep;
