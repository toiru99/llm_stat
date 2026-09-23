---
type: Model
title: Jamba 1.5 Mini
creator: AI21 Labs
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.22
output_speed_tps: None
context_window: 256000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.1, z: -1.21, r: 31.9, estimated: false }  # 전문 지식
  reasoning: { s: 15.0, z: -0.98, r: 35.4, estimated: false }  # 추론
  coding: { s: 7.8, z: -0.95, r: 35.8, estimated: true }  # 코딩
  agentic: { s: 18.2, z: -0.75, r: 38.7, estimated: true }  # 에이전트
  trust: { s: 15.1, z: -0.5, r: 42.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.1, z: -1.08, r: 33.8, estimated: true }  # 긴문맥
  instruction: { s: 30.4, z: -0.97, r: 35.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.5 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Jamba 1.5 Mini

AI21 Labs · Open · Medium · 컨텍스트 256k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.2 · 출력 $0.4 · 혼합 $0.22/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 22.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.9 | -1.21 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.4 | -0.98 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 35.8 | -0.95 | 추정 | (추정) |
| 에이전트 | 38.7 | -0.75 | 추정 | (추정) |
| 신뢰성 | 42.6 | -0.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.8 | -1.08 | 추정 | (추정) |
| 지시 따르기 | 35.5 | -0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
