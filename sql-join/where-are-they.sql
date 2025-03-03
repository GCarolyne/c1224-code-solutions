select "addresses"."line1" as "address",
"cities"."name" as "city",
"cities"."countryId" as "district",
"countries"."name" as "countries"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId")
