import { Button, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Lets go</Button>
    </Flex>
  );
}
