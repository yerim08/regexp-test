let str = `
010-1234-5678
thesecon@gmail.com
https://naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)