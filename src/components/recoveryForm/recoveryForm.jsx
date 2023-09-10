import {Button, Container, Form, Input, Title } from "../forgotPasswordForm/styled";

const RecoveryForm = () => {
    return(
        <Container>
            <Title> Recovery Password</Title>
            <Form>
                <Input type="newPassword" placeholder="NewPassword"/>
                <Input type="confirmNewPassword" placeholder="confirmNewPassword"/>
                <Button>ENTER</Button>
            </Form>
        </Container>
    )
}

export default RecoveryForm;