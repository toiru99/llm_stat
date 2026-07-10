---
type: Model
title: Jamba 1.6 Mini
creator: AI21 Labs
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0.22
output_speed_tps: 187.0
context_window: 256000
status: past
size_class: Medium
params_b: 52
is_reasoning: false
radar:
  knowledge: { s: 16.9, z: -1.13, r: 33.0, estimated: false }  # 전문 지식
  reasoning: { s: 15.8, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 16.7, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 9.3, z: -1.04, r: 34.4, estimated: true }  # 에이전트
  trust: { s: 26.6, z: -0.05, r: 49.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 8.3, z: -1.18, r: 32.3, estimated: true }  # 긴문맥
  instruction: { s: 22.6, z: -1.22, r: 31.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Jamba 1.6 Mini

AI21 Labs · Open · Medium(52B) · 컨텍스트 256k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.2 · 출력 $0.4 · 혼합 $0.22/1M · 187.0 t/s · TTFT 0.86s · 256k ctx` · 가성비 13.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.13 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[scicode]] 10.0%×1.0 |
| 에이전트 | 34.4 | -1.04 | 추정 | (추정) |
| 신뢰성 | 49.3 | -0.05 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.3 | -1.18 | 추정 | (추정) |
| 지시 따르기 | 31.7 | -1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
