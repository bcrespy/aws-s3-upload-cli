/**
 * @author ciphrd <https://ciphrd.com>
 * 
 * A simple CLI to upload a file to a Bucket.
 * 
 * The credentials must be set into a file at a specific location on the system, as required by the AWS SDK:
 * https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html
 * 
 * Usage:
 * node /path/to/index.js bucket path/in/bucket /path/to/file
 */

const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')

// get arguments
const bucket = process.argv[2]
const bucketPath = process.argv[3]
const filepath = process.argv[4]

console.log(`uploading "${filepath}" to the bucket "${bucket}"`)

// read the file from path
const buffer = fs.readFileSync(filepath)

// a key for the object, will be the filename by design constraints 
const key = path.basename(filepath)

// setup credentials from credentials file
AWS.config.getCredentials((error) => {
  // Set the region 
  AWS.config.update({
    region: 'eu-west-3'
  })

  // Create S3 service object
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01'
  })

  // call S3 to retrieve upload file to specified bucket
  var uploadParams = {
    Bucket: process.argv[2],
    Key: bucketPath + '/' + key, 
    Body: buffer,
  }

  // call S3 to retrieve upload file to specified bucket
  s3.upload(uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
    }
  })
})