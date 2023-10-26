import { Divider, Flex, Heading } from "@aws-amplify/ui-react";
import ProjectCard from "../../ui-components/ProjectCard";
import HoverCard from "../../ui-components/HoverCard";

const Home = () => {
  return (
    <Flex gap="xxxl" direction="column">
      <Flex alignItems="center" direction="column" gap="xs">
        <Heading level={6} color="neutral.80">
          Hello there, I’m Jason
        </Heading>
        <Heading level={1} textAlign="center" width="50%">
          I build people-centric digital experiences
        </Heading>
      </Flex>
      <Flex direction="row" justifyContent="center">
        <HoverCard />
        <HoverCard />
      </Flex>
      <Flex direction="row" justifyContent="center">
        <Divider
          orientation="vertical"
          height="10rem"
          color="neutral.60"
          size="small"
        />
      </Flex>
      <Flex alignItems="center" direction="column" gap="xs">
        <Heading level={2} textAlign="center" width="70%">
          My mission is to build user-friendly and scalable digital products by
          balancing between user-centered design and code maintainability.
        </Heading>
      </Flex>
      <Flex alignItems="center" direction="column" gap="xs">
        <ProjectCard />
      </Flex>
    </Flex>
  );
};

export default Home;
