import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBAthesis from '../public/images/ba-thesis-thumbnail.jpg'
import Layout from '../components/layouts/article'
//needs to have working heading
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="ba-thesis"
              title="Bachelors Thesis"
              thumbnail={thumbBAthesis}
            >
              My BA-thesis in computer science titled &quot;Multilingual text
              robots for abstract wikipedia&ldquo;.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works