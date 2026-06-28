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
  knowledge: { s: 34.0, z: -0.78, r: 38.3, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 39.9, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 11.8, z: -1.56, r: 26.6, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.75, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.9, z: -1.85, r: 22.2, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -1.38, r: 29.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.0 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-28
timestamp: 2026-06-28T00:00:00Z
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
| 전문 지식 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 26.6 | -1.56 | 실측 | [[tau2-bench]] 17.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 22.2 | -1.85 | 실측 | [[aa-lcr]] 14.0%×1.0 |
| 지시 따르기 | 29.2 | -1.38 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
