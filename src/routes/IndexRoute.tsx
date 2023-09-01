import {
  Badge,
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCurrencyDollar,
  IconKey,
  IconLock,
  IconNorthStar,
} from "@tabler/icons-react";
import { Logo } from "../components/Logo";
import { SettingsModal } from "../components/SettingsModal";
import { useSettings } from "../hooks/contexts";
import { CreateChatButton } from "../components/CreateChatButton";

export function IndexRoute() {
  const { settings } = useSettings()
  const theme = useMantineTheme()

  return (
    <>
      <Center py="xl" sx={{ height: "100%" }}>
        <Container size="sm">
          <Badge mb="lg">GPT-4 Ready</Badge>
          <Text>
            <Logo style={{ maxWidth: 240 }} color1={theme.colors[theme.primaryColor][3]} color2={theme.colors[theme.primaryColor][7]} />
          </Text>
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
          <Flex mt={50} align='center' gap='md'>
              {settings?.openAiApiKey && (
                <CreateChatButton size="md">
                  Create a New Chat
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
      </Center>
    </>
  );
}

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
      "No tracking, no cookies, no bullshit. All your data is stored locally.",
  },
  {
    icon: IconNorthStar,
    title: "Best experience",
    description:
      "Crafted with love and care to provide the best experience possible.",
  },
];
