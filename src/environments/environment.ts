export const environment = {
    production: false,
    sts_server: 'authentik.phalahomelab.xyz',
    auth_issuer: 'https://authentik.phalahomelab.xyz/application/o/todo-app/',
    auth_token_endpoint: 'https://authentik.phalahomelab.xyz/application/o/token/',
    auth_revocation_endpoint: 'https://authentik.phalahomelab.xyz/application/o/revoke/',
    auth_redicrect_uri: 'http://localhost:4200',
    auth_clientId: '7tdKKJaJAzCwNUx5XLUlrhCWzTI4FqoZoD43weDg',
    auth_response_type: 'code',
    auth_scope: 'openid profile email offline_access',
    auth_show_debug_information: true,
    backend_api_url: 'http://localhost:3001/api',
    backend_api: {
        area: {
            post: '/v1/area',
            get: '/v1/area'
        },
        area_user: {
            get: '/v1/area/user'
        },
        status: {
            get: '/v1/status'
        },
        label: {
            post: '/v1/label',
            get: '/v1/label'
        }
    }
};
