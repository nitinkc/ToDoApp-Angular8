# AWS

npn run build

Login to the AWS console --> s3

S3 can be used for providing static websites

S3 provided durability and availability

S3 as a service is global. The individual buckets are assigned in a region, but S3 as service does not need a region.

# Create a Bucket

Use AmazonS3 as the static site holder
Bucket needs to be in the same region as the rest back end.

while creating a bucket, Block public access (bucket settings)option should not be selected

In the bucket, use properties to host a static website.

Set the proper bucket policies
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::todo-app-angular8/*"
            ]
        }
    ]
}
```