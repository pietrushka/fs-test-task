FROM mongo

COPY init.json /init.json

# it reacreates products collection with seed data
CMD mongoimport --host mongodb --db Products --collection products --type json --file /init.json --jsonArray --drop
