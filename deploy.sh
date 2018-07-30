#!/usr/bin/env bash

BUCKET=blockwala.io
SOURCE_DIR=Users/karanahuja/Workspace/Websites/blockwala-website

echo "Removing all files on bucket"
aws s3 rm s3://${BUCKET} --recursive


echo "Attempting to upload site .."
echo "Command:  aws s3  sync $SOURCE_DIR s3://$BUCKET/"
aws s3  sync ${SOURCE_DIR} s3://${BUCKET}/
echo "S3 Upload complete"

echo "Invalidating cloudfrond distribution to get fresh cache"

echo "Deployment complete"  
aws cloudfront create-invalidation --distribution-id=E2CIE3OBKFOTZ5 --paths /
echo "deleted cache"
