# A very simple node CLI to upload files to a S3 bucket

This is a rudimentary implementation which just logs "error" or "success" if the task fails or succeed. **It should not be used in a sensitive production environment**.


# How to use

It's *stupid as fuck*:

## 1. Setup your credentials

The AWS SDK can load a credentials file at a specific location on the system, as documented here: [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)

## 2. Call the utility

`node /path/to/index.js bucket path/in/bucket /path/to/file`

The **Bucket Key** will be the same as the file name. 