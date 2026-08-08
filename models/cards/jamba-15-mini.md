---
type: Model
title: Jamba 1.5 Mini
creator: AI21 Labs
license: Open
intelligence_index: 2.0
price_blended_usd_1m: 0.22
output_speed_tps: None
context_window: 256000
status: past
size_class: Medium
params_b: 52
is_reasoning: false
radar:
  knowledge: { s: 16.8, z: -1.15, r: 32.8, estimated: false }  # 전문 지식
  reasoning: { s: 15.6, z: -0.95, r: 35.7, estimated: false }  # 추론
  coding: { s: 13.3, z: -1.41, r: 28.8, estimated: false }  # 코딩
  agentic: { s: 5.4, z: -1.21, r: 31.9, estimated: true }  # 에이전트
  trust: { s: 20.3, z: -0.28, r: 45.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.4, z: -1.18, r: 32.3, estimated: true }  # 긴문맥
  instruction: { s: 21.8, z: -1.31, r: 30.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.5 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Jamba 1.5 Mini

AI21 Labs · Open · Medium(52B) · 컨텍스트 256k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.2 · 출력 $0.4 · 혼합 $0.22/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 9.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.8 | -1.15 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.7 | -0.95 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 28.8 | -1.41 | 실측 | [[scicode]] 8.0%×1.0 |
| 에이전트 | 31.9 | -1.21 | 추정 | (추정) |
| 신뢰성 | 45.9 | -0.28 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.3 | -1.18 | 추정 | (추정) |
| 지시 따르기 | 30.3 | -1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
