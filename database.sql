create TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  fullname VARCHAR(255),
  password_user VARCHAR(255),
);

create TABLE guards(
  id SERIAL PRIMARY KEY,
  guard_login VARCHAR(255),
  guard_fullname VARCHAR(255),
  password_guard VARCHAR(255),
);

create TABLE tasks(
  id SERIAL PRIMARY KEY,
  task_date DATE,
  coordinates INT[],
  task_description VARCHAR(255),
);
