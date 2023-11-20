// components/BookingForm.tsx

import { useState } from "react";
// Components
import CleaningServicesStep from "./CleaningServicesStep";
import PropertyDetailsStep from "./PropertyDetailsStep";

// Mantine
import { Container, Stepper, Paper, Group, Button } from "@mantine/core";

type StepContentProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const BookingForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedAccess, setSelectedAccess] = useState('');

  const StepContent = ({ step, setStep }: StepContentProps) => {
    switch (step) {
      case 0:
        return (
          <CleaningServicesStep
            selectedValue={selectedService}
            onChange={setSelectedService}
          />
        );
      case 1:
        return (
          <PropertyDetailsStep
            selectedPropertyType={selectedPropertyType}
            onPropertyTypeChange={(value) => setSelectedPropertyType(value)}
            selectedAccess={selectedAccess}
            onAccessTypeChange={(value) => setSelectedAccess(value)}
          />
        );
      default:
        return null;
    }
  };

  const nextStep = () => setActiveStep((currentStep) => currentStep + 1);
  const prevStep = () => setActiveStep((currentStep) => currentStep - 1);

  const isLastStep = activeStep === 4; // Assuming there are 5 steps (0 to 4)
  const isFirstStep = activeStep === 0;

  return (
    <Container size="lg">
      <Paper
        shadow="lg"
        radius="xl"
        style={{
          backgroundColor: "white",
          //   height: "500px", // Set your desired height
          margin: "auto", // This centers the Paper horizontally
          overflow: "auto", // Adds a scrollbar if the content is too tall
        }}
      >
        <Stepper
          active={activeStep}
          onStepClick={setActiveStep}
          orientation="horizontal"
          style={{ marginBottom: "20px", margin: "30px" }} // Add space between stepper and form
        >
          <Stepper.Step label="Specify Details" />
          <Stepper.Step label="View Quote" />
          <Stepper.Step label="Complete Booking" />
          {/* <Stepper.Step label="Quote" />
          <Stepper.Step label="Payment" /> */}
        </Stepper>

        <Container size="md">
          <StepContent step={activeStep} setStep={setActiveStep} />
        </Container>
        {/* Navigation buttons */}
        <Group position="right" style={{ margin: "20px" }}>
          {!isFirstStep && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {!isLastStep && <Button onClick={nextStep}>Next</Button>}
          {isLastStep && (
            <Button onClick={() => console.log("Submit form")}>Submit</Button>
          )}
        </Group>
      </Paper>
    </Container>
  );
};

export default BookingForm;
