/* Replace with your SQL commands */

create table country (
  code text primary key not null
);

create table city (
  code text primary key not null,
  --
  country_code text not null references country (code),
  lat real not null,
  lon real not null
);

create table photo (
  id integer not null primary key autoincrement,
  --
  url text not null
);

create table marina (
  id integer not null primary key autoincrement,
  --
  name text not null,
  city_code text not null references city (code),
  country_code text not null references country (code),
  lat real not null,
  lon real not null,
  photo_id integer references photo (id)
);
