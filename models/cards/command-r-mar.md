---
type: Model
title: Command-R (Mar)
creator: Cohere
license: Open
intelligence_index: 2.0
price_blended_usd_1m: 0.6
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 35
is_reasoning: false
radar:
  knowledge: { s: 15.3, z: -1.23, r: 31.5, estimated: false }  # 전문 지식
  reasoning: { s: 14.3, z: -1.03, r: 34.5, estimated: false }  # 추론
  coding: { s: 10.0, z: -1.57, r: 26.5, estimated: false }  # 코딩
  agentic: { s: 9.5, z: -1.07, r: 34.0, estimated: true }  # 에이전트
  trust: { s: 23.5, z: -0.16, r: 47.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.2, z: -1.09, r: 33.6, estimated: true }  # 긴문맥
  instruction: { s: 21.6, z: -1.33, r: 30.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Command-R (Mar)

Cohere · Open · Small(35B) · 컨텍스트 128k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 3.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.5 | -1.23 | 실측 | [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.5 | -1.03 | 실측 | [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 26.5 | -1.57 | 실측 | [[scicode]] 6.0%×1.0 |
| 에이전트 | 34.0 | -1.07 | 추정 | (추정) |
| 신뢰성 | 47.6 | -0.16 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.6 | -1.09 | 추정 | (추정) |
| 지시 따르기 | 30.1 | -1.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
