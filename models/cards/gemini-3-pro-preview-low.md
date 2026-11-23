---
type: Model
title: Gemini 3 Pro Preview (low)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.8, z: 1.03, r: 65.5, estimated: false }  # 전문 지식
  reasoning: { s: 43.3, z: 0.38, r: 55.7, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.4, r: 55.9, estimated: false }  # 코딩
  agentic: { s: 60.2, z: 0.53, r: 57.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.88, r: 63.3, estimated: false }  # 긴문맥
  instruction: { s: 52.7, z: -0.05, r: 49.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Gemini 3 Pro Preview (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.5 | +1.03 | 실측 | [[gpqa-diamond]] 88.6868686868687%×0.4, [[humanitys-last-exam]] 29.4717330861909%×0.3 |
| 추론 | 55.7 | +0.38 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 88.6868686868687%×1.0, [[humanitys-last-exam]] 29.4717330861909%×1.0 |
| 코딩 | 55.9 | +0.4 | 실측 | [[terminal-bench]] 34.0909090909091%×0.5 |
| 에이전트 | 57.9 | +0.53 | 실측 | [[tau2-bench]] 68.12865497076021%×1.0, [[terminal-bench]] 34.0909090909091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.3 | +0.88 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 49.3 | -0.05 | 실측 | [[ifbench]] 49.659863945578195%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
