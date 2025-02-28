select "firstName","lastName",
sum("amount") as "total"
from "customers"
join "payments" using ("customerId")
group by "firstName","lastName"
order by "total" desc;
