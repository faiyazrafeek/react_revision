import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'


export default function Create() {
    return (
        <Container maxWidth="sm">
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
                >
                Create a New Note
            </Typography>
            <Button onClick={() => console.log("clicked")} type="submit" color="secondary" variant="contained">
                Submit
            </Button>            
        </Container>
    )
}
