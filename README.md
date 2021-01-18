# TODO before setup

* create a Glacier Vault on Amazon web services
* create a user with write access to the Vault 
* get user's credentials
* setup the credentials file for the JS SDK ([see doc](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html))
* [configure backup](https://www.cloudsavvyit.com/7782/how-to-backup-an-s3-bucket-and-why-youd-even-want-to/)


# TODOv2

* create a Bucket for the backup
* create a user with write-only rights to the bucket
* setup the credentials file ([see doc](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html))
* test the script by sending a file to the bucket using the CLI
* add to the backup CRON task this script to backup the database to S3