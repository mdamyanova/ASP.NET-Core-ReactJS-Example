import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Example extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <h3>This is an example page.</h3>
        );
    }
}