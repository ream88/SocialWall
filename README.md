```sh
npm install

# Your client id from https://instagram.com/developer/clients/manage
export CLIENT_ID="<YOUR_CLIENT_ID>"

# How long is each picture shown?
export INTERVAL=5

# The query run against the Instagram API.
# https://instagram.com/developer/endpoints
# Examples:
#
#   tags/yourtag/media/recent
#   media/popular
export QUERY="media/popular"

webpack
open index.html
```
