const mainComment = document.querySelector('.comment_main-comment')
const mainBlog = document.querySelector('.comment_main-blog')
const app = {
    Comment: [
        {
          image: `https://www.galaxycine.vn/media/2022/1/4/no-time-to-die-ket-thuc-hoan-hao-cho-bond-7_1641305360345.jpg`,
          title: `[Review] No Time To Die: Kết Thúc "Hoàn Hảo" Cho Bond?`,
          like: `4,5`,
          eye: `209`,
          star: `8.6`,
          recommend: `Năm 2002, Pierce Brosnan tạm biệt 007 bằng Die Another Day. Năm 2021, Daniel Craig chia tay James Bond qua No Time To Die.`
        },
        {
          image: `https://www.galaxycine.vn/media/2022/1/4/happynewyear450x300_1641299634781.jpg`,
          title: `[Review] Happy New Year: “Viên Kẹo Ngọt” Xoa Dịu Mọi Tâm Hồn`,
          like: `1`,
          eye: `102`,
          star: `8.4`,
          recommend: `Có thể ví bộ phim Happy New Year như một “viên kẹo ngọt” giúp bạn xoa dịu tâm hồn, chữa lành mọi vết thương. Đồng thời nó cũng tiếp thêm nhiều sức mạnh...`
        },
        {
          image: `https://www.galaxycine.vn/media/2022/1/2/450_1641108151623.jpg`,
          title: `[Review] Rừng Thế Mạng: Câu Chuyện Sinh Tồn Đầy Hấp Dẫn Của Điện Ảnh Việt`,
          like: `2`,
          eye: `145`,
          star: `8.3`,
          recommend: `Rừng Thế Mạng của đạo diễn Trần Hữu Tấn ngoài việc sở hữu một kịch bản hấp dẫn, còn giới thiệu đến công chúng dàn diễn viên trẻ đầy triển vọng.`
        },
        {
          image: `https://www.galaxycine.vn/media/2021/12/20/review-no-way-home-chac-chan-la-phim-nhen-xuat-sac-nhat-tu-truoc-den-nay-1_1639936885285.jpg`,
          title: `[Review] Spider-Man No Way Home: Chắc Chắn Là Phim Nhện Xuất Sắc Nhất Từ Trước Đến Nay!`,
          like: `3`,
          eye: `1787`,
          star: `9`,
          recommend: `Hồi hộp, phấn khích, rúng động, đau lòng và tất nhiên là vô cùng thỏa mãn…`
        },
        {
          image: `https://www.galaxycine.vn/media/2021/12/13/spiderman450x300_1639397790426.png`,
          title: `[Preview] Spider-Man: No Way Home - “Năm Ăn Năm Thua”`,
          like: `2`,
          eye: `2250`,
          star: `9.2`,
          recommend: `Càng đến gần ngày khởi chiếu, độ bàn luận về phim trên các mặt báo, diễn đàn… càng trở nên xôm tụ. Thế nhưng cái gì cũng có hai mặt của nó!`
        },
    ],
    blog: [
      {
        image: `https://www.galaxycine.vn/media/2022/1/4/no-time-to-die-ket-thuc-hoan-hao-cho-bond-7_1641305360345.jpg`,
        title: `[Review] No Time To Die: Kết Thúc "Hoàn Hảo" Cho Bond?`,
        like: `4,5`,
        eye: `209`,
        star: `8.6`,
        recommend: `Năm 2002, Pierce Brosnan tạm biệt 007 bằng Die Another Day. Năm 2021, Daniel Craig chia tay James Bond qua No Time To Die.`
      },
      {
        image: `https://www.galaxycine.vn/media/2022/1/4/happynewyear450x300_1641299634781.jpg`,
        title: `[Review] Happy New Year: “Viên Kẹo Ngọt” Xoa Dịu Mọi Tâm Hồn`,
        like: `1`,
        eye: `102`,
        star: `8.4`,
        recommend: `Có thể ví bộ phim Happy New Year như một “viên kẹo ngọt” giúp bạn xoa dịu tâm hồn, chữa lành mọi vết thương. Đồng thời nó cũng tiếp thêm nhiều sức mạnh...`
      },
      {
        image: `https://www.galaxycine.vn/media/2022/1/2/450_1641108151623.jpg`,
        title: `[Review] Rừng Thế Mạng: Câu Chuyện Sinh Tồn Đầy Hấp Dẫn Của Điện Ảnh Việt`,
        like: `2`,
        eye: `145`,
        star: `8.3`,
        recommend: `Rừng Thế Mạng của đạo diễn Trần Hữu Tấn ngoài việc sở hữu một kịch bản hấp dẫn, còn giới thiệu đến công chúng dàn diễn viên trẻ đầy triển vọng.`
      },
      {
        image: `https://www.galaxycine.vn/media/2021/12/20/review-no-way-home-chac-chan-la-phim-nhen-xuat-sac-nhat-tu-truoc-den-nay-1_1639936885285.jpg`,
        title: `[Review] Spider-Man No Way Home: Chắc Chắn Là Phim Nhện Xuất Sắc Nhất Từ Trước Đến Nay!`,
        like: `3`,
        eye: `1787`,
        star: `9`,
        recommend: `Hồi hộp, phấn khích, rúng động, đau lòng và tất nhiên là vô cùng thỏa mãn…`
      },
      {
        image: `https://www.galaxycine.vn/media/2021/12/13/spiderman450x300_1639397790426.png`,
        title: `[Preview] Spider-Man: No Way Home - “Năm Ăn Năm Thua”`,
        like: `2`,
        eye: `2250`,
        star: `9.2`,
        recommend: `Càng đến gần ngày khởi chiếu, độ bàn luận về phim trên các mặt báo, diễn đàn… càng trở nên xôm tụ. Thế nhưng cái gì cũng có hai mặt của nó!`
      },
    ],

    rendecomment: function() {
      const htmlsComment = this.Comment.map((element, index) => {
        return `
        <div class="colums">
               <div class="comment_main-img">
                <img src="${element.image}"     alt="enternal">
              </div>  
              <div class="comment_main-content">
            <h6>${element.title}</h6>
            <div class="emotion">
              <button class="emotion_like">
                <i class="far fa-thumbs-up like"></i>
                <ion-icon class="yes" name="checkmark-outline"></ion-icon>
                Thích ${element.like}K
              </button>
              <div class="emotion_eys">
                <ion-icon name="eye-outline"></ion-icon>
                ${element.eye}
              </div>
              <div class="emotion_start">
                <div><span>${element.star}</span><span>/10(155)</span></div>
              </div>
            </div>
            <p>
             ${element.recommend}
            </p>
          </div>
          </div>
            `  
          });
          mainComment.innerHTML = htmlsComment.join("")
    },
    renderBlog: function() {
      const htmlsBlog = this.blog.map((element, index) => {
        return `
        <div class="colums">
               <div class="comment_main-img">
                <img src="${element.image}"     alt="enternal">
              </div>  
              <div class="comment_main-content">
            <h6>${element.title}</h6>
            <div class="emotion">
              <button class="emotion_like">
                <i class="far fa-thumbs-up like"></i>
                <ion-icon class="yes" name="checkmark-outline"></ion-icon>
                Thích ${element.like}K
              </button>
              <div class="emotion_eys">
                <ion-icon name="eye-outline"></ion-icon>
                ${element.eye}
              </div>
              <div class="emotion_start">
                <div><span>${element.star}</span><span>/10(155)</span></div>
              </div>
            </div>
            <p>
             ${element.recommend}
            </p>
          </div>
          </div>
            `  
          });
          mainBlog.innerHTML = htmlsBlog.join("")
    },
    start: function() {
      this.rendecomment()

      this.renderBlog()
    },
};
app.start()