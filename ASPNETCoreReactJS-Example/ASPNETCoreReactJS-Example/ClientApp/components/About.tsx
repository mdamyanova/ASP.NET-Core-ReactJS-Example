import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';

export class About extends React.Component<any, any> {
    public render() {
        return (
            <Grid className="about">
                <Row className="text-center">
                    <h3>This is our about page.</h3>
                    <p>Ellipsis loading icon by loading.io</p>
                    <p>Baby cow image by neko-kuma.deviantart.com</p>
                </Row>
            </Grid>
        );
    }
}