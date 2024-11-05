import Container from '@mui/material/Container';

function PageContainer(props:any) {
    return (
   
      <Container maxWidth="md">
        {props.children}
      </Container>
    )
}

export default PageContainer