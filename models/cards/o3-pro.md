---
type: Model
title: o3-pro
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 26
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.2, z: 1.67, r: 75.0, estimated: false }  # 전문 지식
  reasoning: { s: 87.2, z: 1.87, r: 78.1, estimated: false }  # 추론
  coding: { s: 86.6, z: 1.66, r: 74.9, estimated: true }  # 코딩
  agentic: { s: 78.8, z: 1.54, r: 73.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.0, z: 1.22, r: 68.3, estimated: true }  # 긴문맥
  instruction: { s: 85.1, z: 1.35, r: 70.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# o3-pro

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $20.0 · 출력 $80.0 · 혼합 $26/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.0 | +1.67 | 실측 | [[gpqa-diamond]] 85.0%×0.4 |
| 추론 | 78.1 | +1.87 | 실측 | [[gpqa-diamond]] 85.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 추정 | (추정) |
| 에이전트 | 73.1 | +1.54 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.3 | +1.22 | 추정 | (추정) |
| 지시 따르기 | 70.3 | +1.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
