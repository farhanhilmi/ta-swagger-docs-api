import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Swagger = ({ url }) => {
    return (
        <div>
            <SwaggerUI url={url} />
        </div>
    );
};

export default Swagger;
