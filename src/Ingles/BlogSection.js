import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './BlogSection.css'

const BlogSection = () => {
    const blogPosts = [
        {
            title: "Cómo mejorar tu pronunciación en inglés",
            author: "John Smith",
            date: "12 de marzo de 2023",
            image: "https://www.mentesliberadas.com/wp-content/uploads/2020/05/speak-app-1024x683.jpg",
            excerpt:
                "En este artículo te damos algunos consejos para mejorar tu pronunciación en inglés y sonar más natural al hablar.",
            link: "https://www.tooeasyenglish.com/blog/speaking-5/post/10-tips-para-mejorar-tu-pronunciacion-en-ingles-6",
        },
        {
            title: "Los phrasal verbs más comunes en inglés",
            author: "Sarah Johnson",
            date: "5 de marzo de 2023",
            image: "https://www.tecidiomas.es/uploads/noticias/3337/imagenes/phrasal-verbs-mas-usados.jpg",
            excerpt:
                "Aprende qué son los phrasal verbs y cuáles son los más comunes en inglés para mejorar tu comprensión del idioma.",
            link: "https://www.tecidiomas.es/es/noticias/phrasal-verbs-mas-usados",
        },
        {
            title: "Cómo prepararse para un examen de inglés",
            author: "David Lee",
            date: "28 de febrero de 2023",
            image: "https://blog.pearsonlatam.com/hubfs/como-estudiar-para-un-examen.jpg",
            excerpt:
                "Si estás pensando en presentar un examen de inglés, aquí te damos algunos consejos para prepararte de la mejor manera.",
            link: "https://blog.pearsonlatam.com/ingles-para-todos/como-estudiar-ingles-para-un-examen-trucos-utiles",
        },
    ];

    return (
        <section className="blog-section">
            <Container>
                <h2 className="section-title">El Blog para Aprender Inglés</h2>
                <Row>
                    {blogPosts.map((post, index) => (
                        <Col sm={12} md={6} lg={4} key={index}>
                            <Card className="my-3">
                                <Card.Img variant="top" src={post.image} alt={post.title} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Button href={post.link} variant="primary">
                                        Leer más
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        Publicado por {post.author} el {post.date}
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
                    </section>
    );
};

export default BlogSection;
