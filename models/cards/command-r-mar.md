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
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.5, z: -1.21, r: 31.9, estimated: false }  # 전문 지식
  reasoning: { s: 14.6, z: -1.0, r: 35.0, estimated: false }  # 추론
  coding: { s: 10.0, z: -1.53, r: 27.1, estimated: false }  # 코딩
  agentic: { s: 6.2, z: -1.17, r: 32.4, estimated: true }  # 에이전트
  trust: { s: 20.5, z: -0.34, r: 44.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.8, z: -1.33, r: 30.0, estimated: true }  # 긴문맥
  instruction: { s: 25.2, z: -1.13, r: 33.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Command-R (Mar)

Cohere · Open · Unknown · 컨텍스트 128k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 3.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.9 | -1.21 | 실측 | [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.0 | -1.0 | 실측 | [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 27.1 | -1.53 | 실측 | [[scicode]] 6.0%×1.0 |
| 에이전트 | 32.4 | -1.17 | 추정 | (추정) |
| 신뢰성 | 44.9 | -0.34 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.0 | -1.33 | 추정 | (추정) |
| 지시 따르기 | 33.0 | -1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
