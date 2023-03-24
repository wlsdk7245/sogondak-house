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
      'https://velog.velcdn.com/images/wlsdk0313/post/666f1c47-cf30-4629-a44d-ef19940f8177/image.jpg',

      'https://velog.velcdn.com/images/wlsdk0313/post/4fc07dcf-a72e-4d48-a49a-41e09b9e0468/image.jpg',
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
      'https://velog.velcdn.com/images/wlsdk0313/post/c1313b8e-bcf0-4567-bb1d-94b08ebce713/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/90cae741-5e4a-40de-994b-9311f9f3d23b/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/b9f2d439-807f-4c4c-a217-61138c2f365a/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/1f6f58a3-4cd9-4d95-a424-446c73991f7d/image.jpg',
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
      'https://velog.velcdn.com/images/wlsdk0313/post/ff5e91c7-833f-4247-be27-a360ac1d23cb/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/d5723d3d-204f-461a-9f27-695e2f3eb807/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/a966b374-a3dc-4a35-b538-b340fd4ac590/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/7ea9038d-c387-40e4-85e9-ee3300fc3e67/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/18a3b265-3d35-45b6-ab8f-2ab15fc1f6c1/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/36e9f53e-2597-4ad7-b001-a5bf65dfd88c/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/31482dc4-8ebf-43c7-8835-abb545d54f4d/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/3958b6d1-af03-4d68-af65-8dd40739c2b6/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/62720a82-5bc6-4008-8de7-01db5bf54eb2/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/02e97094-2c47-4b62-8f05-efe20d3aa155/image.jpg',
    ],
    type: 'Deluxe Room',
    number: 201,
    desc: '1.5룸형 구조의 객실로 거실 겸 주방과 침실 그리고 테라스로 구성되어 있습니다.',
    people: '기준 2인 / 최대 4인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  202: {
    photo: [
      'https://velog.velcdn.com/images/wlsdk0313/post/eb1e0e6f-0ea1-4280-8e49-3f2f37b80f15/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/57a1c878-46c1-4208-9517-fec47ea33be6/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/147f319b-1182-4193-8183-fe99333c88b7/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/e5726967-19fa-4120-aaf2-8c0df6479af2/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/1acb96bb-e806-48b2-841e-278b63552ed9/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/b5626721-5929-4917-9c6f-3b813f736d8a/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/97545fae-b9b1-480d-86ec-a64908fcc392/image.jpg',
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
      'https://velog.velcdn.com/images/wlsdk0313/post/eac21092-b1ea-4dcd-a868-e05919b0af3b/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/c6982002-ff01-4ca5-b8bf-50e778539805/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/7efedbc3-8c50-4aef-aa9b-2ac9a0eab480/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/03c31a70-76dd-496b-aea3-10771d300d63/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/6a8cc6ff-5387-4823-b3b5-ce4891a83b75/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/31317be7-a442-4860-bdad-d0b596ad13f1/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/1c347b82-44b8-4a0a-b558-9548caa986b2/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/53fb7477-29b4-4396-8288-6b27be897cff/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/fa07a2a5-d73b-4db0-9f05-941233ae513c/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/4170fdcd-9433-4d79-b93e-a127bdebca49/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/55dca875-742d-4661-9aa0-a9bba6eb03f1/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/675c38f2-178c-4623-b619-232bc7125e6b/image.jpg',
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
      'https://velog.velcdn.com/images/wlsdk0313/post/c2d434ec-4062-40dc-bfc9-12cd4551cc8c/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/c3407bd7-006f-4369-8778-ec22b0860d68/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/8e6194e1-9c08-4117-996d-fe61fbca5720/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/0014c611-a6ac-4489-8cd7-736fca33faff/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/e65ca4ee-e375-4da0-822a-8cc36a68e710/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/74fd30a0-c513-41fa-afc4-67b9ca086892/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/02754501-c953-4aad-8bdf-b35353c52b7e/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/1ccb2e53-abff-4d3d-a42a-3820da54a3ce/image.jpg',
      'https://velog.velcdn.com/images/wlsdk0313/post/5f76d55d-1293-41f3-b010-763fa75ffa08/image.jpg',
    ],
    type: 'Double Room',
    number: 204,
    desc: '1-2인이 편안하게 쉬기 좋은 규모의 객실입니다.',
    people: '기준 2인 / 최대 2인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
};
