---
type: Benchmark
title: Terminal-Bench
aa_metric: Terminal-Bench Hard / Terminal-Bench v2.1
column: "Terminal-Bench Hard"
domain: Agentic Coding & Terminal Use
category: 에이전트
# 레이더 기여 (SSOT — build_cards.py가 읽음)
axes:
  - { axis: agentic, weight: 1.0 }   # 주 기여: 터미널 환경 다단계 자율 수행
  - { axis: coding,  weight: 0.5 }   # 부 기여: 터미널 코딩(SW 엔지니어링 과제 측면)
attributes:
  modality: text
  task_type: 에이전트 자율 수행(컨테이너 내 다단계 작업)
  scoring: resolution rate(과제 해결률)
  scale: "0–100%"
  n_tasks: 89
  domains: [소프트웨어 엔지니어링, 시스템 관리, 데이터 과학, 보안, 과학 컴퓨팅]
  task_components: [Docker 환경, 지시문, 검증 테스트, 정답(oracle) 솔루션, 시간 제한]
  harness: Harbor
  neutral_scaffold: Terminus 2
  evaluated_agents: [Claude Code, Codex CLI, Gemini CLI, OpenHands, Mini-SWE-Agent, Terminus 2]
  version_distinction: "Hard(하드 서브셋, AA 기본열) vs v2.1(검증 리프레시)"
  difficulty: 주니어 1시간 미만 ~ 1주 이상까지 분포
  saturation: 진행 가능성 시사(8개월간 SOTA 약 2배) — 현재는 미포화(최고 ~63%)
  contamination_risk: "낮음~중간(canary 문자열 포함, 단 인터넷 접근 허용)"
  higher_is_better: true
org: Stanford / Laude Institute
year: 2026
resource: https://arxiv.org/abs/2601.11868
paper: /benchmarks/sources/terminal-bench-2601.11868.pdf
tags: [agentic, coding, terminal, cli]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

에이전트가 **실제 명령줄(터미널/CLI) 환경에서 다단계 실무 작업을 자율적으로 끝까지 수행**하는 능력을 측정한다. 단순히 코드를 한 조각 생성하는 게 아니라, 컨테이너 환경을 직접 탐색·조작해(파일 편집, Bash 명령 실행, 도구 호출) **일을 완수**하는지 본다. 논문은 터미널을 "소프트웨어 엔지니어링·과학 컴퓨팅·사이버보안·머신러닝 같은 고숙련 고가치 업무에 쓰이는 보편적·강력한 인터페이스"로 규정하고, Cursor·Codex CLI·Claude Code·Gemini CLI 같은 에이전트가 실제로 작동하는 무대로 본다.

핵심 설계 철학은 **outcome-driven(결과 지향)**이다. 테스트는 에이전트가 *어떤 명령을 쳤는지*나 콘솔 출력이 아니라, **최종 컨테이너 상태가 올바른지**만 검증한다. 따라서 풀이 경로는 자유이고, 진짜 "일을 끝냈는가"가 채점 기준이 된다.

# 과제 형식 / 예시

한 과제(task)는 다음 다섯 요소로 구성된다(Figure 2):

- **Docker 이미지**: 관련 패키지·파일이 미리 세팅된 컨테이너 환경.
- **지시문(instruction)**: 완수해야 할 작업 설명.
- **테스트(tests)**: 완료 여부를 검증하는 단위 테스트(최종 상태의 속성을 검사).
- **정답 솔루션(oracle solution)**: 사람이 실제 워크플로를 모사해 직접 작성한 참조 풀이.
- **시간 제한(time limit)**.

과제는 **interactive**하다. 컨테이너와 지시문이 주어지면 에이전트가 도구를 호출해 환경을 탐색·조작하며 풀어 나간다. Terminal-Bench 2.0 데이터셋은 폭넓고 다양한 작업을 담는다. 논문이 든 예시:

- 비동기 작업 n개를 병렬화하고 키보드 인터럽트로 각 작업 정리(cleanup) 코드를 정확히 실행하는 함수 작성 — Python 비동기 작업 관리의 미묘함을 이해하고 키보드 인터럽트로 직접 테스트해야 함.
- COBOL 프로그램을 Python으로 재작성하고, 두 프로그램의 입출력 매핑이 동일한지로 완료 검증(Figure 2 예시: COBOL 베이스라인과 동일 결과를 내는 스크립트 작성).
- 그 밖에 ML 모델 학습, 소스에서 Linux 빌드·실행, 바이너리 리버스 엔지니어링, FEAL 암호 차분 공격(feal-differential-cryptanalysis), 물리 기반 렌더러 구현(path-tracing) 등.

# 채점 방식

- **과제 해결률(resolution rate)** = 통과한 과제 비율. 테스트가 통과하면(최종 컨테이너 상태가 정답 조건을 만족) 해당 과제 성공.
- 자동 채점(테스트 기반). 출력 텍스트가 아니라 상태를 검사하므로 표면적 일치로는 통과할 수 없다.
- 평가 규모: 6개 SOTA 에이전트 × 16개 프런티어 모델, 각 조합 최소 5회 반복 → 총 **32,155 trials**. 각 trial은 한 에이전트의 한 과제 1회 시도.
- 모델 점수는 그 모델이 쓸 수 있는 호환 스캐폴드 중 성능이 가장 높은 조합으로 보고(Figure 1 에러바는 95% 신뢰구간).

# 점수 해석 (높음 / 낮음)

- **높음** = 개발자 대신 터미널에서 실제 다단계 작업을 자율 완수하는 코딩 에이전트 능력이 강함.
- **낮음** = 코드 스니펫은 짜도 환경을 조작해 일을 끝내는 데서 무너짐(명령 실패·중도 이탈·검증 누락 등).
- 절대 수치 감각: 논문 시점 **프런티어도 65% 미만**, 소형 모델은 **약 15%** 수준. 즉 점수 1%p의 무게가 MCQ류와 다르다.

# 버전 구분 (Hard vs v2.1) — 중요

AA 리더보드에는 두 행으로 나오지만 **별개 벤치마크가 아니라 같은 계열의 버전/구성** 관계다.

- **Terminal-Bench Hard**: 어려운 과제만 추린 하드 서브셋. **커버리지가 넓어(약 97%) 추적 모델 대부분에 점수가 있어** 비교가 안정적 → 본 저장소에서 **기본 열로 사용**.
- **Terminal-Bench v2.1**: v2.0의 검증 리프레시(89개 과제 계열). 커버리지가 좁아(약 12%) 모델 간 비교에 결측이 많다.

> 즉 두 행 모두 같은 Terminal-Bench 2.x 계열의 측정이며, 차이는 "어떤 과제 구성/리프레시를 쓰느냐"다. 커버리지 안정성 때문에 레이더 집계에는 **Hard** 열을 기본으로 둔다.

# 데이터셋 구성 · 검증

- **크라우드소싱**: 93명 기여자가 229개 과제를 작성 → 저자 난이도 평가 + 숙련 리뷰어 3인의 품질 심사로 **89개 선별**(Section 2.3, Appendix H).
- **카테고리 분포**(Figure 4): 소프트웨어 엔지니어링 26개로 최다, 이어 시스템 관리 9, 데이터 과학·보안·과학 컴퓨팅 각 8 등. 게임·영상 처리·개인 비서 같은 비엔지니어링 범주까지 포함.
- **검증 3대 기준**(Section 2.3): **명세성(specificity)** — 테스트는 컨테이너가 수용 가능한 최종 상태일 때만 통과. **해결성(solvability)** — oracle 솔루션 실행 시 모든 테스트 통과. **무결성(integrity)** — 실제 배포에 없을 지름길로 "치팅"할 수 없게 설계(예: 특정 커밋 작업 시 미래 커밋을 히스토리에서 제거).
- **감사 파이프라인**(Figure 3): Pre-Merge(기여자 제출 → 자동 CI·LLM 점검 → 전문가 리뷰)와 Post-Merge(Terminus 모델 실험 → 수동 trajectory 감사 → 적대적 익스플로잇 감사 → 최종 결정)로 다단계 검증. 과제당 평균 **약 3 리뷰어-시간**, 검토에만 수백 person-hours 투입.

# 난이도 · 현 SOTA

- **난이도 분포**(Table 1): 저자 추정 완료 시간 — 전문가 기준 1시간 미만 48.6% / 1시간~1일 47.3% / 1일~1주 4.1%, 주니어 기준 1시간 미만 8.1% / 1시간~1일 71.6% / 1일~1주 16.2% / 1주 이상 4.1%. 한 과제(fix-ocaml-gc)는 주니어 기준 약 10일(240시간) 추정 — 프레임워크가 장기 과제까지 표현함을 보여줌.
- **현 SOTA**: 최고 평균 해결률 **63%** = Codex CLI + GPT-5.2. 이어 Terminus 2 + Claude Opus 4.5(58%), Terminus 2 + Gemini 3 Pro(57%). 상위 13위를 독점 모델이 차지하고, 오픈웨이트 최상위는 Terminus 2 + Kimi K2 Thinking로 평균 36%.
- **모델 vs 스캐폴드**: 성능 최적화에는 보통 스캐폴드보다 모델 선택이 더 중요(예: GPT-5-Nano→GPT-5.2로 바꾸면 Codex CLI 해결률 +52%).
- **예측 vs 실측 난이도**(Figure 7): 사람이 "hard"로 본 과제의 93.3%가 모델에도 실제로 hard. 사람-모델 난이도 상관 r=0.436(p<0.001). 사람이 "medium"이라 본 과제의 54.5%가 모델엔 hard — 사람의 직관/창의가 유리한 영역(예: break-filter-js-from-html, winning-avg-corewars).
- **시간에 따른 향상**(Figure 6): Gemini 2.5 Pro→GPT-5.2의 8개월간 SOTA가 거의 2배. 저자는 1년 내 포화 가능성을 인정하고, 새 도전 과제 세트 추가 계획을 밝힘.

# 한계 · 주의

- **인터넷 접근에 따른 변동성**: 현실성을 위해 패키지 설치·웹 질의를 허용 → 외부 API 호출·자원 변화로 재현성이 흔들릴 수 있음. 이론상 에이전트가 데이터셋을 찾아 oracle을 읽고 치팅할 수 있으나, 수만 trajectory에서 관측되지 않았다고 보고(다만 사용자 주의 권고).
- **오염 우려**: 모델 개발사가 데이터셋으로 학습할 수 있음. 각 파일에 **Big-Bench canary 문자열**을 넣어 디컨태미네이션을 돕지만, 비공개 테스트셋은 본 논문 범위 밖.
- **검증의 잔여 위험**: 대규모 수동·LLM 보조 심사에도 일부 과제가 명세 기준에 못 미칠 가능성은 남음(다양성·현실성과의 트레이드오프로 수용).
- **포화 가능성**: SOTA 향상 속도가 빨라 1년 내 포화 우려.
- **에이전트-모델 분리 어려움**: interactive 특성상 모델 능력과 스캐폴드 효과가 얽힘 → 저자는 중립 testbed인 **Terminus 2**를 도입해 모델 비교의 공정성을 확보.

# 다른 벤치마크와의 관계

- [[swe-bench]] SWE-Bench 계열 — GitHub 이슈 해결 중심. Terminal-Bench는 합성 환경이 아닌 **실제 터미널 셸**에서, 더 다양·현실적·경제적 가치가 큰 과제라는 점에서 구별(Related Work).
- τ-Bench, Berkeley Function Calling, WebArena·AppWorld·OS World(컴퓨터 사용), ReplicationBench·MLGym-Bench·Auto-Bench(과학 발견) 등과 인접하나, **터미널 일반 에이전틱 조작**에 초점을 둔 점이 차별점.
- 셸 스크립트 최적화·환경 설정·NL→Bash 같은 협소 과제 벤치마크와 달리 **범용 에이전틱 컴퓨터 조작**을 본다.

# 레이더 기여 근거

- **agentic (1.0)**: 본질이 터미널 환경에서의 다단계 자율 수행(도구 호출·환경 조작·완수) → 에이전트 축 주 기여.
- **coding (0.5)**: 과제 다수가 SW 엔지니어링·코드 재작성·디버깅이라 터미널 코딩 측면이 강함 → 코딩 축에 부분 기여(가중치 0.5, 순수 코드 생성 벤치마크가 아니라 환경 수행 비중이 큼을 반영).

# 한국 · 앨런 관점

"코드를 짜 주는" 단계에서 "개발 환경을 직접 굴려 일을 끝내는" 단계로 가는 에이전트형 사용에 직결되는 축. 사내 자동화·DevOps·데이터 파이프라인 등 **에이전트에게 터미널을 맡기는** 실무 신뢰도를 가늠하는 지표로 본다. 절대 수치가 낮은(프런티어도 65% 미만) 영역이라, 모델 간 변별력이 살아 있어 선택 기준으로 유용하다.

# 원본 자료

- 논문 PDF: [terminal-bench-2601.11868.pdf](/benchmarks/sources/terminal-bench-2601.11868.pdf)
- 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]] → Agentic Coding & Terminal Use

# Citations

[1] [Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://arxiv.org/abs/2601.11868)
