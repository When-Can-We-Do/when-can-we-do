import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  Grid,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AddTask() {
  return (
    <Box className="h-screen">
      <Box className="w-full h-full flex justify-center content-center flex-wrap">
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          className="w-96 min-h-96"
        >
          <Grid columns={7} gutter={0}>
            <Grid.Col span={7} className="text-3xl">
              Add Task
            </Grid.Col>
            <Stack className="mt-2 w-full">
              <TextInput
                label="Task Name"
                placeholder='e.g. "Do homework"'
                required
              />
              <Textarea
                label="Task Description"
                placeholder='e.g. "Complete HCI homework assignment and then start networking HW"'
                minRows={4}
              />
              <DatePicker
                allowFreeInput
                placeholder="Pick date"
                label="Event date"
                withAsterisk
              />
            </Stack>
            <Grid.Col span={7}>
              <Group mt="md" position="apart">
                <Button color="red">Cancel</Button>
                <Button
                  type="submit"
                  variant="gradient"
                  gradient={{ from: "#045DE9", to: "#09C6F9", deg: 35 }}
                  className="color"
                >
                  Save
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}
