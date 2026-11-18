---
type: Model
title: Jamba 1.5 Large
creator: AI21 Labs
license: Open
intelligence_index: None
price_blended_usd_1m: 2.6
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -1.15, r: 32.8, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -0.71, r: 39.3, estimated: false }  # 추론
  coding: { s: 39.6, z: -0.01, r: 49.8, estimated: true }  # 코딩
  agentic: { s: 17.9, z: -0.93, r: 36.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.2, z: -1.23, r: 31.6, estimated: true }  # 긴문맥
  instruction: { s: 23.3, z: -1.28, r: 30.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.5 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Jamba 1.5 Large

AI21 Labs · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $2.6/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.8 | -1.15 | 실측 | [[gpqa-diamond]] 42.727272727272705%×0.4, [[humanitys-last-exam]] 4.07%×0.3 |
| 추론 | 39.3 | -0.71 | 실측 | [[gpqa-diamond]] 42.727272727272705%×1.0, [[humanitys-last-exam]] 4.07%×1.0 |
| 코딩 | 49.8 | -0.01 | 추정 | (추정) |
| 에이전트 | 36.0 | -0.93 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.6 | -1.23 | 추정 | (추정) |
| 지시 따르기 | 30.8 | -1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
