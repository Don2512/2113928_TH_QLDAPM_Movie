


module.exports = class Movie {

    static async getAllListMove(req, res, next) { 
        try { 
          const data = [
            {
              "id": 1,
              "name": "Cuộc Phiêu Lưu Của Pi",
              "describe": "Một câu chuyện sống động về sự sinh tồn và tinh thần phiêu lưu.",
              "photo": "https://upload.wikimedia.org/wikipedia/vi/5/57/Life_of_Pi_2012_Poster.jpg",
              "dayStart": new Date("2024-01-01"),
              "dayEnd": new Date("2024-01-31")
            },
            {
              "id": 2,
              "name": "Hành Tinh Xanh",
              "describe": "Khám phá vẻ đẹp kỳ diệu của thiên nhiên qua ống kính điện ảnh.",
              "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqIigOZJFMHTnfRWSlydwvbkOEwr9W22H1DVg137A0g&s",
              "dayStart": new Date("2024-02-15"),
              "dayEnd": new Date("2024-03-15")
            },
            {
              "id": 3,
              "name": "Kẻ Cắp Mặt Trăng",
              "describe": "Một câu chuyện hài hước và cảm động về kế hoạch đánh cắp mặt trăng.",
              "photo": "https://upload.wikimedia.org/wikipedia/vi/d/db/Despicable_Me_Poster.jpg",
              "dayStart": new Date("2024-03-22"),
              "dayEnd": new Date("2024-04-22")
            },
            {
              "id": 4,
              "name": "Vùng Đất Quỷ Dữ",
              "describe": "Hành trình chiến đấu chống lại thế lực đen tối trong thế giới hậu tận thế.",
              "photo": "https://static2.vieon.vn/vieplay-image/poster_v4/2021/07/12/5nh56axu_660x946-vungdatquydu1.jpg",
              "dayStart": new Date("2024-05-05"),
              "dayEnd": new Date("2024-06-05")
            },
            {
              "id": 5,
              "name": "Chuyến Tàu Băng Giá",
              "describe": "Cuộc sống sóng gió trên chuyến tàu cuối cùng của nhân loại.",
              "photo": "https://upload.wikimedia.org/wikipedia/vi/2/29/Poster_phim_Chuy%E1%BA%BFn_t%C3%A0u_b%C4%83ng_gi%C3%A1_2014.jpg",
              "dayStart": new Date("2024-07-01"),
              "dayEnd": new Date("2024-07-31")
            }
          ]
          
          return data;
        } catch (error) {
            console.log(error)
        }
    }


}