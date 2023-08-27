import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chatbot">
    <Container>
      <Title>
        Booking System <Badge>2021</Badge>
      </Title>
      <P>
      As part of AI Sweden&apos;s &quot;GPT Summer Internship&ldquo;
      for the summer of 2023, our group collaborated with VGR (Sahlgrenska University Hospital) 
      in Gothenburg to build a proof of concept of using LLMs in a healthcare context.
      To this end we implemented <Link
            href="https://www.pinecone.io/learn/retrieval-augmented-generation/"
            alt="pinecone:retrieval-augmented-generation"
            isExternal
          >
            Retrieval-Augmented-Generation
            <ExternalLinkIcon mx="2px" />
        </Link>
        using the OpenAI API and ChromaDB, and made an accompanying website using flask and SvelteKit.    
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link
            href="https://github.com/Felix-Nilsson/gpt-internship"
            alt="Booking System"
            isExternal
          >
            gpt-internship
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>python/sveltekit</span>
        </ListItem>
      </List>
      <WorkImage src="/images/MAIH.png" alt="Title page" />
      <WorkImage src="/images/demo_patient.gif" alt="A patient interaction example" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
