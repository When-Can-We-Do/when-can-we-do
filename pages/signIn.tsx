import { Inter } from "@next/font/google";
import Link from "next/link";
import { Card, Button, Box, Grid, Center } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function SignIn() {
  return (
    <>
      <Box className="h-screen">
        <Box className="w-full h-full flex justify-center content-center flex-wrap">
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="w-96 min-h-96 pt-[14px]"
          >
            <Grid columns={7} gutter={0}>
              <Grid.Col span={7} className="text-4xl text-center mb-5 mt-10">
                When Can We Do?
              </Grid.Col>
              <Grid.Col span={7} className="text-2xl text-center mb-8">
                Where all tasks come<br></br> to get done
              </Grid.Col>
              <Grid.Col span={7} className="mb-10">
                <Link href="/tasks">
                  <Center>
                    <Button
                      type="submit"
                      variant="gradient"
                      gradient={{ from: "#045DE9", to: "#09C6F9", deg: 35 }}
                      className="color align-center text-lg"
                    >
                      Sign In
                    </Button>
                  </Center>
                </Link>
              </Grid.Col>
            </Grid>
          </Card>
        </Box>
      </Box>
    </>
  );
}
