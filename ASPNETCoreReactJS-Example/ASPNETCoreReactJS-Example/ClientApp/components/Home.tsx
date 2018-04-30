import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid, Row } from 'react-bootstrap';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <Grid className="home">
                <Row className="text-center">
                    <h2>Hello!</h2>
                    <h4>This is an example of setting up an ASP.NET Core Web API and ReactJS with basic User Authentication. :)</h4>
                </Row>
            </Grid>
        );
    }
}