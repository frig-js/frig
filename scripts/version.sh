echo ""
echo "FRIG: UPDATING BOWER VERSION"
echo "======================================================="
VERSION=`npm version|grep -e "frig: '[0-9\.]*"|grep -E [0-9\.]+|grep -oE "[0-9\.]+"`
sed -i.bak -e "s/\"version\": \"[^\"]*\"/\"version\": \"$VERSION\"/g" bower.json
rm bower.json.bak
echo "DONE"

git add -A dist