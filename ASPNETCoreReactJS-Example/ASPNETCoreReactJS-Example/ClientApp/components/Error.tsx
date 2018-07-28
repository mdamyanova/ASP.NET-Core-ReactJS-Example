import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid, Col, Row, Popover, ButtonToolbar, Button } from 'react-bootstrap';
import { ERROR_TEXT, REPOSITORY_URL } from '../utils/constants';

export class Error extends React.Component<RouteComponentProps<any>, any> {
    public render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <div>
                            <img src="baby-cow.jpg" alt="Baby Cow" />
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <div style={{ height: 120 }}>
                            <Popover
                                id="popover-basic"
                                placement="right"
                                positionTop={50}
                                title="Oops!">
                                {ERROR_TEXT}
                                <ButtonToolbar>
                                    <Button href={REPOSITORY_URL} target="_blank">help me</Button>
                                    <Button href='/'>ignore me</Button>
                                </ButtonToolbar>
                            </Popover>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}