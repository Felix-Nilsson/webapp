import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBAthesis from '../public/images/ba-thesis-thumbnail.jpg'
import Layout from '../components/layouts/article'
import thumbBooking from '../public/images/booking-thumbnail.jpg'
import thumbMAIH from '../public/images/MAIH.png'

//needs to have working heading
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          My Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
            <WorkGridItem
              id="chatbot"
              title="Healthcare Chatbots"
              thumbnail={thumbMAIH}
            >
              A healthcare chatbot built for Sahlgrenska University Hospital, 
              during my internship at AI Sweden.
            </WorkGridItem>
          </Section>  
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
          <Section>
            <WorkGridItem
              id="booking"
              title="Booking System"
              thumbnail={thumbBooking}
            >
              A booking system me and some other students built for a course in
              agile software development.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
