export interface Article {
  id: number;
  title: string;
  contents: string;
  thumbnail: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: '블로그 만들기',
    contents: '아무렇게나 입력해 주세요',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=1',
  },
  {
    id: 2,
    title: '글 제목 1',
    contents: '아무렇게나 입력하기',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=2',
  },
  {
    id: 3,
    title: '블로그 글',
    contents: '아무렇게나 입력해버림',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=3',
  },
  {
    id: 4,
    title: '제목',
    contents: '아무렇게나 입력해버리기',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=4',
  },
  {
    id: 5,
    title: '블로그',
    contents: '아무렇게나 입력하지마세요',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=5',
  },
  {
    id: 6,
    title: '만들기',
    contents: '아무렇게나 입력해',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=6',
  },
  {
    id: 7,
    title: '비둘기',
    contents: '입력해 주세요',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=7',
  },
  {
    id: 8,
    title: '비틀기',
    contents: '아무렇게나 입력할뻔',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=8',
  },
  {
    id: 9,
    title: '블로그 훔치기',
    contents: '아무렇게나 입력한 척',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=9',
  },
  {
    id: 10,
    title: '블로그 따라하기',
    contents: '아무렇게',
    thumbnail: 'https://source.unsplash.com/random/400x400?sig=10',
  },
];
