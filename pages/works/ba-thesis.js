import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BA-thesis">
    <Container>
      <Title>
        Bachelors thesis <Badge>2022</Badge>
      </Title>
      <P>
        My bachelors thesis in computer science, which centered around
        generating multilingual wikipedia articles. It involved functional
        programming, getting a good understanding of linguistics as well as
        using databases to generate facts which can be understood by a human.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>PDF</Meta>
          <Link>
            Multilingual text robots for abstract wikipedia
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python/Grammatical Framework/SPARQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ba-thesis-thumbnail.jpg" alt="Inkdrop" />
      <WorkImage src="/images/works/ba-thesis-thumbnail2.jpg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
