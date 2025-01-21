import { HStack, Text, Stack, Flex, defineStyle } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});

const items = [
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    name: "Uchiha Sasuke",
  },
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c",
    name: "Baki Ani",
  },
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863",
    name: "Uchiha Chan",
  },
];

const users = [
  {
    id: "1",
    name: "John Mason",
    email: "john.mason@example.com",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "2",
    name: "Melissa Jones",
    email: "melissa.jones@example.com",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
];

export default function ExampleAvatar() {
  return (
    <Flex direction="column" align="center" gap="4" p="4">
      <HStack gap="4" align="center">
        <Avatar
          name="Dan Abramov"
          src="https://bit.ly/dan-abramov"
          shape="square"
          size="lg"
        />
        <Avatar
          name="Sage Adebayo"
          src="https://bit.ly/sage-adebayo"
          shape="rounded"
          size="lg"
        />
        <Avatar
          name="Random User"
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
          shape="full"
          size="lg"
        />
      </HStack>
      <HStack gap="4">
        <Avatar
          name="Random"
          colorPalette="pink"
          src="https://randomuser.me/api/portraits/men/70.jpg"
          css={ringCss}
        />
        <Avatar
          name="Random"
          colorPalette="green"
          src="https://randomuser.me/api/portraits/men/51.jpg"
          css={ringCss}
        />
        <Avatar
          name="Random"
          colorPalette="blue"
          src="https://randomuser.me/api/portraits/men/42.jpg"
          css={ringCss}
        />
      </HStack>
      <Stack>
        <AvatarGroup size="lg" stacking="last-on-top">
          {items.map((item) => (
            <Avatar key={item.name} src={item.src} name={item.name} />
          ))}
          <Avatar fallback="+3" />
        </AvatarGroup>

        <AvatarGroup size="lg" stacking="first-on-top">
          {items.map((item) => (
            <Avatar key={item.name} src={item.src} name={item.name} />
          ))}
          <Avatar fallback="+3" />
        </AvatarGroup>

        <AvatarGroup size="lg" spaceX="1" borderless>
          {items.map((item) => (
            <Avatar key={item.name} src={item.src} name={item.name} />
          ))}
          <Avatar fallback="+3" />
        </AvatarGroup>
      </Stack>
      <Stack gap="8">
        {users.map((user) => (
          <HStack key={user.email} gap="4">
            <Avatar name={user.name} size="lg" src={user.avatar} />
            <Stack gap="0">
              <Text fontWeight="medium">{user.name}</Text>
              <Text color="fg.muted" textStyle="sm">
                {user.email}
              </Text>
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Flex>
  );
}
