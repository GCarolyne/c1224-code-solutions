select "countries"."name" as "country-name",
count(*) as "cities in this country"
from "cities"
join "countries" using ("countryId")
group by "countries"."name"
order by "number-of-cities"DESC;
