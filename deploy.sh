set -e

zip -r build.zip build

curl -H "Content-type: application/zip" \
     -H "Authorization: Bearer $NETLIFY_KEY" \
     --data-binary "@build.zip" \
     https://api.netlify.com/api/v1/sites/a604c795-a84d-412e-a317-36728c002042