---
type: Model
title: ERNIE 4.5 300B A47B
creator: Baidu
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.6, z: -0.04, r: 49.5, estimated: false }  # 전문 지식
  reasoning: { s: 42.9, z: -0.12, r: 48.1, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.94, r: 35.9, estimated: false }  # 코딩
  agentic: { s: 9.1, z: -0.86, r: 37.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.3, z: -0.12, r: 48.2, estimated: true }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — ERNIE 4.5 300B A47B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# ERNIE 4.5 300B A47B

Baidu · Open · Large · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.5 | -0.04 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 48.1 | -0.12 | 실측 | [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 35.9 | -0.94 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 37.1 | -0.86 | 실측 | [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.2 | -0.12 | 추정 | (추정) |
| 지시 따르기 | 40.8 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
