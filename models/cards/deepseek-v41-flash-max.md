---
type: Model
title: DeepSeek V4.1 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1822
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.61, r: 59.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 0.8, r: 61.9, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.26, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 84.5, z: 1.72, r: 75.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.8, z: 0.62, r: 59.4, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 64.9, z: 0.51, r: 57.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# DeepSeek V4.1 Flash (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.29 · 출력 $1.2 · 혼합 $0.1822/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.2 | +0.61 | 실측 | [[humanitys-last-exam]] 39.2%×0.3 |
| 추론 | 61.9 | +0.8 | 실측 | [[humanitys-last-exam]] 39.2%×1.0 |
| 코딩 | 68.8 | +1.26 | 실측 | [[scicode]] 51.9%×1.0 |
| 에이전트 | 75.8 | +1.72 | 실측 | [[gdpval]] 1600.0%×1.0, [[itbench]] 46.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.4 | +0.62 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 57.6 | +0.51 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
