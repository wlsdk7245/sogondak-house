export type typeRoomInfo = {
  type: string;
  number: number;
  desc: string;
  people: string;
  basic: string;
  photo: string[];
};

export const ObjectRoom = {
  101: {
    photo: [
      'https://velog.velcdn.com/images/wlsdk0313/post/4fc07dcf-a72e-4d48-a49a-41e09b9e0468/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/666f1c47-cf30-4629-a44d-ef19940f8177/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/8db291b9-7923-4c8b-9d26-91dafbc21d4b/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/f9b24200-d85d-40c0-94bc-2f36b36e82cf/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/9e04292b-c332-4881-8c0e-41b866ab5387/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/dd9f1403-334d-4bc1-93ab-bf99bb3068ba/image.jpg',
    ],
    type: 'Single Room',
    number: 101,
    desc: '백 패커 분들이 많이 찾아주시는 1인실 입니다.',
    people: '기준 1인 / 최대 1인',
    basic:
      '싱글 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  102: {
    photo: [
      'https://velog.velcdn.com/images/wlsdk0313/post/4f04dfe8-c3f2-4386-a50e-49a25f0056fd/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/ce70ddf0-97a3-401b-8999-61c5010157da/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/90cae741-5e4a-40de-994b-9311f9f3d23b/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/c1313b8e-bcf0-4567-bb1d-94b08ebce713/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/1f6f58a3-4cd9-4d95-a424-446c73991f7d/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/b9f2d439-807f-4c4c-a217-61138c2f365a/image.jpg',
    ],
    type: 'Double Room',
    number: 102,
    desc: '1-2인이 편안하게 쉬기 좋은 규모의 객실입니다.',
    people: '기준 2인 / 최대 2인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  201: {
    photo: [
      'https://velog.velcdn.com/images/wlsdk0313/post/4fc07dcf-a72e-4d48-a49a-41e09b9e0468/image.jpg',
    ],
    type: 'Deluxe Room',
    number: 201,
    desc: '1.5룸형 구조의 객실로 거실겸 주방과 침실 그리고 테라스로 구성되어있습니다.',
    people: '기준 2인 / 최대 4인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  202: {
    photo: [
      'https://velog.velcdn.com/images/wlsdk0313/post/4fc07dcf-a72e-4d48-a49a-41e09b9e0468/image.jpg',
    ],
    type: 'Deluxe Room',
    number: 202,
    desc: '원룸형 구조로 취사 가능한 객실 중 한달살이 예약이 가장 많습니다.',
    people: '기준 2인 / 최대 3인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  203: {
    photo: [
      'https://velog.velcdn.com/images/wlsdk0313/post/4fc07dcf-a72e-4d48-a49a-41e09b9e0468/image.jpg',
    ],
    type: 'Deluxe Room',
    number: 203,
    desc: '천창이 특징인 복층형 객실입니다. 계단이 가팔라서 안전상의 각별한 유의가 필요합니다.',
    people: '기준 2인 / 최대 4인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  204: {
    photo: [
      'https://velog.velcdn.com/images/wlsdk0313/post/4fc07dcf-a72e-4d48-a49a-41e09b9e0468/image.jpg',
    ],
    type: 'Double Room',
    number: 204,
    desc: '1-2인이 편안하게 쉬기 좋은 규모의 객실입니다.',
    people: '기준 2인 / 최대 2인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
};
