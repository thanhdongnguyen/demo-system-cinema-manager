
CREATE TABLE `users` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(200) NOT NULL,
    is_active ENUM("active", "block") DEFAULT "active",
    token VARCHAR(50) DEFAULT NULL,
    created_at INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `movies` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT DEFAULT NULL,
    amount INT(11) DEFAULT 0,
    status ENUM("active", "block") DEFAULT "active",
    status_showing ENUM("prepare", "showing", "premiered") DEFAULT "prepare",
    created_at INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `movies_times` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    movie_id BIGINT NOT NULL,
    movie_time VARCHAR(10) NOT NULL,
    status ENUM("active", "block") DEFAULT "active",
    created_at INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `movies_items` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    movies_times_id BIGINT NOT NULL,
    code VARCHAR(150) NOT NULL,
    status ENUM("not_use", "used") DEFAULT "not_use",
    created_at INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `logs_transaction` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    transaction_id VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    movie_id BIGINT NOT NULL,
    movie_item_id BIGINT DEFAULT NULL,
    amount INT(11) DEFAULT 0,
    status ENUM("success", "pending", "fail", "rollback", "refund"),
    reason TEXT DEFAULT NULL,
    status_code INT(11) DEFAULT 0,
    response TEXT DEFAULT NULL,
    platform ENUM("admin_web", "ewallet", "other") NOT NULL,
    extra_info TEXT DEFAULT NULL,
    request_time INT(11) NOT NULL,
    confirm_time INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `movies_statistical` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    movie_id BIGINT NOT NULL,
    buy_count INT(11) DEFAULT 0,
    amount INT(11),
    timestamp datetime NOT NULL,
    updated_at INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `errors_response` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    status_code INT(11) NOT NULL,
    endpoint VARCHAR(200),
    response TEXT NOT NULL,
    created_at INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `movies_transaction_id` (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    timestamp INT(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;