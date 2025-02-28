select "actors"."firstName" as "fullName", "actors"."lastName" as "lastName"
from "castMembers"
join "films" using ("filmId")
join "actors" using ("actorId")
where "films"."title" = 'Jersey Sassy';
