export type typeRoomInfo = {
  type: string;
  number: number;
  desc: string;
  people: string;
  basic: string;
  photo: number;
};

export const ObjectRoom = {
  101: {
    photo: 6,
    type: 'Single Room',
    number: 101,
    desc: '백 패커 분들이 많이 찾아주시는 1인실 입니다.',
    people: '기준 1인 / 최대 1인',
    basic:
      '싱글 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  102: {
    photo: 6,
    type: 'Double Room',
    number: 102,
    desc: '1-2인이 편안하게 쉬기 좋은 규모의 객실입니다.',
    people: '기준 2인 / 최대 2인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  201: {
    photo: 10,
    type: 'Deluxe Room',
    number: 201,
    desc: '1.5룸형 구조의 객실로 거실겸 주방과 침실 그리고 테라스로 구성되어있습니다.',
    people: '기준 2인 / 최대 4인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  202: {
    photo: 7,
    type: 'Deluxe Room',
    number: 202,
    desc: '원룸형 구조로 취사 가능한 객실 중 한달살이 예약이 가장 많습니다.',
    people: '기준 2인 / 최대 3인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  203: {
    photo: 12,
    type: 'Deluxe Room',
    number: 203,
    desc: '천창이 특징인 복층형 객실입니다. 계단이 가팔라서 안전상의 각별한 유의가 필요합니다.',
    people: '기준 2인 / 최대 4인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
  204: {
    photo: 9,
    type: 'Double Room',
    number: 204,
    desc: '1-2인이 편안하게 쉬기 좋은 규모의 객실입니다.',
    people: '기준 2인 / 최대 2인',
    basic:
      '퀸 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 1병.',
  },
};
