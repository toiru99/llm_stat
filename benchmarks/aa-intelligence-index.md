---
type: Index
title: Artificial Analysis Intelligence Index
description: 9개 평가를 가중 평균한 LLM 종합 지능 점수(v4.1). 카드 헤드라인 배지로 쓰는 복합 지수이며, 레이더 8축에는 참여하지 않는다.
domain: Composite
category: 종합지수
aa_metric: "Artificial Analysis Intelligence Index"
column: "Artificial Analysis Intelligence Index"
# 역할: 카드 헤드라인 배지(정수). 레이더 다각형의 축이 아님.
role: headline
# 레이더 미참여 — 헤드라인 전용이므로 빈 배열. (개별 영역은 구성 벤치마크 문서가 각자 축에 기여)
axes: []
attributes:
  index_version: v4.1
  as_of: 2026-06
  modality: text-only
  language: English
  n_evaluations: 9
  n_categories: 4
  composition:
    - { category: Agents, weight: "34%", evals: "GDPval-AA v2 (20%) · τ³-Banking (14%)" }
    - { category: Coding, weight: "24%", evals: "Terminal-Bench v2.1 (16%) · SciCode (8%)" }
    - { category: General, weight: "18%", evals: "AA-LCR (6%) · AA-Omniscience Accuracy (8%) · Non-Hallucination (4%)" }
    - { category: "Scientific Reasoning", weight: "24%", evals: "HLE (12%) · GPQA Diamond (6%) · CritPt (6%)" }
  scoring: pass@1
  temperature: "0 (비추론) / 0.6 (추론)"
  max_output_tokens: "16,384 (표준) / 허용 최대 (추론)"
  confidence_interval: "95% CI < ±1% (>10회 반복 기준)"
  composition_varies_by_version: true
  higher_is_better: true
  display: 정수
org: Artificial Analysis
year: 2026
resource: https://artificialanalysis.ai/methodology/intelligence-benchmarking
methodology: /benchmarks/sources/aa-intelligence-index-methodology.md
tags: [composite, index, aggregate, headline]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇인가 (복합 지수)

Artificial Analysis Intelligence Index는 **개별 벤치마크가 아니다.** 여러 어려운 평가를 **가중 평균**해 LLM의 종합 지능(추론·지식·수학·코딩·에이전트 능력)을 **하나의 숫자**로 압축한 **복합 지수(composite index)**다. Artificial Analysis가 자체 구성한 지표로, 표준화된 학술 논문은 없으며 방법론 웹페이지가 유일한 정본(正本) 출처다.

특성은 다음과 같다.

- **텍스트 전용·영어** 평가 모음("text-only, English language evaluation suite").
- 모델 간 **상대 비교의 기준 지표**로 쓰이며, 리더보드의 대표 단일 점수다.
- 현재 버전은 **Intelligence Index v4.1**(2026년 6월 기준).
- v4.1은 **4개 카테고리에 걸친 9개 평가**를 추론·지식·수학·프로그래밍 영역에서 종합한다.

우리 지식베이스에서 이 지수는 레이더 다각형의 축이 아니라 **카드 헤드라인 점수(배지)**로 분류된다. 자세한 위치는 아래 "우리 레이더와의 관계" 참조.

# v4.1 구성요소 · 가중치

지수는 4개 카테고리의 가중 평균이며, 각 카테고리 안에서 다시 개별 평가에 가중치가 배분된다.

| 카테고리 | 카테고리 비중 | 구성 벤치마크 (지수 내 가중치) |
|---|---|---|
| **Agents** | 34% | [[gdpval]] GDPval-AA v2 (20%) · [[tau3-banking]] τ³-Banking (14%) |
| **Coding** | 24% | [[terminal-bench]] Terminal-Bench v2.1 (16%) · [[scicode]] SciCode (8%) |
| **General** | 18% | [[aa-lcr]] AA-LCR (6%) · [[aa-omniscience]] Accuracy (8%) · Non-Hallucination (4%) |
| **Scientific Reasoning** | 24% | [[humanitys-last-exam]] HLE (12%) · [[gpqa-diamond]] GPQA Diamond (6%) · [[critpt]] CritPt (6%) |

세부 메모:

- **AA-Omniscience는 두 지표로 나뉘어 합산된다.** 합계 12% = Accuracy 8% + Non-Hallucination 4%, 즉 2:1 비율.
- 카테고리 비중 합은 34 + 24 + 18 + 24 = **100%**, 개별 평가 가중치 합도 20 + 14 + 16 + 8 + 6 + 8 + 4 + 12 + 6 + 6 = **100%**.
- v4.1에서는 가중치가 **에이전트 쪽으로 재조정**되었다(Agents 34%로 최대 비중).

> ⚠️ **종합점수 ≠ 리더보드의 모든 열.** 캡처 화면에 보이는 일부 개별 벤치마크(예: τ²-Bench Telecom, Terminal-Bench Hard, MMMU-Pro, IFBench, Omniscience Index 등)는 리더보드에 표시되더라도 **이 종합점수 산식에는 포함되지 않는다.** stat 제작 시 "종합점수 구성 9종"과 "참고용 개별 점수"를 반드시 구분할 것.

# 산출 방식

- **채점: pass@1.** 모든 평가에서 모델이 **첫 시도에 정답**을 내야 맞는 것으로 본다. 반복 측정이 있는 평가는 모든 시도 결과를 집계해 pass@1을 계산한다.
- **온도(temperature): 비추론 모델 0, 추론 모델 0.6.**
- **최대 출력 토큰:** 표준 모델 16,384, 추론 모델은 허용되는 최댓값.
- **신뢰구간:** 10회 초과 반복 실험 기준, Intelligence Index의 **95% CI가 ±1% 미만**으로 추정된다. 즉 점수가 비교적 안정적이다.
- 최종 지수 점수는 위 9개 평가 결과를 표의 가중치로 **가중 평균**한 값이다.

# 점수 해석

- **한 숫자로 "이 모델이 얼마나 똑똑한가"를 빠르게 비교**하는 용도. 높을수록 좋다(higher is better), 카드에는 **정수**로 표기한다.
- 여러 어려운 평가를 묶은 값이라, 단일 벤치마크보다 **표본 변동·특정 과제 편향에 덜 휘둘린다**(CI < ±1%가 이를 뒷받침).
- 다만 **무엇을 잘해서 그 점수가 나왔는지는 한 숫자로 보이지 않는다.** 코딩이 강한지, 과학 추론이 강한지, 에이전트 수행이 강한지는 구성 벤치마크를 따로 봐야 한다.

# 한계 · 주의

- **버전마다 구성이 바뀐다.** 구성 평가 집합과 가중치가 버전별로 달라지므로(아래 버전 이력 참조), **서로 다른 버전의 지수 점수를 직접 비교하면 안 된다.** "Intelligence Index"라는 이름은 같아도 v4.0과 v4.1은 다른 산식이다.
- **영역별 강약이 보이지 않는다.** 가중 평균은 강점과 약점을 한 숫자로 평균 내버리므로, 코딩 vs 과학 추론 vs 에이전트의 프로파일 차이를 가린다. 종합 비교에는 좋지만 **세부 진단에는 부적합**하다.
- **텍스트·영어 전용.** 멀티모달·비영어(한국어 포함) 능력은 이 지수에 반영되지 않는다.
- **가중치가 곧 가치 판단이다.** v4.1은 에이전트(34%)에 가장 큰 비중을 둔다. 이 우선순위에 동의하지 않으면 지수 순위 해석도 달라져야 한다.
- **학술 표준이 아니다.** AA 자체 구성 지표이므로, 외부 검증된 단일 논문 기준이 아니라 방법론 페이지에 의존한다.

# 우리 레이더와의 관계

이 지수는 **레이더 8축에 참여하지 않는다.** [[radar-spec]]에서 종합지능은 "헤드라인 배지(레이더 밖)"로 명시되어 있으며, 카드에서는 다각형 축이 아니라 **헤드라인 점수(정수 배지)**로 노출된다.

- frontmatter에서 `role: headline`, `axes: []`(빈 배열)로 선언한다 → `build_cards.py`가 이 문서를 레이더 매핑에 포함하지 않는다.
- 대신 **이 지수를 구성하는 개별 벤치마크들이 각자 자기 문서의 `axes:`로 레이더 축에 기여**한다. 예: [[gpqa-diamond]]는 reasoning·knowledge 축에, [[terminal-bench]]·[[scicode]]는 coding 축에, [[gdpval]]·[[tau3-banking]]은 agentic 축에 기여한다.
- 즉 **헤드라인(이 지수) = "한눈에 보는 종합 점수"**, **레이더(개별 축) = "영역별 프로파일"**로 역할이 분리된다. 둘은 데이터 소스를 공유하되 표현 목적이 다르다.

리더보드 열 매핑은 `column: "Artificial Analysis Intelligence Index"`이며, [[radar-spec]]의 헤드라인 배지 표에서 "종합지능 → 정수" 표기와 일치한다.

# 버전 이력 (요약)

- **v4.1** (2026-06–현재): GDPval-AA를 v2로 업그레이드, Terminal-Bench Hard를 Terminal-Bench v2.1로 교체, τ²-Bench를 τ³-Banking으로 교체, IFBench 제거, 가중치를 에이전트 쪽으로 재조정.
- **v4.0.x** (2026-01–06): 채점 모델 업데이트(GDPval-AA, Omniscience), Elo 재기준화, Terminal-Bench Hard를 44개 과제로 정제.
- **v4.0** (2026-01): GDPval-AA·AA-Omniscience·CritPt 추가, MMLU-Pro·LiveCodeBench·AIME 2025 제거.
- **v3.0** (2025-09): Terminal-Bench Hard·τ²-Bench Telecom 추가.
- **v2.2** (2025-08): AA-LCR 추가.
- **v2.1** (2025-08): IFBench·AIME 2025 추가, MATH-500 제거.
- **v1.0–v1.3** (2024–2025 초): 초기 버전, GPQA·HLE·SciCode 점진 추가.

# 원본 자료

- 방법론(정본): [aa-intelligence-index-methodology.md](/benchmarks/sources/aa-intelligence-index-methodology.md)
- 축 정의·헤드라인 배지 규칙: [[radar-spec]]

# Citations

[1] [Artificial Analysis Intelligence Benchmarking Methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking)
[2] [Artificial Analysis Intelligence Index (Evaluation)](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
