import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Icon,
  List,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Subparagraph from '../components/subparagraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="md"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          align="center"
          mb={5}
        >
          👋 Hi! I am a computer science student based in Sweden
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Felix Nilsson
            </Heading>
            <p>Algorithms &</p>
            <p>Artificial Intelligence</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/felix.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <Paragraph>
            B.Sc Software Engineering - Chalmers University of Technology
          </Paragraph>
          <Subparagraph>(2019-2022)</Subparagraph>
          <Paragraph>
            M.Sc Computer Science - Chalmers University of Technology
          </Paragraph>
          <Subparagraph>(2022-Ongoing)</Subparagraph>

          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <BioSection>
            <BioYear>2023</BioYear>
            Internship, Healthcare Chatbot - AI Sweden
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            Internship, Data Analysis using Azure - Volvo
          </BioSection>

          <BioSection>
            <BioYear>2021</BioYear>
            Internship, Monitoring using Grafana - Volvo
          </BioSection>

        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            Hi! My name is Felix, and I am a 22 year old student studying
            computer science, based in Gothenburg, Sweden. My main focus areas
            are algorithms and AI. Want to get in touch? Contact me at one of
            the links below 👇:
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On The web
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:felix.nilsson.se@gmail.com">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={AiOutlineMail} />}
                >
                  felix.nilsson.se@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/Felix-Nilsson" isExternal="true">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Felix-Nilsson
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/felix-nilsson-20a0151b5/"
                isExternal="true"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Felix Nilsson
                </Button>{' '}
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
