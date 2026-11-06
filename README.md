# LLM 능력 레이더 · Alan

- **목적**: LLM별 강점과 가성비를 한눈에 비교
- **데이터 출처**: [Artificial Analysis](https://artificialanalysis.ai) 리더보드
- **활용 대상**: ESTsoft **앨런(Alan)** 검색 서비스의 LLM 탐색

## 🔗 라이브 사이트

- **URL**: https://toiru99.github.io/llm_stat/

## 주요 기능

- **8축 능력 레이더**
  - 전문지식
  - 추론
  - 코딩
  - 에이전트
  - 신뢰성
  - 멀티모달
  - 긴 문맥
  - 지시 따르기
- **가성비 분석**: 모델별 성능·가격 산점도 제공
- **필터**: 제작사·라이선스·가격 기준 탐색
- **모델 상세 정보**
  - 가격
  - 속도
  - TTFT(Time to First Token)
  - 컨텍스트 길이

## 자동 갱신

- **주기**: 매일
- **실행 방식**: GitHub Actions([`.github/workflows/update.yml`](.github/workflows/update.yml))
- **처리 흐름**
  1. Artificial Analysis 리더보드 스크래핑
  2. 모델 카드 생성
  3. HTML 빌드
  4. GitHub Pages 배포
- **특징**: LLM 및 외부 API 키 없이 결정론적 파이프라인으로 동작

## 파이프라인

- `scripts/scrape_aa.mjs`
  - Playwright 기반 스크래핑
  - 결과 저장: `models/data/latest.json`
- `scripts/build_cards.py`
  - 데이터 정규화
  - z-score 계산
  - kNN 기반 결측값 추정
  - 결과 저장: `models/cards/*.md`, `cards.json`
- `scripts/build_artifact.py`
  - GitHub Pages용 HTML 생성
  - 결과 저장: `artifact/llm-radar.html`

## 설정

- [`config.toml`](config.toml)에서 주요 설정 관리
  - 제작사 화이트리스트
  - 갱신 주기
  - 정규화 방식

## 지식베이스

- **시작 문서**: [`index.md`](index.md)
- **주요 내용**
  - 원본 논문 기준 벤치마크 측정 항목
  - 레이더 축과 벤치마크 간 매핑
- **관련 문서**
  - [벤치마크](benchmarks/)
  - [레이더 명세](models/radar-spec.md)
  - [도메인](domains/)

## 출처

- [Artificial Analysis 모델 리더보드](https://artificialanalysis.ai/leaderboards/models)
