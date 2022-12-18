export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "startupNotJustDev": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "startupNotJustDev": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3startupnotjustdevstorage0797bebc": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}