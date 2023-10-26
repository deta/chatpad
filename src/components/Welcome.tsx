import {
 Container,
 Badge,
 SimpleGrid,
 ThemeIcon,
 Flex,
 Button,
 Text,
 Title,
} from "@mantine/core";
import {
 IconCurrencyDollar,
 IconKey,
 IconLock,
 IconNorthStar,
} from "@tabler/icons-react";

import { CreateChatButton } from "./CreateChatButton";
import { LogoIcon } from "./Logo";
import { SettingsModal } from "./SettingsModal";
import { useIncognitoMode, useSettings } from "../hooks/contexts";

const features = [
 {
  icon: IconCurrencyDollar,
  title: "Free and open source",
  description:
   "This app is provided for free and the source code is available on GitHub.",
 },
 {
  icon: IconLock,
  title: "Privacy focused",
  description:
   "No tracking, no cookies, no bullshit. All your data is stored in your personal cloud computer.",
 },
 {
  icon: IconNorthStar,
  title: "Best experience",
  description:
   "Crafted with love and care to provide the best experience possible.",
 },
];

export function Welcome() {
 const { settings } = useSettings();
 const { incognitoMode } = useIncognitoMode();

 return (
  <Container size="sm">
   <Badge mb="lg">GPT-4 Ready</Badge>
   <Flex gap="md" align="center">
    <LogoIcon w={48} />
    <Title order={1}>Dialogue</Title>
   </Flex>

   <Text mt={4} size="xl">
    Not just another ChatGPT user-interface!
   </Text>
   <SimpleGrid
    mt={50}
    cols={3}
    spacing={30}
    breakpoints={[{ maxWidth: "md", cols: 1 }]}
   >
    {features.map((feature) => (
     <div key={feature.title}>
      <ThemeIcon variant="outline" size={50} radius={50}>
       <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
       {feature.title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
       {feature.description}
      </Text>
     </div>
    ))}
   </SimpleGrid>
   <Flex mt={50} align="center" gap="md" wrap="wrap">
    {settings?.openAiApiKey && (
     <CreateChatButton size="md">
      {incognitoMode ? "Create a New Private Chat" : "Create a New Chat"}
     </CreateChatButton>
    )}
    <SettingsModal>
     <Button
      size="md"
      variant={settings?.openAiApiKey ? "light" : "filled"}
      leftIcon={<IconKey size={20} />}
     >
      {settings?.openAiApiKey ? "Change OpenAI Key" : "Enter OpenAI Key"}
     </Button>
    </SettingsModal>
   </Flex>
  </Container>
 );
}
