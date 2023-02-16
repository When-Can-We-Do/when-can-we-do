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
import Head from "next/head";
import Link from "next/link";

export default function AddTask() {
  return (
    <>
      <Head>
        <title>When Can We Do</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="h-screen bg-white">
        <Box className="w-full h-full flex justify-center content-center flex-wrap">
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="w-96 min-h-96 pt-[14px]"
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
                  label="Task Date"
                  withAsterisk
                />
              </Stack>
              <Grid.Col span={7}>
                <Group mt="md" position="apart">
                  <Link href="/">
                    <Button color="red">Cancel</Button>
                  </Link>
                  <Link href="/">
                    <Button
                      type="submit"
                      variant="gradient"
                      gradient={{ from: "#045DE9", to: "#09C6F9", deg: 35 }}
                      className="color"
                    >
                      Save
                    </Button>
                  </Link>
                </Group>
              </Grid.Col>
            </Grid>
          </Card>
        </Box>
      </Box>
    </>
  );
}
