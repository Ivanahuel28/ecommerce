CREATE TABLE IF NOT EXISTS product (
    id UUID PRIMARY KEY,
    code varchar(20) UNIQUE KEY, 
    name varchar(50) NOT NULL,
    company_id UUID,
    price float,
    stock int
);

/*CREATE TABLE IF NOT EXISTS userRole (
    id UUID PRIMARY KEY,
    name varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS user (
    id UUID PRIMARY KEY,
    name VARCHAR(50),
    lastname varchar(50),
    role_id UUID NOT NULL,
    company_id UUID NOT NULL,
    FOREIGN KEY (role_id) REFERENCES userRole (id),
    FOREIGN KEY (company_id) REFERENCES company (id)
);

CREATE TABLE IF NOT EXISTS company (
    id UUID PRIMARY KEY,
    name varchar(50) NOT NULL,
);

CREATE TABLE IF NOT EXISTS category (
    id UUID PRIMARY KEY,
    name varchar(50) NOT NULL,
    parent_category UUID,
    FOREIGN KEY (parent_category) REFERENCES category (id)
);

CREATE TABLE IF NOT EXISTS order (
    id UUID PRIMARY KEY,
    created_time TIMESTAMP,
    total float,
    customer UUID,
    company_id UUID,
    FOREIGN KEY (company_id) REFERENCES company (id)
);

CREATE TABLE IF NOT EXISTS orderDetail(
    id UUID PRIMARY KEY,
    order_id UUID,
    price float NOT NULL,
    quantity int NOT NULL,
    product_id UUID,
    FOREIGN KEY order_id REFERENCES order (id),
    FOREIGN KEY product_id REFERENCES product (id)
); */