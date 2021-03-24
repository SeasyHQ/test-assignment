/* Replace with your SQL commands */
create table amenity (
  code text primary key not null
);

create table marina_and_amenity (
  marina_id integer not null references marina(id),
  amenity_code text not null references amenity(code)
);
