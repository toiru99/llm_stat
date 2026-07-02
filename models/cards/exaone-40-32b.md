---
type: Model
title: EXAONE 4.0 32B
creator: LG AI Research
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
radar:
  knowledge: { s: 34.0, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.65, r: 40.2, estimated: false }  # 추론
  coding: { s: 39.9, z: -0.92, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 11.8, z: -1.54, r: 26.8, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.9, z: -1.89, r: 21.7, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -1.49, r: 27.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.0 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# EXAONE 4.0 32B

LG AI Research · Open · 컨텍스트 131k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 40.2 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 36.3 | -0.92 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 26.8 | -1.54 | 실측 | [[tau2-bench]] 17.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 21.7 | -1.89 | 실측 | [[aa-lcr]] 14.0%×1.0 |
| 지시 따르기 | 27.6 | -1.49 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
