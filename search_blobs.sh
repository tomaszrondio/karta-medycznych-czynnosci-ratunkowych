#!/bin/bash
echo "Searching for 'jama brzuszna' or related terms in git objects..."
git fsck --lost-found 2>/dev/null | grep "dangling blob" | while read type hash; do
    content=$(git show "$hash" 2>/dev/null)
    if echo "$content" | grep -qi "jama\|brzusz\|JamaBrzuszna"; then
        echo "=== Found in blob $hash ==="
        echo "$content"
        echo "========================="
    fi
done
