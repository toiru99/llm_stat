---
type: Model
title: Jamba 1.6 Large
creator: AI21 Labs
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 2.6
output_speed_tps: 55.0
context_window: 256000
status: past
size_class: Large
params_b: 398
is_reasoning: false
radar:
  knowledge: { s: 22.2, z: -0.9, r: 36.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.1, z: -0.73, r: 39.1, estimated: false }  # 추론
  coding: { s: 30.0, z: -0.72, r: 39.2, estimated: false }  # 코딩
  agentic: { s: 8.1, z: -1.1, r: 33.4, estimated: true }  # 에이전트
  trust: { s: 29.7, z: 0.04, r: 50.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.1, z: -0.82, r: 37.7, estimated: true }  # 긴문맥
  instruction: { s: 33.8, z: -0.8, r: 37.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Jamba 1.6 Large

AI21 Labs · Open · Large(398B) · 컨텍스트 256k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $2.6/1M · 55.0 t/s · TTFT 1.38s · 256k ctx` · 가성비 1.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.4 | -0.9 | 실측 | [[gpqa-diamond]] 39.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.1 | -0.73 | 실측 | [[gpqa-diamond]] 39.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.2 | -0.72 | 실측 | [[scicode]] 18.0%×1.0 |
| 에이전트 | 33.4 | -1.1 | 추정 | (추정) |
| 신뢰성 | 50.6 | +0.04 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.7 | -0.82 | 추정 | (추정) |
| 지시 따르기 | 37.9 | -0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
