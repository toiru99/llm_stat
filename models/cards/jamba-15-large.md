---
type: Model
title: Jamba 1.5 Large
creator: AI21 Labs
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 2.6
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -0.85, r: 37.3, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.67, r: 40.0, estimated: false }  # 추론
  coding: { s: 10.4, z: -0.87, r: 36.9, estimated: true }  # 코딩
  agentic: { s: 14.2, z: -0.93, r: 36.1, estimated: true }  # 에이전트
  trust: { s: 31.5, z: 0.25, r: 53.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.3, z: -1.22, r: 31.7, estimated: true }  # 긴문맥
  instruction: { s: 22.4, z: -1.3, r: 30.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.5 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Jamba 1.5 Large

AI21 Labs · Open · Large · 컨텍스트 256k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $2.6/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 2.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.3 | -0.85 | 실측 | [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.0 | -0.67 | 실측 | [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.9 | -0.87 | 추정 | (추정) |
| 에이전트 | 36.1 | -0.93 | 추정 | (추정) |
| 신뢰성 | 53.7 | +0.25 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.7 | -1.22 | 추정 | (추정) |
| 지시 따르기 | 30.4 | -1.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
