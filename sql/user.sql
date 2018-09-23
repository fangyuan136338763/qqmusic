SET NAMES UTF8;
DROP DATABASE IF EXISTS music;
CREATE DATABASE music CHARSET=UTF8;
USE music;
CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16) NOT NULL,
    upwd VARCHAR(16) NOT NULL,
    phone VARCHAR(16) NOT NULL
);
INSERT INTO user VALUES(1,10000,123456,"13666666666");

CREATE TABLE music_family(
    fid INT PRIMARY KEY,
    family_name CHAR(16),

);
INSERT INTO music_family VALUES(10,"为你推荐");
INSERT INTO music_family VALUES(20,"70年代");
INSERT INTO music_family VALUES(30,"轻音乐"");
INSERT INTO music_family VALUES(40,"八音盒");
INSERT INTO music_family VALUES(50,"情歌");
INSERT INTO music_family VALUES(60,"网络歌曲");

CREATE TABLE commend_list(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    details VARCHAR(32),
    play_counts CHAR(16),
    pic VARCHAR(32),
    family_id INT,
    FOREIGIN KEY(family_id) REFERENCES music_family(fid)
);