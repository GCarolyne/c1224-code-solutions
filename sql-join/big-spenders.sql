select customers."firstName", customers."lastName", payments.amount, payments.*
from "customers"
join "payments" on "customers"."customerId" = "payments"."customerId"
order by payments.amount DESC
LIMIT 10;
