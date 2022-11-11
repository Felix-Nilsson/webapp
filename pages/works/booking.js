import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BA-thesis">
    <Container>
      <Title>
        Booking System <Badge>2021</Badge>
      </Title>
      <P>
        For the course &quot;DAT257 Agile Software project management&ldquo; me
        and some other students built a booking system for university committee.
        It was successfully used during the fall reception.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link
            href="https://github.com/EpicMunz/agileDevelopmentDAT257"
            alt="Booking System"
            isExternal
          >
            agileDevelopmentDAT257
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>JavaScript/React</span>
        </ListItem>
      </List>
      <WorkImage src="/images/booking-thumbnail.jpg" alt="Title page" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
