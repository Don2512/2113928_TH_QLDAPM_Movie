CREATE TABLE movie (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    photo VARCHAR(255),
    dayStart DATE,
    dayEnd DATE
);


INSERT INTO movie (name, description, photo, dayStart, dayEnd)
VALUES
    ('Cuộc Phiêu Lưu Của Pi', 'Một câu chuyện sống động về sự sinh tồn và tinh thần phiêu lưu.', 'https://upload.wikimedia.org/wikipedia/vi/5/57/Life_of_Pi_2012_Poster.jpg', '2024-01-01', '2024-01-31'),
    ('Hành Tinh Xanh', 'Khám phá vẻ đẹp kỳ diệu của thiên nhiên qua ống kính điện ảnh.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqIigOZJFMHTnfRWSlydwvbkOEwr9W22H1DVg137A0g&s', '2024-02-15', '2024-03-15'),
    ('Kẻ Cắp Mặt Trăng', 'Một câu chuyện hài hước và cảm động về kế hoạch đánh cắp mặt trăng.', 'https://upload.wikimedia.org/wikipedia/vi/d/db/Despicable_Me_Poster.jpg', '2024-03-22', '2024-04-22'),
    ('Vùng Đất Quỷ Dữ', 'Hành trình chiến đấu chống lại thế lực đen tối trong thế giới hậu tận thế.', 'https://static2.vieon.vn/vieplay-image/poster_v4/2021/07/12/5nh56axu_660x946-vungdatquydu1.jpg', '2024-05-05', '2024-06-05'),
    ('Chuyến Tàu Băng Giá', 'Cuộc sống sóng gió trên chuyến tàu cuối cùng của nhân loại.', 'https://upload.wikimedia.org/wikipedia/vi/2/29/Poster_phim_Chuy%E1%BA%BFn_t%C3%A0u_b%C4%83ng_gi%C3%A1_2014.jpg', '2024-07-01', '2024-07-31');
