import { Text, Box, Flex, HStack, Icon, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps ) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text >Luiz Carlos</Text>
                    <Text color="gray.300" fontSize="small">luiz.correa.dev@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Luiz Carlos" src="https://github.com/luizkrlz.png" />
        </Flex>
    )
}
