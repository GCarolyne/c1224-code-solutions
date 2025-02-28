select "i"."filmId" as "dvd",
count(*) as "totalDVDS"
from "inventory" as "i"
group by "i"."filmId";
