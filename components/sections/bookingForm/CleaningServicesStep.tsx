// components/CleaningServicesStep.tsx

import { Group, SimpleGrid, Text } from "@mantine/core";
import { IconFridge, IconHome, IconArrowBounce, IconTools } from "@tabler/icons";
import SelectableBox from "./SelectableBox";

const CleaningServicesStep = ({
  selectedValue,
  onChange,
}: {
  selectedValue: string;
  onChange: (value: string) => void;
}) => {
  const services = [
    { value: "move-out", icon: <IconHome size={24} />, label: "Move-out Cleaning" },
    {
      value: "deep-cleaning",
      icon: <IconFridge size={24} />,
      label: "Deep Cleaning",
    },
    {
      value: "basic-cleaning",
      icon: <IconArrowBounce size={24} />,
      label: "Basic Cleaning",
    },
    {
      value: "post-construction",
      icon: <IconTools size={24} />,
      label: "Post construction",
    },
  ];

  return (
    <>
      <Text size="sm" style={{ marginBottom: 16 }}>
        Please select the type of cleaning service you require:
      </Text>
      <SimpleGrid cols={2} spacing="lg">
        {services.map((service) => (
          <SelectableBox
            key={service.value}
            icon={service.icon}
            label={service.label}
            value={service.value}
            selectedValue={selectedValue}
            onChange={onChange}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CleaningServicesStep;
