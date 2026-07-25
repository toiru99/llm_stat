---
type: Model
title: Jamba 1.6 Mini
creator: AI21 Labs
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: 185.0
context_window: 256000
status: past
size_class: Medium
params_b: 52
is_reasoning: false
radar:
  knowledge: { s: 16.9, z: -1.14, r: 32.9, estimated: false }  # 전문 지식
  reasoning: { s: 15.8, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 16.7, z: -1.26, r: 31.1, estimated: false }  # 코딩
  agentic: { s: 8.0, z: -1.1, r: 33.5, estimated: true }  # 에이전트
  trust: { s: 29.9, z: 0.09, r: 51.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.1, z: -1.34, r: 29.8, estimated: true }  # 긴문맥
  instruction: { s: 29.1, z: -0.99, r: 35.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Jamba 1.6 Mini

AI21 Labs · Open · Medium(52B) · 컨텍스트 256k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.4 · 혼합 $None/1M · 185.0 t/s · TTFT 0.79s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.9 | -1.14 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.1 | -1.26 | 실측 | [[scicode]] 10.0%×1.0 |
| 에이전트 | 33.5 | -1.1 | 추정 | (추정) |
| 신뢰성 | 51.3 | +0.09 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.8 | -1.34 | 추정 | (추정) |
| 지시 따르기 | 35.1 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
