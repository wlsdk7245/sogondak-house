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
    photo: ['101_1.jpeg', '101_2.jpeg', '101_3.jpeg', '101_4.jpeg'],
    type: 'Single Room',
    number: 101,
    desc: '백 패커 분들이 많이 찾아주시는 1인실 입니다.',
    people: '기준 1인 / 최대 1인',
    basic:
      '싱글 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 건물용 슬리퍼 1개, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 2병',
  },
  102: {
    photo: ['102_1.jpeg', '102_2.jpeg', '102_3.jpeg'],
    type: 'Double Room',
    number: 102,
    desc: '1-2인이 편안하게 쉬기 좋은 규모의 객실입니다.',
    people: '기준 2인 / 최대 2인',
    basic:
      '싱글 사이즈 매트리스 침대, TV, 에어컨 (냉/난방), 미니냉장고, 드라이기, 수건, 건물용 슬리퍼 1개, 샴푸, 바디 클렌져, 두루마리 휴지, 갑티슈, 삼다수 2병',
  },
};
