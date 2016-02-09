#!/bin/bash -e
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

$DIR/preversion.sh
$DIR/../frigging-bootstrap/scripts/preversion.sh
