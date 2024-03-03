FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db Products --collection products --type json --file /init.json --jsonArray