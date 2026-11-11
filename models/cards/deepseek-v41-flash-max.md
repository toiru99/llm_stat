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
  knowledge: { s: 52.0, z: 0.25, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 52.0, z: 0.44, r: 56.5, estimated: false }  # 추론
  coding: { s: 74.0, z: 1.22, r: 68.3, estimated: false }  # 코딩
  agentic: { s: 84.5, z: 1.68, r: 75.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.8, z: 0.62, r: 59.3, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 57.1, z: 0.19, r: 52.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# DeepSeek V4.1 Flash (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.29 · 출력 $1.2 · 혼합 $0.1822/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.25 | 실측 | [[humanitys-last-exam]] 39.2%×0.3 |
| 추론 | 56.5 | +0.44 | 실측 | [[humanitys-last-exam]] 39.2%×1.0 |
| 코딩 | 68.3 | +1.22 | 실측 | [[scicode]] 51.9%×1.0 |
| 에이전트 | 75.3 | +1.68 | 실측 | [[gdpval]] 1600.0%×1.0, [[itbench]] 46.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.3 | +0.62 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 52.8 | +0.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
