---
type: Model
title: Jamba 1.5 Mini
creator: AI21 Labs
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0.22
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.9, z: -1.13, r: 33.0, estimated: false }  # 전문 지식
  reasoning: { s: 15.8, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 13.3, z: -1.38, r: 29.3, estimated: false }  # 코딩
  agentic: { s: 5.2, z: -1.2, r: 32.0, estimated: true }  # 에이전트
  trust: { s: 21.0, z: -0.32, r: 45.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.1, z: -1.25, r: 31.3, estimated: true }  # 긴문맥
  instruction: { s: 30.9, z: -0.88, r: 36.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.5 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Jamba 1.5 Mini

AI21 Labs · Open · Unknown · 컨텍스트 256k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.2 · 출력 $0.4 · 혼합 $0.22/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 13.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.13 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 29.3 | -1.38 | 실측 | [[scicode]] 8.0%×1.0 |
| 에이전트 | 32.0 | -1.2 | 추정 | (추정) |
| 신뢰성 | 45.3 | -0.32 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.3 | -1.25 | 추정 | (추정) |
| 지시 따르기 | 36.8 | -0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
