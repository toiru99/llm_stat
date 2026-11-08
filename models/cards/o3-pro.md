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
  knowledge: { s: 86.4, z: 1.64, r: 74.5, estimated: false }  # 전문 지식
  reasoning: { s: 86.4, z: 1.84, r: 77.6, estimated: false }  # 추론
  coding: { s: 85.4, z: 1.6, r: 74.0, estimated: true }  # 코딩
  agentic: { s: 76.4, z: 1.44, r: 71.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.8, z: 1.17, r: 67.6, estimated: true }  # 긴문맥
  instruction: { s: 81.3, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
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
| 전문 지식 | 74.5 | +1.64 | 실측 | [[gpqa-diamond]] 84.5%×0.4 |
| 추론 | 77.6 | +1.84 | 실측 | [[gpqa-diamond]] 84.5%×1.0 |
| 코딩 | 74.0 | +1.6 | 추정 | (추정) |
| 에이전트 | 71.6 | +1.44 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 추정 | (추정) |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
