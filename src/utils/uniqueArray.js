// 중복된 배열 제거
export default function uniqueArray(list) {
  const unique = [
    ...new Map(list.map((item) => [item.keyword, item])).values(),
  ];

  return unique;
}
