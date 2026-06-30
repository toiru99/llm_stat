---
type: Model
title: K-EXAONE
creator: LG AI Research
license: Open
intelligence_index: 25.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
radar:
  knowledge: { s: 37.8, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: -0.41, r: 43.9, estimated: false }  # 추론
  coding: { s: 52.2, z: -0.31, r: 45.3, estimated: false }  # 코딩
  agentic: { s: 55.6, z: 0.19, r: 52.9, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.86, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.7, z: 0.19, r: 52.9, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# K-EXAONE

LG AI Research · Open · 컨텍스트 256k · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 43.9 | -0.41 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 45.3 | -0.31 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 52.9 | +0.19 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 37.0 | -0.86 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.9 | +0.19 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
