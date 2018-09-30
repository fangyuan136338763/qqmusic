SET NAMES UTF8;
DROP DATABASE IF EXISTS music;
CREATE DATABASE music CHARSET=UTF8;
USE music;
CREATE TABLE music_user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16) NOT NULL,
    upwd VARCHAR(16) NOT NULL,
    phone VARCHAR(16) NOT NULL
);
INSERT INTO music_user VALUES(1,10000,123456,"13666666666");
-- 音乐分类
CREATE TABLE music_family(
    fid INT PRIMARY KEY,
    family_name VARCHAR(16)
);
INSERT INTO music_family VALUES(10,"为你推荐");
INSERT INTO music_family VALUES(20,"70年代");
INSERT INTO music_family VALUES(30,"轻音乐");
INSERT INTO music_family VALUES(40,"八音盒");
INSERT INTO music_family VALUES(50,"情歌");
INSERT INTO music_family VALUES(60,"网络歌曲");
-- 音乐分类
-- 推荐列表
CREATE TABLE commend_list(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    details VARCHAR(32),
    play_counts VARCHAR(16),
    src VARCHAR(32),
    family_id INT,
    FOREIGN KEY (family_id) REFERENCES music_family(fid)
);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000064vNo4NaaRL.jpg",10);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",10);

INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",20);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",20);

INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M00000366UYc2LOS6Q.jpg",30);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",30);

INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",40);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000004VgvaZ0X49jW.jpg",40);

INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",50);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001lrhtD2qmA34.jpg",50);

INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M0000043j7nD0s5HCY.jpg",60);
INSERT INTO commend_list VALUES(null,'每日新歌：Zedd混音单曲颠覆原作','3.1万',"img/T002R300x300M000001ny30V3PzBXh.jpg",60);
-- 推荐列表